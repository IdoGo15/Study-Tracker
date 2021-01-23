import { Injectable } from '@angular/core';
import { Lecture } from './models/lecture.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  bol: boolean = true;

  constructor(private webReqService: WebRequestService) { }

  createCourse(title: String) {
   return this.webReqService.post('courses', {
      title
    });
  }

  createLecture(title: String, courseId: String){
    return this.webReqService.post(`courses/${courseId}/lectures`, {title});
  }

  getCourses(){
    return this.webReqService.get('courses');
  }

  getLectures(courseId: string){
    return this.webReqService.get(`courses/${courseId}/lectures`);
  }

  deleteCourse(courseId: string){
    return this.webReqService.delete(`courses/${courseId}`);
  }

  updateCourse(courseId: string,title: String) {
    return this.webReqService.patch(`courses/${courseId}`, { title });
   }

   deleteLecture(lectureId: string, courseId: string){
    return this.webReqService.delete(`courses/${courseId}/lectures/${lectureId}`);
   }

   updateLecture(courseId: string, lectureId: string, title: String){
     return this.webReqService.patch(`courses/${courseId}/lectures/${lectureId}`, {title});
   }

   complete(lecture: Lecture, courseId: string){
    lecture.completed = !lecture.completed;
     return this.webReqService.patch(`courses/${courseId}/lectures/${lecture._id}`, {
      completed: lecture.completed
     });
   }
}
