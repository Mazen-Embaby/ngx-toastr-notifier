import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastService } from './toast.service';


@NgModule({
  imports: [MatSnackBarModule],
  providers: [ToastService]
})
export class ToastModule { }
