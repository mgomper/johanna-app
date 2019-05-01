import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JohannaComponent } from './johanna/johanna.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SteunComponent } from './steun/steun.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { NguCarouselModule } from '@ngu/carousel';



declare var $: any;


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JohannaComponent,
    AgendaComponent,
    SteunComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    NguCarouselModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
