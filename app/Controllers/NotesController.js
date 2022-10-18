import { notesService } from "../Services/NotesService.js";
import { getFormData } from "../Utils/FormHandler.js"

export class NotesController {

  createNote() {
    window.event.preventDefault()
    const form = window.event.target
    const data = getFormData(form)
    notesService.createNote(data)
  }

  editNote(id) {
    let bodyData = window.event.target
    // @ts-ignore
    notesService.editNote(id, bodyData.value)
  }
}