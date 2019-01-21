import { Injectable } from "@angular/core";

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
}

@Injectable()
export class SidebarService {
    MENU: RouteInfo[] = [
        // { path: "/management", title: "Administracion", icon: "ti-panel" },
        // { path: "/comunication", title: "Comunicacion", icon: "ti-comment" },
        // { path: "/organize", title: "Organizacion", icon: "ti-agenda" }
    ];

    constructor() {}
}
