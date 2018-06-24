import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {CoursesPage} from '../pages/courses/courses';
import { SettingPage } from '../pages/setting/setting';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {WelcomePage} from "../pages/welcome/welcome";
import {RegisterPage} from "../pages/register/register";
import {SigninPage} from "../pages/signin/signin";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {CopyrightComponent} from "../components/copyright/copyright";
import {AddCoursePage} from "../pages/add-course/add-course";
import {AddClickPage} from "../pages/add-click/add-click";
import {TeacherAddCoursePage} from "../pages/teacher-add-course/teacher-add-course";
import {TeacherCoursePage} from "../pages/teacher-course/teacher-course";
import {EditTeacherCoursePage} from "../pages/edit-teacher-course/edit-teacher-course";
import {EditStudentCoursePage} from "../pages/edit-student-course/edit-student-course";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LocalStorageProvider} from "../providers/local-storage/local-storage";
import {AuthenticationCodeProvider} from "../providers/authentication-code/authentication-code";
import {HttpInterceptorService} from "../providers/http-interceptor/http-interceptor.service";
import {HttpModule} from "@angular/http";
import {LoginService} from "../pages/signin/LoginService";
import {RegisterService} from "../pages/register/register.service";
import {TeachercourseService} from "../pages/teacher-course/teachercourse.service";
import {StudentcourseService} from "../pages/courses/studentcourse.service";
import {ToastController} from "ionic-angular";
import {ModalController} from 'ionic-angular';


@NgModule({
  declarations: [
    MyApp,
    CoursesPage,
    SettingPage,
    HomePage,
    TabsPage,
    WelcomePage,
    SigninPage,
    RegisterPage,
    ForgotPasswordPage,
    CopyrightComponent,
    AddCoursePage,
    AddClickPage,
    TeacherAddCoursePage,
    TeacherCoursePage,
    EditTeacherCoursePage,
    EditStudentCoursePage,

  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,
      {tabsHideOnSubPages: true,})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CoursesPage,
    SettingPage,
    HomePage,
    TabsPage,
    WelcomePage,
    RegisterPage,
    SigninPage,
    ForgotPasswordPage,
    CopyrightComponent,
    AddCoursePage,
    AddClickPage,
    TeacherAddCoursePage,
    TeacherCoursePage,
    EditTeacherCoursePage,
    EditStudentCoursePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalStorageProvider,
    AuthenticationCodeProvider,
    HttpInterceptorService,
    LoginService,
    RegisterService,
    TeachercourseService,
    StudentcourseService,
    ToastController,
    ModalController,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
