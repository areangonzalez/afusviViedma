import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GrupoComponent } from './grupo';
import { PromedioComponent } from './promedio';
import { FixtureComponent } from "./fixture";
import { ResultadosComponent } from "./resultados";

@NgModule({
    imports: [
        CommonModule,
        NgbModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        GrupoComponent,
        PromedioComponent,
        FixtureComponent,
        ResultadosComponent
    ],
    exports: [
        CommonModule,
        GrupoComponent,
        PromedioComponent,
        FixtureComponent,
        ResultadosComponent
    ]
})
export class SharedModule { }