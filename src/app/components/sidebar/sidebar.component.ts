import { Component, OnInit, HostListener, Input } from "@angular/core";
import { SidebarService } from "../../services/sidebar.service";

@Component({
    moduleId: module.id,
    selector: "cdm-sidebar-cmp",
    templateUrl: "sidebar.component.html",
    styleUrls: ["sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
    public menuItems: any[];

    @Input() isMobile = true;
    @Input() isMobileMenuOpen = false;

    constructor(private sidebar: SidebarService) {}

    ngOnInit() {
        this.menuItems = this.sidebar.MENU.filter(menuItem => menuItem);
    }
}
