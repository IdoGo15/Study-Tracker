import { assertPlatform, Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { Router } from '@angular/router';
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
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})

export class NewCourseComponent implements OnInit {

  courseT: String = '';

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private courseServise: CourseService, private router: Router,private _location: Location) { }

  ngOnInit(): void {

  }

    createCourse(){
          this.courseServise.createCourse(this.courseT).subscribe((course: any) => {
          this.router.navigate(['/courses', course._id ]);
       })
  }

  goHome(){
    this._location.back();
  }

  }





