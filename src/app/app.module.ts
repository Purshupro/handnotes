import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './feature/notes/notes.component';
import { ViewNoteComponent } from './feature/view-note/view-note.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CreateNoteComponent } from './feature/create-note/create-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ViewNoteComponent,
    HeaderComponent,
    FooterComponent,
    CreateNoteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
