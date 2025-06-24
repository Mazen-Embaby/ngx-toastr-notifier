import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService } from 'ngx-toastr-notifier';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'demo-app';
}
