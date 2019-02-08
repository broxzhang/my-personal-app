import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {routing} from './app.routing';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { PipesComponent } from './components/miniGames/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PipesComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
