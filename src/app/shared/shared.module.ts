import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoComponent } from './grupo';
import { PromedioComponent } from './promedio';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        GrupoComponent,
        PromedioComponent
    ],
    exports: [
        CommonModule,
        GrupoComponent,
        PromedioComponent
    ],
})
export class SharedModule { }