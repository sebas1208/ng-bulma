import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "ngb-notification-item",
    template: `
        <div class="ngb-notification-item notification is-primary"
            [ngClass]="{'is-primary': type === 'primary', 'is-link': type === 'link',
                'is-info': type === 'info', 'is-success': type === 'success',
                'is-warning': type === 'warning', 'is-danger': type === 'danger'}"
            (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()">
            <button class="delete" (click)="onClickClose()"></button>
            <strong>{{title}}</strong> {{ message }}
        </div>
    `,
    styles: [`
        .ngb-notification-item {
            margin: 20px;
        }
    `]
})
export class NotificationItemComponent {

    @Input() title = '';
    @Input() message = '';
    @Input() index: number;
    @Input() type = '';
    @Input() life = 4000;
    @Output() onClose = new EventEmitter();

    timeout: any;

    constructor() { }

    ngAfterViewInit(): void {
        this.initTimeout();
    }

    initTimeout() {
        this.timeout = setTimeout(() => {
            this.emitClose();
        }, this.life || 4000);
    }

    clearTimeout() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }

    onMouseEnter() {
        this.clearTimeout();
    }

    onMouseLeave() {
        this.initTimeout();
    }


    onClickClose() {
        this.clearTimeout();

        this.emitClose();
    }

    emitClose() {
        this.onClose.emit({
            index: this.index
        });
    }

    ngOnDestroy() {
        this.clearTimeout();
    }
}
