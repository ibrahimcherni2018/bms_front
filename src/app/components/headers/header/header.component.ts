import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

import { GlobalText } from '../../../../texts/global';

import { ModalLanguageComponent } from '../../../components/modals/modal-language/modal-language.component';
import { AsyncacheService } from 'src/app/core/storage/asyncache.service';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public header = GlobalText.TEXTS;
    public language = "en";

    // User countries
    requesting = false;
    countries : string[] = [];
    selectedCountry : string;

    @Output() emitLogOut = new EventEmitter();
    @Input() userData: User;

    public currentRoute = "/";
    public breadcrumb: Array<any> = [{
        'route': "/",
        'name': this.header.home
    }];

    // Tooltip
    public tooltip;

    constructor(
        public dialog: MatDialog,
        public router: Router,
        private authService: AuthenticationService,
        private asyncacheService: AsyncacheService,
        private snackbar: MatSnackBar,
    ) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url;
                if (this.currentRoute.indexOf("?") > -1) {
                    this.currentRoute = this.currentRoute.substring(0, this.currentRoute.indexOf('?'));
                }
                this.updateBreadcrumb();
                this.updateTooltip();
            }
        })
    }

    ngOnInit() {
        this.language = GlobalText.language;
        this.userData = new User(this.userData);
        this.getCorrectCountries();
        this.updateTooltip();

        if(this.breadcrumb.length === 1) {
            this.currentRoute = this.router.url;
            if (this.currentRoute.indexOf("?") > -1) {
                this.currentRoute = this.currentRoute.substring(0, this.currentRoute.indexOf('?'));
            }
            this.updateBreadcrumb();
        }
    }

    ngDoCheck() {
        if (this.header !== GlobalText.TEXTS) {
            this.header = GlobalText.TEXTS;
            this.updateBreadcrumb();
            this.updateTooltip();
        }

        if(this.language !== GlobalText.language) {
            this.language = GlobalText.language;        }
    }

    getCorrectCountries() {
        let countries = this.userData.getAllCountries();

        this.countries = [];
        if (this.userData.rights === "ROLE_ADMIN") {
            countries.forEach( element => {
                this.countries.push(element.id);
            });
        } else {
            this.userData.country.forEach( element => {
                this.countries.push(element);
            });
        }

        this.asyncacheService.get(AsyncacheService.COUNTRY).subscribe(
            result => {
                if(result) {
                    this.selectCountry(result);
                } else {
                    this.selectCountry(this.countries[0]);
                }
            }
        )
    }

    selectCountry(c: string) {
        if(c) {
            if(!this.selectedCountry || !GlobalText.country) {
                this.autoLanguage(c);
            }
            else if(GlobalText.country && this.selectedCountry && c !== this.selectedCountry) {
                this.preventSnack(c);
            }

            this.selectedCountry = c;
            GlobalText.country = c;
            this.asyncacheService.set(AsyncacheService.COUNTRY, this.selectedCountry);
        }
    }

    autoLanguage(c: string) {
        if (this.userData.language) {
            GlobalText.changeLanguage(this.userData.language)
        } else {
            if(c === "SYR") {
                GlobalText.changeLanguage('ar');
            } else if(c === "KHM") {
                GlobalText.changeLanguage('en');
            }
        }
    }

    getFlag(c: string) {
        let url = '';

        if(c) {
            url = ("assets/images/" + c + ".png");
        } else {
            url = ("assets/images/defaultFlag.png");
        }

        return(url);
    }

    preventSnack(country: string) {
        const snack = this.snackbar.open('Page is going to reload in 3 sec to switch to ' + country + ' country. ', 'Reload now', {duration: 3000});

        snack
            .onAction()
            .subscribe(() => {
                window.location.reload();
            });

        snack
            .afterDismissed()
            .subscribe(() => {
                window.location.reload();
            });
    }

    /**
     * Update the breadcrumb according to the current route
     */
    updateBreadcrumb() {
        let parsedRoute = this.currentRoute.split('/');

        this.breadcrumb = [{
            'route': "/",
            'name': this.header.home
        }];

        parsedRoute.forEach((item, index) => {
            if (index > 0 && item !== "") {
                if (isNaN(+item)) {
                    let breadcrumbItem = {
                        'route': this.breadcrumb[index - 1].route + (index === 1 ? "" : "/") + item,
                        'name': this.header["header_" + item]
                    }
                    this.breadcrumb.push(breadcrumbItem);
                } else {
                    let length = this.breadcrumb.length;
                    this.breadcrumb[length - 1].route = this.breadcrumb[length - 1].route + "/" + item;
                }
            }
        });
    }

    /**
     * Update the text of the tooltip
     */
    updateTooltip() {
        let parsedRoute = this.currentRoute.split('/').filter(element => isNaN(parseInt(element)));
        const page = parsedRoute[parsedRoute.length - 1];

        if (page == '')
            this.tooltip = this.header["tooltip_dashboard"];
        else
            this.tooltip = this.header["tooltip_" + page.replace('-', '_')];
    }

    logOut(): void {
        this.emitLogOut.emit();
    }

    /**
    * open each modal dialog
    */
    openDialog(user_action): void {
        let dialogRef;

        if (user_action == 'language') {
            dialogRef = this.dialog.open(ModalLanguageComponent, {
                width: "40%",
            });
        }

        dialogRef.afterClosed().subscribe(result => {
            this.language = GlobalText.language;
        });
    }
}
