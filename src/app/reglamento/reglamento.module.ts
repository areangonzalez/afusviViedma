import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from "@angular/router";

import { ReglamentoComponent } from "./reglamento.component";
import { SharedModule } from "../shared";
import { ReglamentoRoutingModule } from "./reglamento-routing.module";

@NgModule({
    imports: [
        SharedModule,
        ReglamentoRoutingModule
    ],
    declarations: [
        ReglamentoComponent
    ],
    providers: [
    ],
})
export class ReglamentoModule {
    constructor() {
    }
 }
