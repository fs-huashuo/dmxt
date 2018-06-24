import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Toast, ToastController} from 'ionic-angular';
import {AuthenticationCodeProvider} from "../../providers/authentication-code/authentication-code";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {RegisterService} from "./register.service";
import {WelcomePage} from "../welcome/welcome";
import {SigninPage} from "../signin/signin";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('registerSlides') registerSlides: any;
  textSend = '发送验证码';
  boolSend = false;
  clock;
  nums;
  currentdata:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authenticationCodeService: AuthenticationCodeProvider, private toastCtrl: ToastController, private storage: LocalStorageProvider,private registerService:RegisterService) {
  }

  ionViewDidLoad() {
    this.registerSlides.lockSwipes(true);
  }

  next() {
    this.registerSlides.lockSwipes(false);
    this.registerSlides.slideNext();
    this.registerSlides.lockSwipes(true);
  }

  previous() {
    this.registerSlides.lockSwipes(false);
    this.registerSlides.slidePrev();
    this.registerSlides.lockSwipes(true);
  }
  flag:any='学生';
  registerUserS={
    accountName:'',
    password:'',
    name:'',
    tel:'',
    college:'',
    profession:'',
    student_ID:'',
    s_class:'',
    grade:'',
  };
  registerUserT= {
    accountName:'',
    password: '',
    tel: '',
    college: '',
    name: '',
    school: '',
    teacher_ID: '',
  };

  returnSignin(){
    if(this.flag=='学生') {
      //console.log(this.registerUserS);
      this.registerService.registerS(this.registerUserS).then(result=>{
        console.log(result);//打印返回的数据
        console.log(result.data);
        this.currentdata=JSON.parse(result.data);
      });
      /* let url= 'http://203.195.234.192:8080/user/registerStudent';
       this.http.post(url,this.registerUserS);*/
    }
    else {

      this.registerService.registerT(this.registerUserT).then(result=>{
        console.log(result);//打印返回的数据
        console.log(result.data);
        this.currentdata=JSON.parse(result.data);
      });
      this.next();
    }

  }
  // send() {
  //   let aa =this.authenticationCodeService.createCode(4);
  //   console.log(aa);
  //   let toast = this.toastCtrl.create({
  //     message:'请输入密码'+aa,
  //     duration:3000
  //   });
  //   toast.present();
  //
  //   //没有使用短信云服务发送验证码，先在控制台输出生成的验证码
  //   this.nums = 60;
  //   this.textSend = this.nums + '秒后可重新获取';
  //   this.boolSend = true;
  //
  //   this.clock = setInterval(() => {
  //     this.nums--;
  //     console.log(this.nums);
  //     if (this.nums > 0) {
  //       this.textSend = this.nums + '秒后可重新获取';
  //     } else {
  //       this.textSend = '发送验证码';
  //       this.boolSend = false;
  //       clearInterval(this.clock);
  //     }
  //
  //   }, 1000);
  // }


  // validateCode() {
  //   if (this.authenticationCodeService.validate(this.register.code)) {
  //     this.next();
  //     this.textSend = '发送验证码';
  //     this.boolSend = false;
  //     clearInterval(this.clock);
  //   }
  //   else {
  //     console.log('短信验证码不正确或者已过期');
  //     let toast = this.toastCtrl.create({
  //       message: '短信验证码不正确或者已过期',
  //       duration: 3000
  //     });
  //     toast.present();
  //   }
  // }

  storageMes() {

    this.next();
  }

  // showMes() {
  //   if (this.register.confirmPassword.toString() == this.register.password.toString()) {
  //     console.log("1");
  //     return true;
  //   } else {
  //     console.log("2");
  //     return false;
  //   }
  // }


  goHome() {
    this.navCtrl.setRoot(SigninPage);
    this.navCtrl.popToRoot();
  }

}
