import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class ToastService {

  constructor(public snackBar: MatSnackBar) { }

  open(message: string, cssClass: string) {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    config.extraClasses = [cssClass];
    this.snackBar.open(message, 'x', config);
  }

}

