import {Injectable}              from '@angular/core';

import {HttpInterceptorService} from "../../providers/http-interceptor/http-interceptor.service";

@Injectable()
export class StudentcourseService {

  constructor(private httpInterceptorService: HttpInterceptorService) {
  }


  readData(id:any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/queryStudentCourse',
      data: {
        id:id
      },
    });

  }

  addCourse(id:any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/queryToAddStudentCourse',
      data: {
        id:id,
      },
    });

  }

  addStudentCourse(id:any,user:any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/AddStudentCourse',
      data: {
        id:id,
        user:user,
      },
    });

  }

  deleteCourse(id:any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/deleteStudentCourse',
      data: {
        id:id,

      },
    });

  }

}
