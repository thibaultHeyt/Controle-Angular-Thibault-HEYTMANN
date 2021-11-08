import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncObservablePipeComponent, PortfolioComponent } from './portfolio/portfolio.component';
import { CompetenceComponent } from './competence/competence.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoteComponent } from './note/note.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    CompetenceComponent,
    NoteComponent,
    AsyncObservablePipeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
