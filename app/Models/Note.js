import { generateId } from "../Utils/generateId.js";

export class Note {
  constructor (data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.body = data.body || 'Enter notes here...'
  }

  get NoteTemplate() {
    return `
    <h3>${this.title}</h3>
    <div class="mb-3 me-3">
      <textarea onchange="app.notesController.editNote('${this.id}')" class="form-control bg-light" name='notes' id="note-${this.id}" rows="3">${this.body}</textarea>
    </div>
    `
  }
}