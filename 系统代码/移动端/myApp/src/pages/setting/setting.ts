import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SigninPage} from "../signin/signin";

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  constructor(public navCtrl: NavController) {

  }
  toSignin1(){

    this.navCtrl.push(SigninPage);
  }
}
