import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-management';
  showForm: boolean = false;
  toggleForm() {
    this.showForm = !this.showForm; // Toggle the form visibility.
  }
}
