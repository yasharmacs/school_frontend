import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title="02 Solutions";
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm; // Toggle the form visibility.
  }
}
