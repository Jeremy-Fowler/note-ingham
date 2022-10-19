import { appState } from "../AppState.js"
import { topicsService } from "../Services/TopicsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawTopics() {
  let template = ''
  appState.topics.forEach(t => template += t.ListTemplate)
  setHTML('topics', template)
}

function _drawTopic() {
  if (appState.topic) {
    setHTML('topic', appState.topic.DetailsTemplate)
  } else {
    setHTML('topic', '')
  }
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
    // @ts-ignore
    form.reset()
    // @ts-ignore
    const collapse = bootstrap.Collapse.getOrCreateInstance('#topic-collapse')
    collapse.toggle()
  }
  setActiveTopic(id) {
    topicsService.setActiveTopic(id)
  }

  async removeTopic(id) {
    if (await Pop.confirm('Are you sure that you want to delete this topic?')) {
      topicsService.removeTopic(id)
    }
  }

}