import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* import { AppCustomPreloader } from './app-routing-loader';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormAgenteComponent } from './components/form-agente/form-agente.component';
import { VistaAgenteComponent } from './components/vista-agente/vista-agente.component';
import { AuthGuard } from './guards/auth.guard'; */


@NgModule({
    imports: [
        RouterModule.forRoot([
            /* { path: '', component: LoginFormComponent },
            { path: 'inicio', component: InicioComponent, data: { preload: true, title: 'Lista de agentes' }, canActivate: [AuthGuard] },
            { path: 'inicio/form-agente', component: FormAgenteComponent, data: { title: 'Agregar Agente', breadcrumb: 'Agregar agente' }, canActivate: [AuthGuard] },
            { path: 'inicio/form-agente/:id', component: FormAgenteComponent, data: { preload: true, title: 'Editar Agente', breadcrumb: 'Editar agente' }, canActivate: [AuthGuard] },
            { path: 'inicio/vista-agente/:id', component: VistaAgenteComponent, data: { title: 'Ver Agente', breadcrumb: 'Ver agente' }, canActivate: [AuthGuard] },
 */
            // otherside
            { path: '**', redirectTo: '' }
        ], /* { preloadingStrategy: AppCustomPreloader } */)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule { }
