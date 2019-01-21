import { Component, OnInit, Input, HostBinding } from "@angular/core";

@Component({
    selector: "ngb-progress-bar",
    templateUrl: "./progress-bar.component.html",
    styleUrls: ["./progress-bar.component.scss"]
})
export class ProgressBarComponent implements OnInit {

    @Input() value: number;
    @Input() is: string = '';
    @Input() size: string = '';

    constructor() {}

    ngOnInit() {}
}
