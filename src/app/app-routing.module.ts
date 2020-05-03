import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './feature/notes/notes.component';
import { ViewNoteComponent } from './feature/view-note/view-note.component';
import { CreateNoteComponent } from './feature/create-note/create-note.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: NotesComponent },
  { path: 'create-note', component: CreateNoteComponent },
  { path: 'view-note', component: ViewNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
