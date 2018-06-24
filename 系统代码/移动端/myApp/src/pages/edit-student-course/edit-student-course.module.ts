import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditStudentCoursePage } from './edit-student-course';

@NgModule({
  declarations: [
    EditStudentCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(EditStudentCoursePage),
  ],
})
export class EditStudentCoursePageModule {}
