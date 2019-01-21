import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";

import { LAYOUT_ROUTES } from "./layout.routes";
import { ComponentsModule } from "../components/components.module";
import { DashboardModule } from "../views/dashboard/dashboard.module";
import { UserProfileComponent } from "../views/user-profile/user-profile.component";
import { TablesComponent } from "../views/tables/tables.component";
import { ShowCaseComponent } from "../views/showcase/show-case.component";
import { NotificationService } from "../components/notification/notification.service";

@NgModule({
    providers: [NotificationService],
    imports: [
        CommonModule,
        LAYOUT_ROUTES,
        ComponentsModule,
        DashboardModule
    ],
    declarations: [LayoutComponent, UserProfileComponent, TablesComponent, ShowCaseComponent]
})
export class LayoutModule {}
