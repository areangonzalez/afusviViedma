import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioModule } from "./inicio/inicio.module";
export function loadInicioMocule() { return InicioModule; }
import { EstadisticasModule } from "./estadisticas/estadisticas.module";
export function loadEstadisticasModule() { return EstadisticasModule; }

import { CustomPreloadingStrategy } from "./custom-preloading-strategy";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    }, 
    {
        path: 'inicio',
        loadChildren: loadInicioMocule,
        data: { preload: true }
    },
    {
        path: 'estadisticas',
        loadChildren: loadEstadisticasModule,
        data: { preload: true }
    },
    {
        path: '**',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,{
            // preload all modules; optionally we could
            // implement a custom preloading strategy for just some
            // of the modules (PRs welcome 😉)
            preloadingStrategy: CustomPreloadingStrategy
    })],
    exports: [RouterModule],
    providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }
