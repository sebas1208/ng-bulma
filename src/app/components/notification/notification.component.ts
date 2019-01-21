import { Component, OnInit, Input } from "@angular/core";
import { NotificationService } from "./notification.service";
import { Notification } from "./Notification";

@Component({
    selector: "ngb-notification",
    templateUrl: "./notification.component.html",
    styleUrls: ["./notification.component.scss"]
})
export class NotificationComponent implements OnInit {

    @Input() position = 'top-left';

    notifications: Notification[] = [];

    constructor(public notificationService: NotificationService) {}

    ngOnInit() {
        this.notificationService.messageObserver.subscribe(messages => {
            if (messages instanceof Array) {
                this.notifications = [...messages].reverse();
            } else {
                this.notifications = [...this.notifications, messages];
            }
        });
    }


    onCloseNotification({index}) {
        console.log(this.notifications);
        this.notifications.splice(index, 1);
    }
}
