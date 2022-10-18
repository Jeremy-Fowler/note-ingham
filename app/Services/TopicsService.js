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
  setActiveTopic(id) {
    const topic = appState.topics.find(t => t.id == id)
    appState.topic = topic
  }

  createTopic(data) {
    appState.topics = [...appState.topics, new Topic(data)]
    console.log(appState.topics);
  }
}

export const topicsService = new TopicsService()