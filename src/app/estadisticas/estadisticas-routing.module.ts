import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadisticasComponent } from './estadisticas.component';
import { PromedioComponent, AscensoDescensoComponent, GoleadoresComponent, EquiposComponent } from "./vistas";


const routes: Routes = [
    {
        path: '',
        component: EstadisticasComponent,
        children: [
            { path: '', redirectTo: 'promedio', pathMatch: 'full' },
            { path: 'promedio', component: PromedioComponent },
            { path: 'ascenso-descenso', component: AscensoDescensoComponent },
            { path: 'tabla-goleadores', component: GoleadoresComponent },
            { path: 'lista-equipos', component: EquiposComponent },
            { path: '', redirectTo: 'promedio', pathMatch: 'full' }            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstidisticasRoutingModule { }