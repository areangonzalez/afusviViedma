import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadisticasComponent } from './estadisticas.component';
import { PromedioComponent, AscensoDescensoComponent, GoleadoresComponent, EquiposComponent } from "./vistas";


const routes: Routes = [
    {
        path: '',
        component: EstadisticasComponent,
        children: [
            { path: '', redirectTo: 'promocion', pathMatch: 'full' },
            //{ path: 'promedio', component: PromedioComponent, data: { breadcrumb: 'Promedio' } },
            { path: 'promocion', component: AscensoDescensoComponent, data: { breadcrumb: 'Promoción' } },
            { path: 'tabla-goleadores', component: GoleadoresComponent, data: { breadcrumb: 'Tabla de goleadores' } },
            { path: 'lista-equipos', component: EquiposComponent, data: { breadcrumb: 'Equipos' } },
            { path: '', redirectTo: 'promocion', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstidisticasRoutingModule { }
