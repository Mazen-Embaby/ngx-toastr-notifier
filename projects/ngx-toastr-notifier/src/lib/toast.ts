
import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBarAction } from '@angular/material/snack-bar';
import { ViewEncapsulation } from '@angular/core';
import { ProgressBar } from "./progress-bar";

export interface ToastData {
  type: 'success' | 'info' | 'warning' | 'error';
  panelClass?: string;
  title?: string;
  message: string;
  icon?: string;
  duration: number; // in milliseconds
  showClose?: boolean;
  progressBar?: boolean;
}


@Component({
  selector: 'app-toast',
  imports: [MatSnackBarAction, ProgressBar],
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
