import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, Input, inject } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
    selector: 'lib-progress-bar',
    templateUrl: './progress-bar.html',
    styleUrl: './_progress-bar.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBar implements OnInit, OnDestroy {
    private cdr = inject(ChangeDetectorRef);


    @Input() duration = 2000; // ms, default value
    progressValue = 100;


    private sub!: Subscription;

    ngOnInit() {
        const stepTime = 100; // ms
        const totalSteps = (this.duration) / stepTime;
        let currentStep = 0;
        this.sub = interval(stepTime).subscribe(() => {
            currentStep++;
            this.progressValue = 100 - (currentStep / totalSteps) * 100;

            this.cdr.markForCheck();
            if (this.progressValue <= 0) {
                this.progressValue = 0;
                this.sub.unsubscribe();
            }
        });
    }


    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }

    }
}
