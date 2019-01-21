import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { BoxComponent } from "./box/box.component";

import { Footer, Header, Left, Right } from "./common/shared";
import { NotificationComponent } from "./notification/notification.component";
import { NotificationItemComponent } from "./notification/notification-item.component";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
        SidebarComponent,
        NavbarComponent,
        FooterComponent,
        DropdownComponent,
        BoxComponent,
        Header,
        Footer,
        Left,
        Right,
        NotificationComponent,
        NotificationItemComponent
    ],
    exports: [
        SidebarComponent,
        NavbarComponent,
        FooterComponent,
        BoxComponent,
        Header,
        Footer,
        Left,
        Right,
        NotificationComponent
    ]
})
export class ComponentsModule {}
