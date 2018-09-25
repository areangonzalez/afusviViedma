// Imports necesarios para crear módulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Importo los componentes
import { CabeceraComponent } from './cabecera/cabecera.component';
//import { NgbdModalContentBorrado, ModalBorrarFuncionComponent } from './modal-borrar-funcion/modal-borrar-funcion.component';

// Metadatos del módulo
@NgModule({
    declarations: [
        CabeceraComponent,
    ],
    imports: [CommonModule, NgbModule.forRoot()],
    exports: [
        CabeceraComponent,
    ],
})
export class LayoutModule { }
