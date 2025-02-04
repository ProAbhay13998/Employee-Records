// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class Service1 {
//   private apiUrl = 'http://localhost:8283/api';

//   constructor(private http: HttpClient) {}

//   addEmployeeWithDesignation(employeeData: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/registerEmployeeWithDesignation`, employeeData);
//   }

//   updateEmployeeWithDesignation(employeeData: any): Observable<any> {
//     return this.http.put(`${this.apiUrl}/updateEmployeeWithDesignation`, employeeData);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1 {
  private apiUrl = 'http://localhost:8283/api';

  constructor(private http: HttpClient) {}

  addEmployeeWithDesignation(employeeData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registerEmployeeWithDesignation`, employeeData);
  }

  updateEmployeeWithDesignation(employeeData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateEmployeeWithDesignation`, employeeData);
  }

  getEmployeeById(empId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/employee/${empId}`);
  }
}

