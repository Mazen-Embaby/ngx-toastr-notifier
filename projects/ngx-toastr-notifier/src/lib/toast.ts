
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  selector: 'lib-toast',
  imports: [MatSnackBarAction, ProgressBar],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class Toast {
  snackRef = inject<MatSnackBarRef<Toast>>(MatSnackBarRef);
  data = inject<ToastData>(MAT_SNACK_BAR_DATA);

  dismiss() {
    this.snackRef.dismiss();
  }
}
