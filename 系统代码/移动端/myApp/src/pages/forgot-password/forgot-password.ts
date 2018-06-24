import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {AuthenticationCodeProvider} from "../../providers/authentication-code/authentication-code";
import {WelcomePage} from "../welcome/welcome";
import {SigninPage} from "../signin/signin";

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  @ViewChild('registerSlides') registerSlides: any;

  forget = {
    phone:'',
    email:'',
    code:'',
    confirmPassword:'',
    password:''
  }

  textSend = '发送验证码';
  boolSend = false;
  clock;
  nums;



  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:LocalStorageProvider, private toastCtrl:ToastController, private authenticationCodeService: AuthenticationCodeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
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

  user = {
    phone: '',
    email: '',
    shopName: '',
    password: '',
    name: '',
    time: '',
    dianphone: '',
    type: '',
    simname: ''
  };

  checkPhone() {
    let isUser:any = this.storage.get(this.forget.phone.toString(),{
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
    console.log(isUser.phone);

    if(isUser.phone==''){
      let toast = this.toastCtrl.create({
        message: '该手机号不存在！',
        duration: 3000
      });
      toast.present();

    }else{
      this.next();
    }
  }

  send() {
    console.log(this.authenticationCodeService.createCode(4));
    let toast = this.toastCtrl.create({
      message:'请输入密码'+this.authenticationCodeService.createCode(4),
      duration:3000
    });
    toast.present();
    //没有使用短信云服务发送验证码，先在控制台输出生成的验证码
    this.nums = 60;
    this.textSend = this.nums + '秒后可重新获取';
    this.boolSend = true;

    this.clock = setInterval(() => {
      this.nums--;
      console.log(this.nums);
      if (this.nums > 0) {
        this.textSend = this.nums + '秒后可重新获取';
      } else {
        this.textSend = '发送验证码';
        this.boolSend = false;
        clearInterval(this.clock);
      }

    }, 1000);
  }

  validateCode() {
    if (this.authenticationCodeService.validate(this.forget.code)) {
      this.next();
      this.textSend = '发送验证码';
      this.boolSend = false;
      clearInterval(this.clock);
    }
    else {
      console.log('短信验证码不正确或者已过期');
      let toast = this.toastCtrl.create({
        message: '短信验证码不正确或者已过期',
        duration: 3000
      });
      toast.present();
    }
  }

  storagePas(){
    let isUser:any = this.storage.get(this.forget.phone.toString(),{
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

    this.user = isUser;
    this.user.password = this.forget.password;

    this.storage.set(this.user.phone,this.user);
    this.next();
  }

  showMes(){
    if(this.forget.confirmPassword.toString()==this.forget.password.toString()){
      console.log("1");
      return true;
    }else {
      console.log("2");
      return false;
    }
  }

  goHome(){
    this.navCtrl.popTo(SigninPage);
  }

}
