import { notesService } from "../Services/NotesService.js";
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js";

export class NotesController {

  createNote() {
    window.event.preventDefault()
    const form = window.event.target
    const data = getFormData(form)
    notesService.createNote(data)
    // @ts-ignore
    form.reset()
  }

  editNote(id) {
    const bodyData = window.event.target
    // @ts-ignore
    const note = notesService.editNote(id, bodyData.value)
    Pop.toast(`${note.title} has been saved`, 'success')
  }

  async removeNote(id) {
    if (await Pop.confirm('Are you sure you want to delete this note?')) {
      notesService.removeNote(id)
    }
  }
}