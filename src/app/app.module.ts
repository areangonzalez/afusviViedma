import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbCollapseModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

// modulos 
import { CabeceraComponent, BreadcrumbComponent, BreadcrumbsService, SharedModule } from "./shared";
//componentes
import { AppComponent } from './app.component';
// Routing
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbCollapseModule,
    NgbCarouselModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    BreadcrumbsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
