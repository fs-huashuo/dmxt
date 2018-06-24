import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {LoginService} from "./LoginService";
import {HttpInterceptorService} from '../../providers/http-interceptor/http-interceptor.service';
import {RegisterPage} from "../register/register";
import {ForgotPasswordPage} from "../forgot-password/forgot-password";
import {MyApp} from "../../app/app.component";

import {TabsPage} from "../tabs/tabs";


/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  private username: string='';
  private password: string='';
  logintype:any=0;
  currentdata:any;
  currentdata2:object;

  constructor(public navCtrl: NavController, public navParams: NavParams,private loginService: LoginService,private toastCtrl:ToastController,private storage:LocalStorageProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  tologin()
  {
    if(this.username=='')
    {
      let toast = this.toastCtrl.create({
        message:'用户名不能为空',
        duration:3000
      });
      toast.present();
    }


    this.loginService.login(this.username, this.password,this.logintype).then(result => {
      console.log(result);//打印返回的数据
      console.log(result.data);
      this.currentdata=JSON.parse(result.data);
      /* this.currentdata2=JSON.parse(this.currentdata);*/
      console.log(this.currentdata['check']);
      if(this.currentdata['check']){
        console.log(this.currentdata['rolename']);
        this.navCtrl.push(TabsPage,this.currentdata);
        this.storage.set('currentUser', this.currentdata);

      }
      else{
        let toast = this.toastCtrl.create({
          message:'账号密码错误',
          duration:3000
        });
        toast.present();
      }



    });
    /*  .subscribe(data=>{
        console.log(data);
      })*/

  }
  login(userName: string, passWord: string) {
    if (this.password != '' && this.username == '') {
      let toast = this.toastCtrl.create({
        message: '请输入账号',
        duration: 3000
      });
      toast.present();
    }
    if (this.password == '' && this.username != '') {
      let toast = this.toastCtrl.create({
        message: '请输入密码',
        duration: 3000
      });
      toast.present();
    }
    if(this.username!=''&&this.password!=''){


      let isUser:any = this.storage.get(this.username,{
        phone: '',
        email: '',
        shopName: '',
        password: '',
        name: '',
        time: '',
        dianphone: '',
        type: '',
        simname: ''
      });

      // if(isUser.phone==''||isUser.email==''){
      //   let alert = this.alertCtrl.create({
      //     title: '提示',
      //     message:'用户名不正确',
      //     buttons:['确定']
      //   });
      //   alert.present();
      // }
      //
      // if(isUser.phone==this.username||isUser.email==this.username){
      //   if(isUser.password==this.password){
      //     console.log('aaaa');
      //     this.navCtrl.push(TabsPage);
      //     this.storage.set('currentUser',isUser);
      //
      //   }else{
      //     let alert = this.alertCtrl.create({
      //       title: '提示',
      //       message:'密码不正确',
      //       buttons:['确定']
      //     });
      //     alert.present();
      //   }
      // }
    }
    this.navCtrl.push(TabsPage);
    // return this.httpInterceptorService.request({
    //   method: 'POST',
    //   url: 'http://192.168.199.156:8080/user/checkLogin',
    //   data: {
    //     username: userName,
    //     password: passWord
    //   },
    // });


  }




  //}
  //点击忘记密码时调用
  toForgotPassword(){
    //进入找回密码页面
    this.navCtrl.push(ForgotPasswordPage);
  }

  toRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
