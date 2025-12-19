import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService } from 'ngx-toastr-notifier';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<button (click)="showToast()">Show Toast</button>`,
})
export class App {
  private toastr = inject(ToastService);

  protected title = 'demo-app';

  showToast() {
    this.toastr.success('Hello world!', 'Toastr fun!', {
      duration: 1000, // Duration in milliseconds
      progressBar: true, // Show progress bar
      showClose: true, // Hide the close button
      horizontalPosition: 'right', // Position toast to the left
    });
  }
}
