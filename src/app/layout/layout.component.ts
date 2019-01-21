import { Component, OnInit, HostListener } from "@angular/core";
import widthHelper from "../services/width-helper";

@Component({
    selector: "ngb-layout",
    templateUrl: "./layout.component.html",
    styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
    isMobileMenuOpen = false;
    isMobile = false;

    constructor() {}

    ngOnInit() {
        this.isMobile = widthHelper.isWidthMobile(window.innerWidth);
    }

    onMenuClick() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    @HostListener("window:resize", ["$event"])
    onResize(event) {
        const newInnerWidth = event.target.innerWidth;

        this.isMobile = widthHelper.isWidthMobile(newInnerWidth);
        if (this.isMobile === false) {
            this.isMobileMenuOpen = false;
        }
    }
}
