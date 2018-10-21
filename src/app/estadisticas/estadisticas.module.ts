import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from "@angular/router";

import { EstadisticasComponent } from "./estadisticas.component";
import { MenuListTabComponent } from "./menu-list";
import { PromedioComponent, AscensoDescensoComponent, GoleadoresComponent, EquiposComponent } from "./vistas";
import { SharedModule } from "../shared";
import { EstidisticasRoutingModule } from "./estadisticas-routing.module";

@NgModule({
    imports: [
        SharedModule,
        EstidisticasRoutingModule
    ],
    declarations: [
        EstadisticasComponent,
        MenuListTabComponent,
        PromedioComponent,
        AscensoDescensoComponent,
        GoleadoresComponent,
        EquiposComponent
    ]
})
export class EstadisticasModule { 
    constructor() {
        console.log('EstadisticasModule loaded.');
    }
 }