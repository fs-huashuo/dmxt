import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {TeachercourseService} from "../teacher-course/teachercourse.service";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {StudentcourseService} from "../courses/studentcourse.service";
import {containerStart} from "@angular/core/src/render3/instructions";

/**
 * Generated class for the AddCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-course',
  templateUrl: 'add-course.html',
})
export class AddCoursePage {
  coursedata:any;
  currentdata:any;
  ID:any;
  course:any={
    course_ID:"",
    course_number:"",
    course_name:"",
    class_time:"",
    name:"",
    class_location:"",
  };

  currentUser:any = this.storage.get('currentUser', {}).ID;
  constructor(public navCtrl: NavController, public navParams: NavParams,private studentcourseService:StudentcourseService,private toastCtrl:ToastController,private modalcontroler:ModalController,private storage:LocalStorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCoursePage');
    this.toReadData()
  }
  toReadData() {
    console.log(this.currentUser);
    this.studentcourseService.addCourse(this.currentUser).then(result => {
      console.log(result);//打印返回的数据
      console.log(result.data);
      this.currentdata = JSON.parse(result.data);
      console.log(this.currentdata['check']);
      /* this.currentdata2=JSON.parse(this.currentdata);*/
      if (this.currentdata['check']) {
        this.coursedata = this.currentdata['data'];
        console.log(this.coursedata);
        this.course = this.coursedata[0];
      }
      else {
        let toast = this.toastCtrl.create({
          message: '账号密码错误',
          duration: 3000
        });
        toast.present();
      }
    });
  }
  getitem(){
    console.log(this.ID);



  }

  addStudentCourse(){
    console.log(this.course.course_ID);
    this.studentcourseService.addStudentCourse(this.course.course_ID,this.currentUser).then(result => {
      console.log(result);//打印返回的数据
      console.log(result.data);
      this.currentdata = JSON.parse(result.data);
      console.log(this.currentdata['check']);
      /* this.currentdata2=JSON.parse(this.currentdata);*/
      if (this.currentdata['check']) {
        this.navCtrl.pop();
      }
      else {
        let toast = this.toastCtrl.create({
          message: '账号密码错误',
          duration: 3000
        });
        toast.present();
      }
    });

  }
}
