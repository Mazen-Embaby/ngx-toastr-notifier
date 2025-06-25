import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService } from 'ngx-toastr-notifier';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-app';
  constructor(private toastr: ToastService) { }

  showToast() {
    this.toastr.warning("You're Computer is overheated", 'Warning', {
      duration: 50000,           // Duration in milliseconds
      showClose: true,         // Hide the close button
      horizontalPosition: 'right' // Position toast to the left
    });
  }
}
