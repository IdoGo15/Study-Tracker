import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CourseService } from 'src/app/course.service';
import {Location} from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from '../edit-course/edit-course.component';
import { DeleteCourseDialogComponent } from '../delete-course-dialog/delete-course-dialog.component'
import { Course } from '../../models/course.model'
import { Lecture } from '../../models/lecture.model';

@Component({
  selector: 'main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.scss']
})
export class MainCompComponent implements OnInit {

  public innerWidth: any;

  showFiller = false;

  courses: Course[] = [];
  lectures: Lecture[] = [];

  checked:boolean = false;

  selectedCourseId: string = '';
  currentLecture: Lecture = new Lecture;

  constructor(private courseService: CourseService, private route: ActivatedRoute, private _location: Location,
               private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    this.route.params.subscribe(
      (params: Params) => {
        if(params.courseId) {
          this.selectedCourseId = params.courseId;
          this.courseService.getLectures(params.courseId).subscribe((lectures: any) => {
          this.lectures = lectures;
        })
      } else {
        this.lectures = [];
      }
      }
    )

    this.courseService.getCourses().subscribe((courses: any) => {
      this.courses = courses;
    })
  }

  onDeleteCourseClick(){
    let dialogRef = this.dialog.open(DeleteCourseDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if(res == 'true'){
        this.courseService.deleteCourse(this.selectedCourseId).subscribe((res: any) => {
          this.router.navigate(['courses']);
        })
      }
    });
  }

  onEditCourseClick(){
    this.router.navigate([`courses/${this.selectedCourseId}/edit-course`]);
  }

  onLectureDeleteClick(lectureId: string){
    let dialogRef = this.dialog.open(DeleteCourseDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if(res == 'true'){
        this.courseService.deleteLecture(lectureId,this.selectedCourseId).subscribe((res: any) => {
        })
      }
      setTimeout(()=>{
        this.courseService.getLectures(this.selectedCourseId).subscribe((lectures: any) => {
          this.lectures = lectures;
        })
      }, 200);
    });
  }

  onLectureComplete(lecture: Lecture){
    this.courseService.complete(lecture,this.selectedCourseId).subscribe();
    setTimeout(()=>{
      this.courseService.getLectures(this.selectedCourseId).subscribe((lectures: any) => {
        this.lectures = lectures;
      })
    }, 200);
  }


}
