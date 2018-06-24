import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController,ModalController} from 'ionic-angular';
import { TeacherAddCoursePage} from "../teacher-add-course/teacher-add-course";
import {TabsPage} from "../tabs/tabs";
import {TeachercourseService} from "./teachercourse.service";
import {EditTeacherCoursePage} from "../edit-teacher-course/edit-teacher-course";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";

/**
 * Generated class for the TeacherCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-course',
  templateUrl: 'teacher-course.html',

})

export class TeacherCoursePage {
  persondata:any = {};
  currentdata:any;
  teacherdata:any;
  currentUser:any = this.storage.get('currentUser', {}).ID;
  constructor(public navCtrl: NavController, public navParams: NavParams,private teachercourseService:TeachercourseService,private toastCtrl:ToastController,private modalcontroler:ModalController,private storage:LocalStorageProvider) {
  }
  ionViewWillEnter(){
    this.persondata = this.navParams.data;
    this.toReadData();
  }
  ionViewDidLoad() {

    console.log('ionViewDidLoad TeacherCoursePage');
  }
  toTeacherAddCourse(){
    this.navCtrl.push(TeacherAddCoursePage,this.currentUser);

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
    this.teachercourseService.readData(this.currentUser).then(result => {
      console.log(result);//打印返回的数据
      console.log(result.data);
      this.currentdata = JSON.parse(result.data);
      /* this.currentdata2=JSON.parse(this.currentdata);*/
      if (this.currentdata['check']) {
        this.teacherdata = this.currentdata['data'];

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
  toEditCourse(item){
    console.log(item);
    this.navCtrl.push(EditTeacherCoursePage,item);
  }

  getValue(item){
    return Object.keys(item);
  }
}



