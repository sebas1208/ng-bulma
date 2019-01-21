import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { LoginModule } from "./views/login/login.module";
import { LayoutModule } from "./layout/layout.module";

import { APP_ROUTES } from "./app.routes";
import { ServicesModule } from "./services/services.module";


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        LoginModule,
        APP_ROUTES,
        LayoutModule,
        ServicesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
