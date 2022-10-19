import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"

class NotesService {
  removeNote(id) {
    appState.topic.notes = appState.topic.notes.filter(n => n.id !== id)
    appState.emit('topic')
  }
  editNote(id, bodyData) {
    let note = appState.topic.notes.find(n => n.id == id)
    note.body = bodyData
    appState.emit('topic')
    return note
  }
  createNote(data) {
    appState.topic.notes.push(new Note(data))
    appState.emit('topic')
  }

}

export const notesService = new NotesService()