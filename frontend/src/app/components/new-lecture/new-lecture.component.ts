import { assertPlatform, Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { ActivatedRoute, Router,Params } from '@angular/router';
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
  selector: 'app-new-lecture',
  templateUrl: './new-lecture.component.html',
  styleUrls: ['./new-lecture.component.scss']
})
export class NewLectureComponent implements OnInit {

  lectureT: string = '';
  courseId: string = '';

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private courseServise: CourseService,private route: ActivatedRoute , private router: Router,private _location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.courseId = params['courseId'];
      });
  }

  createLecture(){
   this.courseServise.createLecture(this.lectureT, this.courseId).subscribe((newlec) => {
    console.log(newlec);
   });
   this._location.back();
  }
  goHome(){
    this._location.back();
  }

}
