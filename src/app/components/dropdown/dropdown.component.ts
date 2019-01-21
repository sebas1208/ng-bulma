import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "ngb-dropdown",
    templateUrl: "./dropdown.component.html",
    styleUrls: ["./dropdown.component.scss"]
})
export class DropdownComponent implements OnInit {

    @Input() title: string = '';
    @Input() hoverable: boolean = false;
    @Input() active: boolean = false;

    constructor() {}

    ngOnInit() {}

    onTriggerClick() {
        this.active = !this.active;
    }
}


@Component({
    selector: "ngb-dropdown-item",
    template: `
        <a class="dropdown-item" [class.is-active]="active">
            <div *ngIf="value">
                {{value}}
            </div>
            <ng-content *ngIf="!value"></ng-content>
        </a>
    `,
    styleUrls: ["./dropdown.component.scss"]
})
export class DropdownItemComponent {

    @Input() active: boolean = false;
    @Input() value: string;
}
