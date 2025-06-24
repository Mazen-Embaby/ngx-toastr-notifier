
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService } from 'ngx-toastr-notifier';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<button (click)="showToast()">Show Toast</button>`
})
export class App {
  protected title = 'demo-app';
  constructor(private toastr: ToastService) { }

  showToast() {
    this.toastr.warning("You're Computer is overheated", 'Warning', {
      duration: 50000,           // Duration in milliseconds
      showClose: true,         // Hide the close button
      horizontalPosition: 'right' // Position toast to the left
    });
  }
}


// import { Component } from '@angular/core';
// import { ToastService } from 'ngx-toastr-notifier';

// @Component({
//   selector: 'app-demo',
//   template: `<button (click)="showToast()">Show Toast</button>`
// })
// export class App {
//   constructor(private toastr: ToastService) { }

//   showToast() {
//     this.toastr.success('This is a toast message!', '', {
//       duration: 5000,           // Duration in milliseconds
//       showClose: false,         // Hide the close button
//       horizontalPosition: 'left' // Position toast to the left
//     });
//   }
// }