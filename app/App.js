import { TopicsController } from "./Controllers/TopicsController.js";

class App {
  topicsController = new TopicsController()
}

window["app"] = new App();
