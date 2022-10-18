import { appState } from "../AppState.js"
import { Topic } from "../Models/Topic.js"
import { saveState } from "../Utils/Store.js"

function _save() {
  saveState('topics', appState.topics)
}

class TopicsService {
  setActiveTopic(id) {
    const topic = appState.topics.find(t => t.id == id)
    appState.topic = topic
  }
  constructor () {
    appState.on('topics', _save)
  }

  createTopic(data) {
    appState.topics = [...appState.topics, new Topic(data)]
    console.log(appState.topics);
  }
}

export const topicsService = new TopicsService()