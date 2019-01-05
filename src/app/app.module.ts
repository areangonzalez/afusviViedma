import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbCollapseModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

// modulos
import { CabeceraComponent, BreadcrumbComponent, BreadcrumbsService, SharedModule } from "./shared";
import { CoreModule } from './core'
//componentes
import { AppComponent } from './app.component';
// Routing
import { AppRoutingModule } from "./app.routing.module";
// Services
//import { ApiService, TorneoService } from "./core/services";

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    NgbCollapseModule,
    NgbCarouselModule,
    SharedModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    BreadcrumbsService,
    /* ApiService,
    TorneoService */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
