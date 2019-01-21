import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./views/login/login/login.component";
import { RegisterComponent } from "./views/login/register/register.component";

const appRoutes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
