import {Injectable}              from '@angular/core';

import {HttpInterceptorService} from "../../providers/http-interceptor/http-interceptor.service";

@Injectable()
export class TeachercourseService {

  constructor(private httpInterceptorService: HttpInterceptorService) {
  }


  readData(id:any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/queryTeacherCourse',
      data: {
        id:id,
      },
    });

  }
  readCourseData(id:any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/queryClickCourse',
      data: {
        id:id,
      },
    });
  }
  changeCourse(id:any,course_number:any,course_name:any,class_time:any,class_location:any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/editTeacherCourse',
      data: {
        id:id,
        course_number:course_number,
        course_name:course_name,
        class_time:class_time,
        class_location:class_location,
      },
    });

  }
  studentClick(id:any,course_id:any,Latitude:any,Longitude:any,time:any){
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/studentclick',
      data: {
        id:id,
        course_id:course_id,
        Latitude:Latitude,
        Longitude:Longitude,
        time:time,
      },
    });
  }
  addclicked(id:any,Longitude:any,Latitude:any,course_ID:any,time:any){
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/addclick',
      data: {
        id:id,
        course_ID:course_ID,
        Longitude:Longitude,
        Latitude:Latitude,
        time:time,
      },
    });
  }
  endclicked(id:any,click_id:any,course_ID:any,time:any){
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/endclick',
      data: {
        id:id,
        click_id:click_id,
        course_ID:course_ID,
        time:time,
      },
    });
  }
  selectCourse(id:any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/queryTeacherCourse',
      data: {
        id:id
      },
    });

  }

  addCourse(id:any,course_number:any,course_name:any,class_time:any,class_location:any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/addTeacherCourse',
      data: {
        id:id,
        course_number:course_number,
        course_name:course_name,
        class_time:class_time,
        class_location:class_location,
      },
    });

  }


  deleteCourse(id:any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: 'http://111.230.165.27:8080/pages/deleteCourse',
      data: {
        id:id,

      },
    });

  }
}
