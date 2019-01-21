import { RouterModule, Routes } from "@angular/router";

import { LayoutComponent } from "./layout.component";
import { DashboardComponent } from "../views/dashboard/dashboard.component";
import { UserProfileComponent } from "../views/user-profile/user-profile.component";
import { TablesComponent } from "../views/tables/tables.component";
import { ShowCaseComponent } from "../views/showcase/show-case.component";

const layoutRoutes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "dashboard",
                component: DashboardComponent,
                data: { titulo: "Dashboard" }
            },
            {
                path: "user-profile",
                component: UserProfileComponent,
                data: { titulo: "User Profile" }
            },
            {
                path: "tables",
                component: TablesComponent,
                data: { titulo: "Tables" }
            },
            {
                path: "components",
                component: ShowCaseComponent,
                data: { titulo: "Components" }
            },
            { path: "", redirectTo: "/dashboard", pathMatch: "full" }
        ]
    }
];

export const LAYOUT_ROUTES = RouterModule.forChild(layoutRoutes);
