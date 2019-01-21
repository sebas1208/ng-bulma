import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { NavBarDropdownComponent } from "./navbar-dropdown/navbar-dropdown.component";
import { BoxComponent } from "./box/box.component";

import { Footer, Header, Left, Right, Content } from "./common/shared";
import { NotificationComponent } from "./notification/notification.component";
import { NotificationItemComponent } from "./notification/notification-item.component";
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DropdownComponent, DropdownItemComponent } from './dropdown/dropdown.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
        SidebarComponent,
        NavbarComponent,
        FooterComponent,
        NavBarDropdownComponent,
        BoxComponent,
        Header,
        Footer,
        Left,
        Right,
        Content,
        NotificationComponent,
        NotificationItemComponent,
        ProgressBarComponent,
        DropdownComponent,
        DropdownItemComponent
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
        Content,
        NotificationComponent,
        ProgressBarComponent,
        NavBarDropdownComponent,
        DropdownComponent,
        DropdownItemComponent
    ]
})
export class ComponentsModule {}
