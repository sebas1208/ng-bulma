import { Component, OnInit } from "@angular/core";
import { NotificationService } from "../../components/notification/notification.service";


@Component({
    selector: "cdm-show-case",
    templateUrl: "./show-case.component.html",
    styles: []
})
export class ShowCaseComponent implements OnInit {

    modal = false;

    constructor(public notificationService: NotificationService) {}

    ngOnInit() {
    }

    primary() {
        this.notificationService.add({type: "primary", title: "Title", detail: "This is the message."});
    }

    link() {
        this.notificationService.add({type: "link", title: "Title", detail: "This is the message."});
    }

    info() {
        this.notificationService.add({type: "info", title: "Title", detail: "This is the message."});
    }

    warning() {
        this.notificationService.add({type: "warning", title: "Title", detail: "This is the message."});
    }

    success() {
        this.notificationService.add({type: "success", title: "Title", detail: "This is the message."});
    }

    danger() {
        this.notificationService.add({type: "danger", title: "Title", detail: "This is the message."});
    }
}
