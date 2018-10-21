import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// modulos 
import { CabeceraComponent, SharedModule } from "./shared";
//componentes
import { AppComponent } from './app.component';
// Routing
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbCollapseModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
