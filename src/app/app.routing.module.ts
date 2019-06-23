import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
            loadChildren: './inicio/inicio.module#InicioModule',
          },
          {
              path: 'estadisticas',
              loadChildren: './estadisticas/estadisticas.module#EstadisticasModule',
              data: { preload: true, breadcrumb: 'Estadisticas' }
          },
          {
            path: 'torneos',
            loadChildren: './torneos/torneos.module#TorneosModule',
            data: { preload: true, breadcrumb: 'Torneos'}
          },
          {
              path: 'campeones',
              loadChildren: './campeones/campeones.module#CampeonesModule',
              data: { preload: true, breadcrumb: 'Campeones'}
          },
          {
            path: 'reglamento',
            loadChildren: './reglamento/reglamento.module#ReglamentoModule',
            data: { preload: true, breadcrumb: 'Reglamento'}
          },
          {
            path: 'institucional',
            loadChildren: './institucional/institucional.module#InstitucionalModule',
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
