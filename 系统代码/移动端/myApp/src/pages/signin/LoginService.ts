import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {HttpInterceptorService} from "../../providers/http-interceptor/http-interceptor.service";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
const url = "http://192.168.199.156:8080/user/checkLogin";
@Injectable()
export class LoginService {

  // constructor(private http:Http) { }
  constructor(private httpInterceptorService: HttpInterceptorService) {
  }

  /**
   * 登陆功能
   * @param params
   * @returns {Promise<{}>}
   */
  login(userName: string, passWord: string,loginType:any) {

    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/checkLogin',
      data: {
        username: userName,
        password: passWord,
        logintype:loginType
      },
    });

  }
}
