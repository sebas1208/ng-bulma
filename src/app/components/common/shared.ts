import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "b-header",
    template: "<ng-content></ng-content>"
})
export class Header {}

@Component({
    selector: "b-footer",
    template: "<ng-content></ng-content>"
})
export class Footer {}

@Component({
    selector: "b-left",
    template: "<ng-content></ng-content>"
})
export class Left {}

@Component({
    selector: "b-right",
    template: "<ng-content></ng-content>"
})
export class Right {}
