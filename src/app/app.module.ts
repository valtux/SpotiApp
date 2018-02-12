import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {app_routing} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

//servicios
import {SpotifyService} from "./services/spotify.service";
//pipes
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    DomSeguroPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
