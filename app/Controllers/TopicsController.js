import { appState } from "../AppState.js"
import { topicsService } from "../Services/TopicsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function _drawTopics() {
  let template = ''
  appState.topics.forEach(t => template += t.ListTemplate)
  setHTML('topics', template)
}

function _drawTopic() {

}

export class TopicsController {
  constructor () {
    appState.on('topics', _drawTopics)
    appState.on('topic', _drawTopic)
    _drawTopics()
  }
  createTopic() {
    window.event.preventDefault()
    let form = window.event.target
    let data = getFormData(form)
    topicsService.createTopic(data)
  }
  setActiveTopic(id) {
    topicsService.setActiveTopic(id)
  }

}