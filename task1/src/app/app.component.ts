
// import { Component, ViewChild } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { EmployeeSearchComponent } from './employee-search/employee-search.component';
// import { EmployeeTableComponent } from './employee-table/employee-table.component';
// import { EmployeeAddComponent } from './employee-add/employee-add.component'; // Import the EmployeeAddComponent

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, EmployeeSearchComponent, EmployeeTableComponent, EmployeeAddComponent], // Add EmployeeAddComponent
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Employee Management';
//   showAddForm: boolean = false; // Add a variable to control form visibility

//   @ViewChild('employeeTable') employeeTable!: EmployeeTableComponent;

//   toggleAddForm() {
//     this.showAddForm = !this.showAddForm;
//   }

//   onEmployeeAdded() {
//     this.toggleAddForm(); // Close the form after adding an employee
//     this.employeeTable.refreshRecords(); // Refresh the data in EmployeeTableComponent
//   }
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, EmployeeListComponent, EmployeeAddComponent] // Add CommonModule
})
export class AppComponent {
  title = 'Employee Records';
  showAddForm = false;

  // Toggle the add form visibility
  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  // Handle the employee added event
  onEmployeeAdded() {
    // Logic to handle after an employee is added (e.g., refreshing the employee list)
  }
}
