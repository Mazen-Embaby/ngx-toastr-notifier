# ngx-toastr-notifier

![success](/documentaion-assets/success2.png)

------

> **Notice:**
> This library requires **@angular/material version 20.x** as a dependency.
> Please ensure that you have it installed in your project before using this library.
>
> By utilizing Angular Material, we enhance maintainability and ensure better compatibility with future releases, particularly when relying on components like SnackBar.



## Compatibility with Angular Versions

Latest version available for each version of Angular

| ngx-toastr-notifier | Angular |
| ------------------- | ------- |
| current             | >= 20.x |

## Install

Use npm:

```bash
npm install ngx-toastr-notifier
```

using pnpm

```bash
pnpm add ngx-toastr-notifier
```

## Usage

Toastr usage is very simple, by default it comes with four types of notification messages:

**Success:**

```typescript
import { ToastService } from 'ngx-toastr-notifier';

@Component({...})
export class DemoComponent {
  constructor(private toastr: ToastService) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
```

![success](/documentaion-assets/success2.png)



**Info:**

```typescript
import { ToastService } from 'ngx-toastr-notifier';

@Component({...})
export class DemoComponent {
  constructor(private toastr: ToastService) {}

  showSuccess() {
    this.toastr.info('Hello world!', 'Toastr fun!');
  }
}
```

![success](/documentaion-assets/info.png)



**Error:**

```typescript
import { ToastService } from 'ngx-toastr-notifier';

@Component({...})
export class DemoComponent {
  constructor(private toastr: ToastService) {}

  showSuccess() {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }
}
```

![success](/documentaion-assets/error.png)



**Warning:**

```typescript
import { ToastService } from 'ngx-toastr-notifier';

@Component({...})
export class DemoComponent {
  constructor(private toastr: ToastService) {}

  showSuccess() {
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }
}
```

![success](/documentaion-assets/warning.png)



## Options

| Option             | Type                          | Default | Description                                                  |
| ------------------ | ----------------------------- | ------- | ------------------------------------------------------------ |
| duration           | number                        | 2000    | The length of time in milliseconds to wait before automatically dismissing the toastr. |
| showClose          | boolean                       | true    | The close button to be appeared or not                       |
| horizontalPosition | MatSnackBarHorizontalPosition | right   | The horizontal position to place the toastr.                 |
| verticalPosition   | MatSnackBarVerticalPosition   | top     | The vertical position to place the toastr.                   |
| Direction          | Direction                     | rtl     | Text layout direction for the toastr                         |



## Example of Usage with Options

use it to display a toast with a custom duration, `showClose` set to `false`, and horizontal position set to `left`.

```typescript
import { Component } from '@angular/core';
import { ToastService } from 'ngx-toastr-notifier';

@Component({
  selector: 'app-demo',
  template: `<button (click)="showToast()">Show Toast</button>`
})
export class DemoComponent {
  constructor(private toastr: ToastService) {}

  showToast() {
    this.toastr.success('This is a toast message!', 'Toast' {
      duration: 5000,           // Duration in milliseconds
      showClose: false,         // Hide the close button
      horizontalPosition: 'center' // Position toast to the left
    });
  }
}
```

![success](/documentaion-assets/success.png)

## License

`ngx-toastr-notifier` is available under the MIT license. See the [LICENSE](https://www.npmjs.com/package/ngx-toastr-notifier) file for more info.

## Contributors

We are open to any contributions and feed backs.

To build the library, run:

```bash
ng build ngx-toastr-notifier
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Keywords

[ngx-toastr-notifier](https://www.npmjs.com/package/ngx-toastr-notifier)
