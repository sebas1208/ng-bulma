import {
    Component,
    OnInit,
    ViewChild,
    Output,
    EventEmitter,
    Input
} from "@angular/core";

// import { SidebarService } from "../../services/sidebar.service";

@Component({
    moduleId: module.id,
    selector: "ngb-navbar-cmp",
    templateUrl: "navbar.component.html",
    styleUrls: ["navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
    @Output() menuClick = new EventEmitter<any>();
    @Input() isActive = false;
    @Input() isMobile = false;

    isUserDropdownActive = false;
    listTitles = [];

    @ViewChild("ngb-navbar-cmp") button;

    constructor() {}

    ngOnInit() {}

    getTitle() {
        let titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (let item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return "Dashboard";
    }

    onMenuClick() {
        this.isActive = !this.isActive;
        this.menuClick.emit();
    }

    toggleUser() {
        this.isUserDropdownActive = !this.isUserDropdownActive;
    }
}
