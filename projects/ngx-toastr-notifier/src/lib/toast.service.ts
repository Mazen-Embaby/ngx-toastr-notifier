import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Toast, ToastData } from './toast';

type ToastParameter = Partial<Pick<MatSnackBarConfig<any>, 'announcementMessage' | 'direction' | 'horizontalPosition' | 'verticalPosition' | 'duration'>>
    & { showClose?: boolean };

@Injectable({ providedIn: 'root' })
export class ToastService {

    private readonly commonConfig: Partial<MatSnackBarConfig<ToastData>> = {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
    }

    // default = info
    private readonly defaultConfig: MatSnackBarConfig<ToastData> = {
        ...this.commonConfig,
        data: { type: 'info', message: '', showClose: true }
    };

    private readonly sucessConfig: MatSnackBarConfig<ToastData> = {
        ...this.commonConfig,
        data: { type: 'success', message: '', showClose: true, }
    }

    private readonly warningConfig: MatSnackBarConfig<ToastData> = {
        ...this.commonConfig,
        data: { type: 'warning', message: '', showClose: true }
    }

    private readonly errorConfig: MatSnackBarConfig<ToastData> = {
        ...this.commonConfig,
        data: { type: 'error', message: '', showClose: true }
    }


    constructor(private snackBar: MatSnackBar) { }

    private show(
        type: ToastData['type'],
        message: string,
        title?: string,
        opts?: ToastParameter
    ) {

        const data: ToastData = {
            type, message, title, showClose: opts?.showClose ?? true,
        };
        const config = { ...this.defaultConfig, ...(opts ?? {}), data }; // override of default
        config.panelClass = type;

        return this.snackBar.openFromComponent(Toast, config);
    }


    info(message: string, title?: string, opts?: ToastParameter) {
        const infoCfg = { ...this.defaultConfig, ...(opts) ?? {} };
        return this.show('info', message, title, infoCfg);
    }

    success(message: string, title?: string, opts?: ToastParameter) {
        const successCfg = { ...this.sucessConfig, ...(opts) ?? {} };
        return this.show('success', message, title, successCfg);
    }

    warning(message: string, title?: string, opts?: ToastParameter) {
        const warningCfg = { ...this.warningConfig, ...(opts) ?? {} };
        return this.show('warning', message, title, warningCfg);
    }

    error(message: string, title?: string, opts?: ToastParameter) {
        const errorCfg = { ...this.errorConfig, ...(opts) ?? {} };
        return this.show('error', message, title, errorCfg);
    }
}
