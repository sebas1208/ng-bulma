import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "ngb-progress-bar",
    templateUrl: "./progress-bar.component.html",
    styleUrls: ["./progress-bar.component.scss"]
})
export class ProgressBarComponent implements OnInit {

    @Input() value: number = 0;
    @Input() type: number = 0;
    @Input() size: number = 0;

    constructor() {}

    ngOnInit() {}
}
