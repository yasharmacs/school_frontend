import { Component } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  public student = {
    name: '',
    rollNo: '',
    address: '',
    contacts: ''
  };

  showForm: boolean= false;

  onSubmit() {
    // You can perform actions here, like sending the student data to a server or displaying it.
   // alert('submit');
    console.log('Student Data:', this.student);
  }
}
