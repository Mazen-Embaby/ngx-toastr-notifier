
import { Component, Inject, Input } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBarAction, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface ToastData {
  type: 'success' | 'info' | 'warning' | 'error';
  panelClass?: string;
  title?: string;
  message: string;
  showClose?: boolean;
  icon?: string;
}


@Component({
  selector: 'app-toast',
  imports: [MatSnackBarAction, MatIconModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Toast {
  constructor(
    public snackRef: MatSnackBarRef<Toast>,
    @Inject(MAT_SNACK_BAR_DATA) public data: ToastData
  ) { }
  dismiss() {
    this.snackRef.dismiss();
  }
}
