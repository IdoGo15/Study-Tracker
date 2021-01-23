import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { MainViewComponent } from './components/main-view/main-view.component'
import { NewCourseComponent } from './components/new-course/new-course.component';
import { NewLectureComponent } from './components/new-lecture/new-lecture.component'
import { EditLectureComponent } from './components/edit-lecture/edit-lecture.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainCompComponent } from './components/main-comp/main-comp.component';


const routes: Routes = [
  {path:'', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'new-course', component: NewCourseComponent},
  //{path: 'courses', component:MainViewComponent },
  {path: 'courses', component:MainCompComponent },
  //{path: 'courses/:courseId', component:MainViewComponent},
  {path: 'courses/:courseId', component:MainCompComponent},
  {path: 'courses/:courseId/new-lecture', component: NewLectureComponent},
  {path: 'courses/:courseId/edit-course', component:EditCourseComponent},
  {path: 'courses/:courseId/lectures/:lectureId/edit-lecture', component:EditLectureComponent},
  {path: 'login', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



  ngOnInit() {


}



 }
