import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbCollapseModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TrinityRingsSpinnerModule } from "angular-epic-spinners";

// modulos
import { CabeceraComponent, BreadcrumbComponent, BreadcrumbsService, LoaderComponent, SharedModule } from "./shared";
import { CoreModule } from './core'
//componentes
import { AppComponent } from './app.component';
// Routing
import { AppRoutingModule } from "./app.routing.module";
// Services
import { ErrorInterceptor } from './shared/helpers/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BreadcrumbComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    NgbCollapseModule,
    NgbCarouselModule,
    TrinityRingsSpinnerModule,
    SharedModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    BreadcrumbsService,
    LoaderComponent
    /* ApiService,
    TorneoService */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
