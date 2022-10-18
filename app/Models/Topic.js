import { generateId } from "../Utils/generateId.js";
import { Note } from "./Note.js";

export class Topic {
  constructor (data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.color = data.color
    this.notes = data.notes.map(n => new Note(n)) || []
  }

  get ListTemplate() {
    return `
    <div class="col-12">
      <p onclick="app.topicsController.setActiveTopic('${this.id}')" class="selectable ps-2 border-tab border-${this.color}">
        ${this.title}
      </p>
    </div>
    `
  }

  get DetailsTemplate() {
    return `
    <div>
      <h2 class="mb-3">
        <span>
          ${this.title}
        </span>
        <span>
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <i class="mdi mdi-plus"></i>
          </button>
        </span>
      </h2>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <form onsubmit="app.notesController.createNote()">
            <div class="row">
              <div class="col-10">
                <div class="form-floating">
                  <input type="text" name="title" class="form-control" id="note-title" required>
                  <label for="note-title">Note Title</label>
                </div>
              </div>
              <div class="col-2">
                <button type="submit" class="btn btn-success">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
      ${this.Notes}
      </div>
    </div>
    `
  }

  get Notes() {
    let template = ''
    this.notes.forEach(n => template += n.NoteTemplate)
    return template
  }

}