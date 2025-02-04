import { NgFor, CommonModule, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule,NgIf,NgSwitch,NgSwitchCase], // Import necessary modules
  templateUrl: './app.component.html', // Path to the HTML template
  styleUrls: ['./app.component.css'] // Path to the CSS styles
})
export class AppComponent {
  title = 'employee-management'; // Title of the application

  // Function to handle click events
  handleClickEvent() {
    console.log("Function called");
    this.otherFunction();
  }

  // Another function to demonstrate function calls
  otherFunction() {
    console.log("Other Function called");
  }

  // Function to sum two numbers and log the result
  sum(a: number, b: number) {
    console.log(a + b);
  }

  // ------------------------------------------------------------------------------------------------------------------------------------//
  count: number = 0; // Counter variable

  // Function to increment the counter
  handleIncrement() {
    this.count = this.count + 1;
  }

  // Function to decrement the counter
  handleDecrement() {
    this.count = this.count - 1;
  }

  // Function to reset the counter
  handleReset() {
    this.count = 0;
  }

  // Function to handle counter based on input value
  handleCounter(val: string) {
    if (val == 'minus') {
      if(this.count <= 0) {
        return;
      } else {
        this.count = this.count - 1;
      }
    } else if (val == 'plus') {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }

  //-----------------------------------------------------------------------------------------------------------------------------------

  // Function to handle events and log event type and value
  handleEvent(event: Event) {
    console.log("function called", event.type);
    console.log("value", (event.target as HTMLInputElement).value);
  }

  //-----------------------------------------------------------------------------------------------------------------------------------
  name = ""; // Variable to store name
  displayName = ""; // Variable to store display name

  // Function to get name from input event
  getName(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.name = val;
  }

  // Function to show the name
  showName() {
    this.displayName = this.name;
  }

  // Function to set a default name
  setName() {
    this.name = "Sam";
  }

  //-----------------------------------------------------------------------------------------------------------------------------------

  email = ""; // Variable to store email

  // Function to get email and log it
  getEmail(val: string) {
    console.log(val);
  }

  // ------------------ DIRECTIVE NGFOR -----------------------------------------------------------

  students = ["Anil", "Sam", "Peter", "Vinay", "Bruce"]; // Array of student names

  studentsData = [
    {
      name:'Abhay',
      age:'22'
    },

    {
      name:'Anil',
      age:'23'
    },

    {
      name:'Sam',
      age:'45'
    },
    {
      name:'Vinay',
      age:'65'
    }
  ]

  // ------------------ DIRECTIVE NgIf -----------------------------------------------------------

  show = true;

  login = false;

  block = 0;

  updateBlock()
  {
    this.block++;
  }

  // ------------------ DIRECTIVE NgSwitch -----------------------------------------------------------

  color = "black";

  changeColor(color:string)
  {
    this.color= color;
  }


}