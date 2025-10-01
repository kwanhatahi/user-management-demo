import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar,) { }

  open(message: string, action: string, duration?: number) {
    let options = {
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
      duration: 5000
    };

    this._snackBar.open(message, action, options);
  }
}
