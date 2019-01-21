import { Component, OnInit, Input, HostBinding } from "@angular/core";

@Component({
    selector: "ngb-dropdown",
    templateUrl: "./dropdown.component.html",
    styles: []
})
export class DropdownComponent implements OnInit {

    @Input() title = "DropDownTitle";
    @Input() isRight = true;

    @HostBinding("class.navbar-item") navbarItem = true;
    @HostBinding("class.has-dropdown") hasDropdown = true;
    @HostBinding("class.is-active") isActive = false;


    constructor() {}

    ngOnInit() {}

    toggleDropdown() {
        this.isActive = !this.isActive;
    }
}
