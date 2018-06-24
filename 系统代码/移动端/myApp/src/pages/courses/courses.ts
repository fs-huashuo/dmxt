import { Component } from '@angular/core';
import {ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {AddCoursePage} from "../add-course/add-course";
import {TeachercourseService} from "../teacher-course/teachercourse.service";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {StudentcourseService} from "./studentcourse.service";
import {EditTeacherCoursePage} from "../edit-teacher-course/edit-teacher-course";
import {EditStudentCoursePage} from "../edit-student-course/edit-student-course";

@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html'
})
export class CoursesPage {
  persondata:any = {};
  currentdata:any;
  coursedata:any;
  currentUser:any = this.storage.get('currentUser', {}).ID;
  constructor(public navCtrl: NavController, public navParams: NavParams,private studentcourseService:StudentcourseService,private toastCtrl:ToastController,private storage:LocalStorageProvider) {

  }
  ionViewWillEnter(){
    this.persondata = this.navParams.data;
    this.toReadData();
  }
  ionViewDidLoad() {

    console.log('ionViewDidLoad StudentCoursePage');
  }
  toAddCourse(){
    this.navCtrl.push(AddCoursePage,this.currentdata);
  }

  doRefresh(refresher){
    this.toReadData();
    console.log("下拉刷新");
    //动态切换
    //当用户数量为3
    setTimeout(() => {
      console.log('加载完成后，关闭刷新');
      refresher.complete();

      //toast提示
    }, 2000);
  }

  toReadData() {
    console.log(this.currentUser);
    this.studentcourseService.readData(this.currentUser).then(result => {
      console.log(result);//打印返回的数据
      console.log(result.data);
      this.currentdata = JSON.parse(result.data);
      /* this.currentdata2=JSON.parse(this.currentdata);*/
      if (this.currentdata['check']) {
        this.coursedata = this.currentdata['data'];

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
  toCourseInfo(item){
    console.log(item);
    this.navCtrl.push(EditStudentCoursePage,item);
  }
}
