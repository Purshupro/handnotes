import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notesList = [];

  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.notesList.push({
      id: '',
      noteTitle: 'First Note',
      noteDescription: 'Some note description',
      createdAt: new Date(),
    });
  }
}
