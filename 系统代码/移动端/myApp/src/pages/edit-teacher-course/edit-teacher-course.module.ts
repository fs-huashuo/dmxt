import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTeacherCoursePage } from './edit-teacher-course';

@NgModule({
  declarations: [
    EditTeacherCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(EditTeacherCoursePage),
  ],
})
export class EditTeacherCoursePageModule {}
