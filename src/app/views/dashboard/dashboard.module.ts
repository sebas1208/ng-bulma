import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { ChartModule } from "primeng/chart";

@NgModule({
    imports: [CommonModule, ChartModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})
export class DashboardModule {}
