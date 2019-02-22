import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioModule } from "./inicio/inicio.module";
export function loadInicioModule() { return InicioModule; }
import { EstadisticasModule } from "./estadisticas/estadisticas.module";
export function loadEstadisticasModule() { return EstadisticasModule; }
import { CampeonesModule } from "./campeones/campeones.module";
export function loadCampeonesModule() { return CampeonesModule; }
import { TorneosModule } from "./torneos/torneos.module";
export function loadTorneosModule() { return TorneosModule; }
import { ReglamentoModule } from "./reglamento/reglamento.module";
export function loadReglamentoModule() { return ReglamentoModule; }
import { InstitucionalModule } from "./institucional/institucional.module";
export function loadInstitucionalModule() { return InstitucionalModule; }

import { CustomPreloadingStrategy } from "./custom-preloading-strategy";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        data: {loading: false, preload: true, breadcrumb: 'Inicio' },
        children: [
          {
            path: '',
            loadChildren: loadInicioModule,
          },
          {
              path: 'estadisticas',
              loadChildren: loadEstadisticasModule,
              data: { preload: true, breadcrumb: 'Estadisticas' }
          },
          {
            path: 'torneos',
            loadChildren: loadTorneosModule,
            data: { preload: true, breadcrumb: 'Torneos'}
          },
          {
              path: 'campeones',
              loadChildren: loadCampeonesModule,
              data: { preload: true, breadcrumb: 'Campeones'}
          },
          {
            path: 'reglamento',
            loadChildren: loadReglamentoModule,
            data: { preload: true, breadcrumb: 'Reglamento'}
          },
          {
            path: 'institucional',
            loadChildren: loadInstitucionalModule,
            data: { preload: true, breadcrumb: 'Institucional'}
          }
        ]
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
