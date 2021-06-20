import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientComponent } from './client/client.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {title: 'Home',}},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
   {
    path: 'client',  component:ClientComponent, data: {title: 'Client', header: 'client'} ,
    children: [
      { path: '', redirectTo: 'addClient', pathMatch: 'full'},
      { path: 'addClient', component: AddClientComponent, data: {title: 'Add Client', header: 'client'}},
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ClientComponent, SideNavComponent, HeaderComponent, HomeComponent,AddClientComponent]
