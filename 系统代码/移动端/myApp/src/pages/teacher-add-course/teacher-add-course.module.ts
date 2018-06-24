import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherAddCoursePage } from './teacher-add-course';

@NgModule({
  declarations: [
    TeacherAddCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherAddCoursePage),
  ],
})
export class TeacherAddCoursePageModule {}
