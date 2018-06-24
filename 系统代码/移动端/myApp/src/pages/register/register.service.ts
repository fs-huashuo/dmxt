import {Injectable}              from '@angular/core';

import {HttpInterceptorService} from "../../providers/http-interceptor/http-interceptor.service";

@Injectable()
export class RegisterService {

  constructor(private httpInterceptorService: HttpInterceptorService) {
  }


  registerS(registerUser:any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/registerStudent',
      data: registerUser,
    });

  }
  registerT(registerUser:any) {
    console.log('1');
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/registerTeacher',
      data: registerUser,
    });
  }
}
