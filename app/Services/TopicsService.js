import { appState } from "../AppState.js"
import { Topic } from "../Models/Topic.js"
import { saveState } from "../Utils/Store.js"

function _save() {
  saveState('topics', appState.topics)
}

class TopicsService {
  constructor () {
    appState.on('topics', _save)
    appState.on('topic', _save)
  }
  removeTopic(id) {
    appState.topics = appState.topics.filter(t => t.id !== id)
    appState.topic = null
  }
  setActiveTopic(id) {
    const topic = appState.topics.find(t => t.id == id)
    appState.topic = topic
  }

  createTopic(data) {
    appState.topics = [...appState.topics, new Topic(data)]
  }
}

export const topicsService = new TopicsService()