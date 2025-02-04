// import { Component, OnInit, AfterViewInit, EventEmitter, Output, ChangeDetectorRef, ViewChild } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSelectModule } from '@angular/material/select';
// import { MatTableModule, MatTableDataSource } from '@angular/material/table';
// import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { EmployeeAddComponent } from '../employee-add/employee-add.component';
// import { MatSort, MatSortModule } from '@angular/material/sort';
// import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';

// @Component({
//   selector: 'app-employee-list',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule,
//     MatInputModule,
//     MatFormFieldModule,
//     MatTableModule,
//     HttpClientModule,
//     MatDialogModule,
//     MatIconModule,
//     MatSelectModule,
//     MatPaginatorModule,
//     MatSortModule
//   ],
//   templateUrl: './employee-list.component.html',
//   styleUrls: ['./employee-list.component.css']
// })
// export class EmployeeListComponent implements OnInit, AfterViewInit {
//   @Output() toggleForm: EventEmitter<void> = new EventEmitter<void>();

//   searchQuery: string = '';
//   designationCode: string = '';
//   department: string = '';
//   employees: any[] = [];
//   filteredEmployees = new MatTableDataSource<any>([]);
//   displayedColumns: string[] = ['employeeId', 'employeeName', 'department', 'designation', 'designationCode', 'joiningDate'];

//   designationCodes: string[] = ['101', '102', '103', '104', '105', '106', '107', '108', '109', 'All'];
//   departments: string[] = ['Santander Spain', 'Santander UK', 'Santander US', 'Walmart', 'SCI', 'Sanforge', 'HR', 'All'];

//   private apiUrl = 'http://localhost:8283/api';

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private dialog: MatDialog) {}

//   ngOnInit(): void {
//     this.fetchEmployeeData().subscribe(
//       (data: any[]) => {
//         this.employees = data;
//         this.filteredEmployees.data = this.employees;
//       },
//       (error: any) => {
//         console.error('Error fetching employees:', error.message || error);
//       }
//     );
//   }

//   ngAfterViewInit(): void {
//     this.filteredEmployees.paginator = this.paginator;
//     this.filteredEmployees.sort = this.sort;
//   }

//   fetchEmployeeData(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/getallDesig_Mappings`).pipe(
//       map((response: any[]) => response.map(emp => ({
//         employeeId: emp.employee.empId,
//         employeeName: emp.employee.empName,
//         department: emp.employee.department,
//         designation: emp.designation.designation,
//         designationCode: emp.designation.designationCode,
//         joiningDate: emp.employee.joiningDate
//       })))
//     );
//   }

//   search() {
//     const empId = parseInt(this.searchQuery, 10);
//     if (!isNaN(empId)) {
//       this.filteredEmployees.data = this.employees.filter(emp => emp.employeeId === empId);
//     } else {
//       this.filteredEmployees.data = this.employees;
//     }
//     this.filteredEmployees.paginator = this.paginator;
//     this.filteredEmployees.sort = this.sort;
//     this.cdr.detectChanges();
//   }

//   applyFilters() {
//     const desigCode = this.designationCode === 'All' ? null : parseInt(this.designationCode, 10);

//     let filteredData = this.employees;

//     if (this.department && this.department !== 'All') {
//       filteredData = filteredData.filter(emp => emp.department.includes(this.department));
//     }

//     if (desigCode !== null) {
//       filteredData = filteredData.filter(emp => emp.designationCode === desigCode);
//     }

//     this.filteredEmployees.data = filteredData;
//     this.filteredEmployees.paginator = this.paginator;
//     this.filteredEmployees.sort = this.sort;
//     this.cdr.detectChanges();
//   }

//   openAddEmployeeForm() {
//     const dialogRef = this.dialog.open(EmployeeAddComponent, {
//       width: '600px',
//       data: {}
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       this.fetchEmployeeData().subscribe(
//         (data: any[]) => {
//           this.employees = data;
//           this.filteredEmployees.data = this.employees;
//           this.filteredEmployees.paginator = this.paginator;
//           this.filteredEmployees.sort = this.sort;
//           this.cdr.detectChanges();
//         },
//         (error: any) => {
//           console.error('Error fetching employees:', error.message || error);
//         }
//       );
//     });
//   }

//   // Update employee
//   openUpdateEmployeeForm() {
//     const dialogRef = this.dialog.open(EmployeeUpdateComponent, { // Updated to use EmployeeUpdateComponent
//       width: '600px',
//       data: {} // Pass relevant data if needed
//     });
  
//     dialogRef.afterClosed().subscribe(result => {
//       this.fetchEmployeeData().subscribe(
//         (data: any[]) => {
//           this.employees = data;
//           this.filteredEmployees.data = this.employees;
//           this.filteredEmployees.paginator = this.paginator;
//           this.filteredEmployees.sort = this.sort;
//           this.cdr.detectChanges();
//         },
//         (error: any) => {
//           console.error('Error fetching employees:', error.message || error);
//         }
//       );
//     });
//   }
  
  
// }















import { Component, OnInit, AfterViewInit, EventEmitter, Output, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
  @Output() toggleForm: EventEmitter<void> = new EventEmitter<void>();

  searchQuery: string = '';
  designationCode: string = '';
  department: string = '';
  employees: any[] = [];
  filteredEmployees = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['employeeId', 'employeeName', 'department', 'designation', 'designationCode', 'joiningDate'];

  designationCodes: string[] = [];
  departments: string[] = [];

  private apiUrl = 'http://localhost:8283/api';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadFilters();
    this.fetchEmployeeData().subscribe(
      (data: any[]) => {
        this.employees = data;
        this.filteredEmployees.data = this.employees;
      },
      (error: any) => {
        console.error('Error fetching employees:', error.message || error);
      }
    );
  }

  ngAfterViewInit(): void {
    this.filteredEmployees.paginator = this.paginator;
    this.filteredEmployees.sort = this.sort;
  }

  loadFilters(): void {
    this.http.get<string[]>(`${this.apiUrl}/departments`).subscribe(
      data => this.departments = data,
      error => console.error('Error fetching departments:', error)
    );

    this.http.get<number[]>(`${this.apiUrl}/designationCodes`).subscribe(
      data => this.designationCodes = data.map(String),
      error => console.error('Error fetching designation codes:', error)
    );
  }

  fetchEmployeeData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getallDesig_Mappings`).pipe(
      map((response: any[]) => response.map(emp => ({
        employeeId: emp.employee.empId,
        employeeName: emp.employee.empName,
        department: emp.employee.department,
        designation: emp.designation.designation,
        designationCode: emp.designation.designationCode,
        joiningDate: emp.employee.joiningDate
      })))
    );
  }

  search() {
    const empId = parseInt(this.searchQuery, 10);
    if (!isNaN(empId)) {
      this.filteredEmployees.data = this.employees.filter(emp => emp.employeeId === empId);
    } else {
      this.filteredEmployees.data = this.employees;
    }
    this.filteredEmployees.paginator = this.paginator;
    this.filteredEmployees.sort = this.sort;
    this.cdr.detectChanges();
  }

  applyFilters() {
    if (this.designationCode && this.department) {
      this.http.get<any[]>(`${this.apiUrl}/desig_mappingsByFilters?department=${this.department}&designationCode=${this.designationCode}`).subscribe(
        data => {
          this.filteredEmployees.data = data.map(emp => ({
            employeeId: emp.employee.empId,
            employeeName: emp.employee.empName,
            department: emp.employee.department,
            designation: emp.designation.designation,
            designationCode: emp.designation.designationCode,
            joiningDate: emp.employee.joiningDate
          }));
          this.filteredEmployees.paginator = this.paginator;
          this.filteredEmployees.sort = this.sort;
          this.cdr.detectChanges();
        },
        error => {
          console.error('Error fetching filtered employees:', error.message || error);
        }
      );
    } else if (this.designationCode) {
      this.http.get<any[]>(`${this.apiUrl}/desig_mappingsByDesignationCode/${this.designationCode}`).subscribe(
        data => {
          this.filteredEmployees.data = data.map(emp => ({
            employeeId: emp.employee.empId,
            employeeName: emp.employee.empName,
            department: emp.employee.department,
            designation: emp.designation.designation,
            designationCode: emp.designation.designationCode,
            joiningDate: emp.employee.joiningDate
          }));
          this.filteredEmployees.paginator = this.paginator;
          this.filteredEmployees.sort = this.sort;
          this.cdr.detectChanges();
        },
        error => {
          console.error('Error fetching filtered employees:', error.message || error);
        }
      );
    } else if (this.department) {
      this.http.get<any[]>(`${this.apiUrl}/desig_mappingsByDepartment/${this.department}`).subscribe(
        data => {
          this.filteredEmployees.data = data.map(emp => ({
            employeeId: emp.employee.empId,
            employeeName: emp.employee.empName,
            department: emp.employee.department,
            designation: emp.designation.designation,
            designationCode: emp.designation.designationCode,
            joiningDate: emp.employee.joiningDate
          }));
          this.filteredEmployees.paginator = this.paginator;
          this.filteredEmployees.sort = this.sort;
          this.cdr.detectChanges();
        },
        error => {
          console.error('Error fetching filtered employees:', error.message || error);
        }
      );
    } else {
      this.clearFilters();
    }
  }

  clearFilters() {
    this.designationCode = '';
    this.department = '';
    this.fetchEmployeeData().subscribe(
      (data: any[]) => {
        this.employees = data;
        this.filteredEmployees.data = this.employees;
        this.filteredEmployees.paginator = this.paginator;
        this.filteredEmployees.sort = this.sort;
        this.cdr.detectChanges();
      },
      (error: any) => {
        console.error('Error fetching employees:', error.message || error);
      }
    );
  }

  openAddEmployeeForm() {
    const dialogRef = this.dialog.open(EmployeeAddComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchEmployeeData().subscribe(
        (data: any[]) => {
          this.employees = data;
          this.filteredEmployees.data = this.employees;
          this.filteredEmployees.paginator = this.paginator;
          this.filteredEmployees.sort = this.sort;
          this.cdr.detectChanges();
        },
        (error: any) => {
          console.error('Error fetching employees:', error.message || error);
        }
      );
    });
  }

  openUpdateEmployeeForm() {
    const dialogRef = this.dialog.open(EmployeeUpdateComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchEmployeeData().subscribe(
        (data: any[]) => {
          this.employees = data;
          this.filteredEmployees.data = this.employees;
          this.filteredEmployees.paginator = this.paginator;
          this.filteredEmployees.sort = this.sort;
          this.cdr.detectChanges();
        },
        (error: any) => {
          console.error('Error fetching employees:', error.message || error);
        }
      );
    });
  }
}







