import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from "@angular/router";

import { InstitucionalComponent } from "./institucional.component";
import { SharedModule } from "../shared";
import { InstitucionalRoutingModule } from "./institucional-routing.module";

@NgModule({
    imports: [
        SharedModule,
        InstitucionalRoutingModule
    ],
    declarations: [
        InstitucionalComponent
    ],
    providers: [
    ],
})
export class InstitucionalModule {
    constructor() {
    }
 }
