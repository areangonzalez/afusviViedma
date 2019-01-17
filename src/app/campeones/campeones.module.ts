import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from "@angular/router";

import { CampeonesComponent } from "./campeones.component";
import { SharedModule } from "../shared";
import { CampeonesRoutingModule } from "./campeones-routing.module";

@NgModule({
    imports: [
        SharedModule,
        CampeonesRoutingModule
    ],
    declarations: [
        CampeonesComponent
    ],
    providers: [
    ],
})
export class CampeonesModule {
    constructor() {
    }
 }
