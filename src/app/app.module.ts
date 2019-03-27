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
import { ResumeComponent } from './components/resume/resume.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { CodeTestComponent } from './components/code-test/code-test.component';
import { CardBoardComponent } from './components/card-board/card-board.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PipesComponent,
    ResumeComponent,
    FooterComponent,
    ContactComponent,
    CodeTestComponent,
    CardBoardComponent,
    ContactCardComponent
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
