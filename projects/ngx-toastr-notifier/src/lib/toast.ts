
import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBarAction } from '@angular/material/snack-bar';
import { ViewEncapsulation } from '@angular/core';

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
  imports: [MatSnackBarAction],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
