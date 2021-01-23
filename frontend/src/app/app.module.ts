import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { MainViewComponent } from './components/main-view/main-view.component';

import { HttpClientModule } from '@angular/common/http';
import { NewCourseComponent } from './components/new-course/new-course.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NewLectureComponent } from './components/new-lecture/new-lecture.component';
import { MatButtonModule } from '@angular/material/button';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { DeleteCourseDialogComponent } from './components/delete-course-dialog/delete-course-dialog.component';
import { EditLectureComponent } from './components/edit-lecture/edit-lecture.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainCompComponent } from './components/main-comp/main-comp.component';




@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    NewCourseComponent,
    NewLectureComponent,
    EditCourseComponent,
    DeleteCourseDialogComponent,
    EditLectureComponent,
    LoginPageComponent,
    MainCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
