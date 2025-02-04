
// import { Component, Output, EventEmitter } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';
// import { MatDialog } from '@angular/material/dialog';
// import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
// import { Service1 } from '../service1.service';

// @Component({
//   selector: 'app-employee-update',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule,
//     MatInputModule,
//     MatFormFieldModule,
//     MatSelectModule,
//     MatSnackBarModule // Import MatSnackBarModule
//   ],
//   templateUrl: './employee-update.component.html',
//   styleUrls: ['./employee-update.component.css'],
//   providers: [Service1]
// })
// export class EmployeeUpdateComponent {
//   @Output() employeeUpdated = new EventEmitter<void>();

//   employee = {
//     empId: '',
//     empName: '',
//     joiningDate: '',
//     department: '',
//     designation: { designationCode: '', designation: '' }
//   };

//   departments = ['Santander Spain', 'Santander UK', 'Santander US', 'Walmart', 'SCI', 'HR'];
//   designations = [
//     { code: '101', name: 'Manager' },
//     { code: '102', name: 'Developer' },
//     { code: '103', name: 'Analyst' },
//     { code: '104', name: 'Intern' },
//     { code: '105', name: 'Team Lead' },
//     { code: '106', name: 'Senior Software Engineer' },
//     { code: '107', name: 'DevOps' },
//     { code: '108', name: 'Testing' },
//     { code: '109', name: 'Career Manager' }
//   ];

//   constructor(private service1: Service1, public dialog: MatDialog, private snackBar: MatSnackBar) {}

//   updateEmployee() {
//     if (!this.isEmployeeNameValid()) {
//       alert('Invalid Employee Name. Name must be between 3 and 50 characters, and contain no special characters or digits.');
//       return;
//     }

//     const payload = {
//       empId: this.employee.empId,
//       empName: this.employee.empName,
//       joiningDate: this.employee.joiningDate,
//       department: this.employee.department,
//       designation: {
//         designationCode: this.employee.designation.designationCode,
//         designation: this.employee.designation.designation
//       }
//     };

//     this.service1.getEmployeeById(this.employee.empId).subscribe(
//       (existingEmployee: any) => {
//         if (existingEmployee) {
//           this.service1.updateEmployeeWithDesignation(payload).subscribe(
//             (response: any) => {
//               console.log('Employee updated successfully:', response);
//               this.employeeUpdated.emit();
//               this.dialog.closeAll();
//               this.snackBar.open('✔ Employee updated successfully', 'Close', {
//                 duration: 3000,
//                 panelClass: ['success-snackbar']
//               });
//             },
//             (error: any) => {
//               console.error('Error updating employee:', error);
//               this.snackBar.open('❌ Error updating employee', 'Close', {
//                 duration: 3000,
//                 panelClass: ['error-snackbar']
//               });
//             }
//           );
//         } else {
//           this.snackBar.open('❌ Employee with this ID does not exist', 'Close', {
//             duration: 3000,
//             panelClass: ['error-snackbar']
//           });
//         }
//       },
//       (error: any) => {
//         console.error('Error fetching employee:', error);
//         this.snackBar.open('❌ Error fetching employee', 'Close', {
//           duration: 3000,
//           panelClass: ['error-snackbar']
//         });
//       }
//     );
//   }

//   onDesignationCodeChange() {
//     const selectedDesignation = this.designations.find(d => d.code === this.employee.designation.designationCode);
//     if (selectedDesignation) {
//       this.employee.designation.designation = selectedDesignation.name;
//     }
//   }

//   isEmployeeNameValid(): boolean {
//     const regex = /^[a-zA-Z\s]{3,50}$/;
//     return regex.test(this.employee.empName);
//   }

//   cancel() {
//     this.dialog.closeAll();
//   }
// }


















import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Service1 } from '../service1.service';

@Component({
  selector: 'app-employee-update',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule // Import MatSnackBarModule
  ],
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
  providers: [Service1]
})
export class EmployeeUpdateComponent {
  @Output() employeeUpdated = new EventEmitter<void>();

  employee = {
    empId: '',
    empName: '',
    joiningDate: '',
    department: '',
    designation: { designationCode: '', designation: '' }
  };

  showError: { [key: string]: boolean } = {
    empId: false,
    empName: false,
    joiningDate: false,
    department: false,
    designationCode: false,
    designation: false
  };

  departments = ['Santander Spain', 'Santander UK', 'Santander US', 'Walmart', 'SCI', 'HR'];
  designations = [
    { code: '101', name: 'Manager' },
    { code: '102', name: 'Developer' },
    { code: '103', name: 'Analyst' },
    { code: '104', name: 'Intern' },
    { code: '105', name: 'Team Lead' },
    { code: '106', name: 'Senior Software Engineer' },
    { code: '107', name: 'DevOps' },
    { code: '108', name: 'Testing' },
    { code: '109', name: 'Career Manager' }
  ];

  constructor(private service1: Service1, public dialog: MatDialog, private snackBar: MatSnackBar) {}

  updateEmployee() {
    if (!this.isFormValid()) {
      this.validateAllFields();
      return;
    }

    const payload = {
      empId: this.employee.empId,
      empName: this.employee.empName,
      joiningDate: this.employee.joiningDate,
      department: this.employee.department,
      designation: {
        designationCode: this.employee.designation.designationCode,
        designation: this.employee.designation.designation
      }
    };

    this.service1.getEmployeeById(this.employee.empId).subscribe(
      (existingEmployee: any) => {
        if (existingEmployee) {
          this.service1.updateEmployeeWithDesignation(payload).subscribe(
            (response: any) => {
              console.log('Employee updated successfully:', response);
              this.employeeUpdated.emit();
              this.dialog.closeAll();
              this.snackBar.open('✔ Employee updated successfully', 'Close', {
                duration: 3000,
                panelClass: ['success-snackbar']
              });
            },
            (error: any) => {
              console.error('Error updating employee:', error);
              this.snackBar.open('❌ Error updating employee', 'Close', {
                duration: 3000,
                panelClass: ['error-snackbar']
              });
            }
          );
        } else {
          this.snackBar.open('❌ Employee with this ID does not exist', 'Close', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      },
      (error: any) => {
        console.error('Error fetching employee:', error);
        this.snackBar.open('❌ Error fetching employee', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  onDesignationCodeChange() {
    const selectedDesignation = this.designations.find(d => d.code === this.employee.designation.designationCode);
    if (selectedDesignation) {
      this.employee.designation.designation = selectedDesignation.name;
    }
  }

  isEmployeeNameValid(): boolean {
    const regex = /^[a-zA-Z\s]{3,50}$/;
    return regex.test(this.employee.empName);
  }

  isFormValid(): boolean {
    return (
      this.isEmployeeNameValid() &&
      this.employee.empId.trim() !== '' &&
      this.employee.empName.trim() !== '' &&
      this.employee.joiningDate.trim() !== '' &&
      this.employee.department.trim() !== '' &&
      this.employee.designation.designationCode.trim() !== '' &&
      this.employee.designation.designation.trim() !== ''
    );
  }

  validateField(field: keyof typeof this.showError) {
    this.showError[field] = true;
  }

  clearError(field: keyof typeof this.showError) {
    this.showError[field] = false;
  }

  validateAllFields() {
    Object.keys(this.showError).forEach(field => {
      this.showError[field as keyof typeof this.showError] = true;
    });
  }

  cancel() {
    this.dialog.closeAll();
  }
}


