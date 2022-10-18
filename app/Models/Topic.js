import { generateId } from "../Utils/generateId.js";

export class Topic {
  constructor (data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.color = data.color
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
}