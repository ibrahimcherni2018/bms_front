import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class UpdateService {

    constructor(
        private snackbar: MatSnackBar,
        private updates: SwUpdate,
    ) {
        this.updates.available.subscribe(
            event => {
                const snack = this.snackbar.open('BMS Update is available', 'Reload');

                snack
                    .onAction()
                    .subscribe(() => {
                    window.location.reload();
                    });

                setTimeout(() => {
                    snack.dismiss();
                }, 6000);
            }
        );
    }
}
