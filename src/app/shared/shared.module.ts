import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoComponent } from './grupo';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        GrupoComponent
    ],
    exports: [
        CommonModule,
        GrupoComponent
    ],
})
export class SharedModule { }