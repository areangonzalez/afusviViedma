import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from "@angular/router";

import { TorneosComponent } from "./torneos.component";
import { SharedModule } from "../shared";
import { TorneosRoutingModule } from "./torneos-routing.module";

@NgModule({
    imports: [
        SharedModule,
        TorneosRoutingModule
    ],
    declarations: [
        TorneosComponent
    ],
    providers: [
    ],
})
export class TorneosModule {
    constructor() {
    }
 }
