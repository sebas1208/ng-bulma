import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Notification } from "./Notification";

@Injectable()
export class NotificationService {

    private messageSource = new Subject<Notification | Notification[]>();
    private clearSource = new Subject<string>();

    messageObserver = this.messageSource.asObservable();
    clearObserver = this.clearSource.asObservable();

    add(message: Notification) {
        if (message) {
            this.messageSource.next(message);
        }
    }

    addAll(messages: Notification[]) {
        if (messages && messages.length) {
            this.messageSource.next(messages);
        }
    }

    clear(key?: string) {
        this.clearSource.next(key || null);
    }
}
