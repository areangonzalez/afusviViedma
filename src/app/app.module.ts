import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// Routing
import { AppRoutingModule } from "./app.routing.module";
// modulos 
import { LayoutModule } from "./layout/layout.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgbCollapseModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
