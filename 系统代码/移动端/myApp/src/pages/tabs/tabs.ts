import { Component } from '@angular/core';
import { CoursesPage } from "../courses/courses";
import { SettingPage} from '../setting/setting';
import { HomePage } from '../home/home';
import {NavParams} from "ionic-angular";
import {AddClickPage} from "../add-click/add-click";
import {TeacherCoursePage} from "../teacher-course/teacher-course";
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  title:any;
  persondata:any = {};
  tab1Root = HomePage;
  addClick = AddClickPage;
  teacherCourse = TeacherCoursePage;
  tab2Root = CoursesPage;
  tab3Root = SettingPage;

  constructor(public navParams: NavParams) {

  }

  ionViewDidLoad() {

    this.persondata = this.navParams.data;
    console.log(this.persondata);
  }
}
