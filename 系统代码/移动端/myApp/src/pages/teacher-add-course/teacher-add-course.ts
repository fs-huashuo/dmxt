import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {TeachercourseService} from "../teacher-course/teachercourse.service";

/**
 * Generated class for the TeacherAddCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-add-course',
  templateUrl: 'teacher-add-course.html',
})
export class TeacherAddCoursePage {
  course_number:any;
  course_name:any;
  class_time:any;
  class_location:any;
  currentdata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public teachercourseService:TeachercourseService,private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherAddCoursePage');
  }
  editcourse(){
    this.teachercourseService.addCourse(this.navParams.data,this.course_number,this.course_name,this.class_time,this.class_location).then(result => {
      console.log(result);//打印返回的数据
      console.log(result.data);
      this.currentdata = JSON.parse(result.data);
      /* this.currentdata2=JSON.parse(this.currentdata);*/
      if (this.currentdata['check']) {
        this.navCtrl.pop();
      }
      else {
        let toast = this.toastCtrl.create({
          message: '更新失败',
          duration: 3000
        });
        toast.present();
      }
    });
  }

}
