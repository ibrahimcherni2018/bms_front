import { Injectable } from '@angular/core';

import * as CryptoJS from 'crypto-js';

import { AsyncacheService } from '../storage/asyncache.service';
import { map } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class WsseService {

	private username: string;
	private salted: string;
	private chrsz = 8;
	private b64pad = '=';

	constructor(
		public cache: AsyncacheService
	) { }

	setUsername(username) {
		this.username = username;
	}

	setSalted(salted) {
		this.salted = salted;
	}

	// Crypt the password with the salt
	saltPassword(salt, password) {
		let salted = password + '{' + salt + '}';
		let digest = CryptoJS.SHA512(salted);

		for (let i = 1; i < 5000; i++) {
			digest = CryptoJS.SHA512(digest.concat(CryptoJS.enc.Utf8.parse(salted)));
		}
		
		let saltedPassword = CryptoJS.enc.Base64.stringify(digest);
		this.setSalted(saltedPassword);
		return saltedPassword;
	}

	// Get headers for HTTP request
	getHeaderValue(user?) {
		return this.cache.getUser().pipe(
            map(
                result => {
                    let cachedUser = result;

                    if (cachedUser) {
                        this.username = cachedUser.username;
                        this.salted = cachedUser.salted_password;
                    } else {
                        this.username = user.username;
                        this.salted = user.salted_password;
                    }
            
                    let nonce = this.generateNonce(16);
                    let created = this.getDate(new Date());
                    let nonce64 = this.base64encode(nonce);
                    let digest = this.getDigest(nonce, created, this.salted);
            
                    let header = 'UsernameToken Username=\"' + this.username + '\", PasswordDigest=\"' + digest + '\", Nonce=\"' + nonce64 + '\", Created=\"' + created + '\"';
                    return header;
                }
            )
        );
		
	}

	//------------------------------------------------------------------------//
	//---------------------------------WSSE-----------------------------------//
	//------------------------------------------------------------------------//

	// Arbitrary number which is only used once to be sure old communications can't be reused
	generateNonce(lgth) {
		let nonceChars = "0123456789abcdef";
		let nonce = "";

		for (let i = 0; i < lgth; i++) {
			nonce += nonceChars.charAt(Math.floor(Math.random() * nonceChars.length));
		}

		return nonce;
	}

	sha1(exp, lgth) {
		// Add padding
		exp[lgth >> 5] |= 0x80 << (24 - lgth % 32);
		exp[((lgth + 64 >> 9) << 4) + 15] = lgth;

		let newExp = new Array(80);
		let a = 1732584193;
		let b = -271733879;
		let c = -1732584194;
		let d = 271733878;
		let e = -1009589776;

		for (let i = 0; i < exp.length; i += 16) {
			let oldA = a;
			let oldB = b;
			let oldC = c;
			let oldD = d;
			let oldE = e;

			for (let j = 0; j < 80; j++) {
				if (j < 16) {
					newExp[j] = exp[i + j];
				}
				else {
					newExp[j] = this.rol(newExp[j - 3] ^ newExp[j - 8] ^ newExp[j - 14] ^ newExp[j - 16], 1);
				}
				let t = this.safeAdd(
					this.safeAdd(this.rol(a, 5), this.sha1Ft(j, b, c, d)),
					this.safeAdd(this.safeAdd(e, newExp[j]), this.sha1Kt(j))
				);
				e = d;
				d = c;
				c = this.rol(b, 30);
				b = a;
				a = t;
			}
			a = this.safeAdd(a, oldA);
			b = this.safeAdd(b, oldB);
			c = this.safeAdd(c, oldC);
			d = this.safeAdd(d, oldD);
			e = this.safeAdd(e, oldE);
		}

		let sha1 = new Array(a, b, c, d, e);
		return sha1;
	}

	// Rotate a 32-bit number to the left
	rol(num, cnt) {
		return (num << cnt) | (num >>> (32 - cnt));
	}

	// Add integers, wrapping at 2^32. This uses 16-bit operations internally to work around bugs in some JS interpreters
	safeAdd(x, y) {
		let lsw = (x & 0xFFFF) + (y & 0xFFFF);
		let msw = (x >> 16) + (y >> 16) + (lsw >> 16);

		return (msw << 16) | (lsw & 0xFFFF);
	}

	// Perform the appropriate triplet combination function for the current iteration
	sha1Ft(t, b, c, d) {
		if (t < 20) return (b & c) | ((~b) & d);
		if (t < 40) return b ^ c ^ d;
		if (t < 60) return (b & c) | (b & d) | (c & d);

		return b ^ c ^ d;
	}

	// Determine the appropriate additive constant for the current iteration
	sha1Kt(t) {
		return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 :
			(t < 60) ? -1894007588 : -899497514;
	}

	getDate(date) {
		let yyyy = date.getUTCFullYear();
		let mm = date.getUTCMonth() + 1;
		let dd = date.getUTCDate();
		let hh = date.getUTCHours();
		let mn = date.getUTCMinutes();
		let ss = date.getUTCSeconds();

		if (mm < 10) { mm = "0" + mm; }
		if (dd < 10) { dd = "0" + dd; }
		if (hh < 10) { hh = "0" + hh; }
		if (mn < 10) { mn = "0" + mn; }
		if (ss < 10) { ss = "0" + ss; }

		let newDate = yyyy + "-" + mm + "-" + dd + "T" + hh + ":" + mn + ":" + ss + "Z"

		return newDate;
	}

	base64encode(nonce) {
		let nonce64 = btoa(nonce);
		return nonce64;
	}

	// Convert an 8-bit or 16-bit string into an array of big-endian words
	// In 8-bit function, characters >255 have their hi-byte silently ignored
	strToBin(str) {
		let bin = [];
		let mask = (1 << this.chrsz) - 1;

		for (let i = 0; i < str.length * this.chrsz; i += this.chrsz) {
			bin[i >> 5] |= (str.charCodeAt(i / this.chrsz) & mask) << (24 - i % 32);
		}

		return bin;
	}

	// Convert an array of big-endian words to a base-64 string
	binTo64(binarray) {
		let tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		let str = "";

		for (let i = 0; i < binarray.length * 4; i += 3) {
			let triplet = (((binarray[i >> 2] >> 8 * (3 - i % 4)) & 0xFF) << 16)
				| (((binarray[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4)) & 0xFF) << 8)
				| ((binarray[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4)) & 0xFF);
			for (let j = 0; j < 4; j++) {
				if (i * 8 + j * 6 > binarray.length * 32) {
					str += this.b64pad;
				}
				else {
					str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
				}
			}
		}

		return str;
	}

	getDigest(nonce, created, salted) {
		let mix = nonce + created + salted;
		let sha1 = this.sha1(this.strToBin(mix), mix.length * this.chrsz);

		let digest = this.binTo64(sha1);
		return digest;
	}
}
