import { NotesController } from "./Controllers/NotesController.js";
import { TopicsController } from "./Controllers/TopicsController.js";

class App {
  topicsController = new TopicsController()
  notesController = new NotesController()
}

window["app"] = new App();
