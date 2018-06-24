import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {TeachercourseService} from "../teacher-course/teachercourse.service";

/**
 * Generated class for the AddClickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-click',
  templateUrl: 'add-click.html',
})
export class AddClickPage {
  coursedata:any;
  currentdata:any;
  ID:any;
  Latitude:any;
  Longitude:any;
  currentdata2:any;
  currentdata3:any;
  clickdata:any;
  state:any=0;
  click_id:any;
  clickvalue:any;
  data:any={

  }
  course:any={
    state:0,
    id:"",
    course_number:"",
    course_name:"",
    class_time:"",
    name:"",
    class_location:"",
  };
  currentUser:any = this.storage.get('currentUser', {}).ID;
  constructor(public navCtrl: NavController, public navParams: NavParams,private teachercourseService:TeachercourseService,private toastCtrl:ToastController,private modalcontroler:ModalController,private storage:LocalStorageProvider) {
  }
  ionViewWillEnter(){
    this.toReadData();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddClickPage');

  }
  toReadData() {
    console.log(this.currentUser);
    this.teachercourseService.readData(this.currentUser).then(result => {
      console.log(result);//打印返回的数据
      console.log(result.data);
      this.currentdata = JSON.parse(result.data);
      console.log(this.currentdata['check']);
      /* this.currentdata2=JSON.parse(this.currentdata);*/
      if (this.currentdata['check']) {
        this.coursedata = this.currentdata['data'];

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
  togetposision(){
    alert("请等待获取经纬度!");
    navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
  }
  addclick(){
    var now = new Date();
    var month = now.getUTCMonth()+1;
    var time = now.getFullYear()+"-"+month+"-"+now.getDate()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();

    if(document.getElementById('jingdu').innerText!=''){
      this.Latitude = document.getElementById('weidu').innerText;
      this.Longitude = document.getElementById('jingdu').innerText;
      console.log(this.course.id);
      this.teachercourseService.addclicked(this.currentUser,this.Longitude,this.Latitude,this.course.id,time).then(result => {
        console.log(result);//打印返回的数据
        console.log(result.data);
        this.currentdata2 = JSON.parse(result.data);
        console.log(this.currentdata2['check']);
        /* this.currentdata2=JSON.parse(this.currentdata);*/
        if (this.currentdata2['check']) {
          this.course.state = this.currentdata2['state'];
          this.course.click_id = this.currentdata2['id'];
        }
        else {
          let toast = this.toastCtrl.create({
            message: '查询错误',
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
  endclick(){
    var now = new Date();
    var month = now.getUTCMonth()+1;
    var time1 = now.getFullYear()+"-"+month+"-"+now.getDate()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
    console.log(time1);
    if(time1!=null) {
      this.teachercourseService.endclicked(this.currentUser, this.course.click_id, this.course.id, time1).then(result => {
        console.log(result);//打印返回的数据
        console.log(result.data);
        this.currentdata3 = JSON.parse(result.data);
        console.log(this.currentdata3['check']);
        /* this.currentdata2=JSON.parse(this.currentdata);*/
        if (this.currentdata3['check']) {

            let toast = this.toastCtrl.create({
              message: '签到已结束，下拉页面重新开始签到！',
              duration: 3000
            });
            toast.present();

          this.clickvalue = this.currentdata3['data'];
          console.log(this.clickvalue);

          this.course.state = 1;

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
  onSuccess(position) {



/*    alert('Latitude: '          + position.coords.latitude          + '\n' +
      'Longitude: '         + position.coords.longitude         + '\n' +
      'Altitude: '          + position.coords.altitude          + '\n' +
      'Accuracy: '          + position.coords.accuracy          + '\n' +
      'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
      'Heading: '           + position.coords.heading           + '\n' +
      'Speed: '             + position.coords.speed             + '\n' +
      'Timestamp: '         + position.timestamp                + '\n');*/
    document.getElementById("jingdu").innerText=position.coords.longitude;
    document.getElementById("weidu").innerText=position.coords.latitude;
  };

  // onError Callback receives a PositionError object
  //
  onError(error) {
    alert('code: '    + error.code    + '\n' +
      'message: ' + error.message + '\n');
  }


}
