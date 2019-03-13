import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JohannaComponent } from './johanna/johanna.component';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SteunComponent } from './steun/steun.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'johanna', component: JohannaComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'steun', component: SteunComponent },
  { path: 'contact', component: ContactComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
