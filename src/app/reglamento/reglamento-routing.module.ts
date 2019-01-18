import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReglamentoComponent } from './reglamento.component';

const routes: Routes = [
    {
        path: '',
        component: ReglamentoComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReglamentoRoutingModule { }
