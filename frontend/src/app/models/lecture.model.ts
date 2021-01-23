import { formatDate } from "@angular/common";

export class Lecture {
  _id: string;
  courseId: string;
  title: string;
  completed: boolean;
  modified: String;
  constructor(){
    this._id = '';
    this.courseId= '';
    this.title = '';
    this.completed = false;
    this.modified = new Date().toLocaleDateString();
  }
}
