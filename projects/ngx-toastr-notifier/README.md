# ngx-toastr-notifier

![success2.png](https://github.com/Mazen-Embaby/ngx-toastr-notifier/blob/main/projects/ngx-toastr-notifier/documentaion-assets/success2.png?raw=true)

---

> **Notice:**
> This library requires **@angular/material** as a dependency.
> Please ensure that you have it installed in your project before using this library.
>
> By utilizing Angular Material, we enhance maintainability and ensure better compatibility with future releases, particularly when relying on components like SnackBar.

## Compatibility with Angular Versions

Latest version available for each version of Angular

| ngx-toastr-notifier | Angular | @angular/material |
| ------------------- | ------- | ----------------- |
| current             | >= 20.x | >=20.x            |
| ^19.0.4             | >= 19.x | >=19.x            |

## Install

Use npm:

```bash
npm install ngx-toastr-notifier
```

Use pnpm

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

![success2.png](https://github.com/Mazen-Embaby/ngx-toastr-notifier/blob/main/projects/ngx-toastr-notifier/documentaion-assets/success2.png?raw=true)

**Info:**

```typescript
import { ToastService } from 'ngx-toastr-notifier';

@Component({...})
export class DemoComponent {
  constructor(private toastr: ToastService) {}

  showSuccess() {
    this.toastr.info('We are open today from 10 to 22', 'Information');
  }
}
```

![info.png](https://github.com/Mazen-Embaby/ngx-toastr-notifier/blob/main/projects/ngx-toastr-notifier/documentaion-assets/info.png?raw=true)

**Error:**

```typescript
import { ToastService } from 'ngx-toastr-notifier';

@Component({...})
export class DemoComponent {
  constructor(private toastr: ToastService) {}

  showSuccess() {
    this.toastr.error("Yo're not authorized", 'Error');
  }
}
```

![error.png](https://github.com/Mazen-Embaby/ngx-toastr-notifier/blob/main/projects/ngx-toastr-notifier/documentaion-assets/error.png?raw=true)

**Warning:**

```typescript
import { ToastService } from 'ngx-toastr-notifier';

@Component({...})
export class DemoComponent {
  constructor(private toastr: ToastService) {}

  showSuccess() {
    this.toastr.warning("You're Computer is overheated", "Warning");
  }
}
```

![warning.png](https://github.com/Mazen-Embaby/ngx-toastr-notifier/blob/main/projects/ngx-toastr-notifier/documentaion-assets/warning.png?raw=true)

## Options

| Option             | Type                          | Default | Description                                                  |
| ------------------ | ----------------------------- | ------- | ------------------------------------------------------------ |
| duration           | number                        | 2000    | The length of time in milliseconds to wait before automatically dismissing the toastr. |
| showClose          | boolean                       | true    | The close button to be appeared or not                       |
| horizontalPosition | MatSnackBarHorizontalPosition | right   | The horizontal position to place the toastr.                 |
| verticalPosition   | MatSnackBarVerticalPosition   | top     | The vertical position to place the toastr.                   |
| Direction          | Direction                     | ltr     | Text layout direction for the toastr                         |

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
      horizontalPosition: 'center' // Position toast to the center
    });
  }
}
```

![success.png](https://github.com/Mazen-Embaby/ngx-toastr-notifier/blob/main/projects/ngx-toastr-notifier/documentaion-assets/success.png?raw=true)

## License

`ngx-toastr-notifier` is available under the MIT license. See the [LICENSE](https://www.npmjs.com/package/ngx-toastr-notifier) file for more info.

## Contributors

We are open to any contributions and feed backs.

To build the library, run:

```bash
npx @angular/cli@20 build ngx-toastr-notifier
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Keywords

[ngx-toastr-notifier](https://www.npmjs.com/package/ngx-toastr-notifier)
