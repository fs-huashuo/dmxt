import { Component } from '@angular/core';
import {ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {TeachercourseService} from "../teacher-course/teachercourse.service";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {StudentcourseService} from "../courses/studentcourse.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  coursedata:any;
  currentdata:any;
  ID:any;
  Latitude:any;
  Longitude:any;
  currentdata2:any;
  currentdata3:any;
  clickdata:any;
  state:any=1;
  click_id:any;
  data:any={

  }
  course:any={
    course_ID:"",
    course_number:"",
    course_name:"",
    class_time:"",
    name:"",
    class_location:"",
  };
  currentUser:any = this.storage.get('currentUser', {}).ID;
  constructor(public navCtrl: NavController, public navParams: NavParams,private studentcourseService:StudentcourseService,private teachercourseService:TeachercourseService,private toastCtrl:ToastController,private modalcontroler:ModalController,private storage:LocalStorageProvider) {
  }
  ionViewWillEnter(){
    this.toReadData();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  onSuccess(position) {
    document.getElementById("jingdu").innerText=position.coords.longitude;
    document.getElementById("weidu").innerText=position.coords.latitude;
  };

  // onError Callback receives a PositionError object
  //
  onError(error) {
    alert('code: '    + error.code    + '\n' +
      'message: ' + error.message + '\n');
  }
  addstudentclick(){
    var now = new Date();
    var month = now.getUTCMonth()+1;
    var time = now.getFullYear()+"-"+month+"-"+now.getDate()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
    this.Latitude = document.getElementById("weidu").innerText;
    this.Longitude = document.getElementById("jingdu").innerText;
    if(document.getElementById("jingdu").innerText!=''){
      this.teachercourseService.studentClick(this.currentUser,this.course.course_ID,this.Latitude,this.Longitude,time).then(result => {
        console.log(result);//打印返回的数据
        console.log(result.data);
        console.log(this.course.course_ID);
        this.currentdata = JSON.parse(result.data);
        console.log(this.currentdata['check']);
        /* this.currentdata2=JSON.parse(this.currentdata);*/
        if (this.currentdata['check']) {
          let toast = this.toastCtrl.create({
            message: '签到成功！',
            duration: 3000
          });
          toast.present();
        }
        else {
          let toast = this.toastCtrl.create({
            message: '当前并无该课程签到',
            duration: 3000
          });
          toast.present();
        }
      });
    }else{
      let toast = this.toastCtrl.create({
        message: '请定位！',
        duration: 3000
      });
      toast.present();
    }

  }
  togetposision(){
    alert("请等待获取经纬度!");
    navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
  }
  toReadData() {
    console.log(this.currentUser);
    this.teachercourseService.readCourseData(this.currentUser).then(result => {
      console.log(result);//打印返回的数据
      console.log(result.data);
      this.currentdata2 = JSON.parse(result.data);
      console.log(this.currentdata2['check']);
      /* this.currentdata2=JSON.parse(this.currentdata);*/
      if (this.currentdata2['check']) {
        this.coursedata = this.currentdata2['data'];
        console.log(this.coursedata);
      }
      else {
        let toast = this.toastCtrl.create({
          message: '查询错误',
          duration: 3000
        });
        toast.present();
      }
    });
  }
}

