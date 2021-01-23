import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { CourseService } from 'src/app/course.service';
import {Location} from '@angular/common';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private courseService: CourseService, private router: Router,private _location: Location) { }

  courseId: string = '';
  courseT: string = '';

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);


  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.courseId = params.courseId;
      }
    )
  }

  updateCourse(){
    this.courseService.updateCourse(this.courseId, this.courseT).subscribe();
    this.router.navigate([`courses/${this.courseId}`]);
  }

  goHome(){
    this._location.back();
  }

}
