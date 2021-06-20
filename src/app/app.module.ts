import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientNavComponent } from './client-nav/client-nav.component';
import { AddClientComponent } from './add-client/add-client.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    ClientNavComponent,
    AddClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
