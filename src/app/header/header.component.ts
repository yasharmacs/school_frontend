import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title="02 Solutions";
  // showForm: boolean = false;

  // toggleForm() {
  //   this.showForm = !this.showForm; // Toggle the form visibility.
  // }
  @Output() dataEvent = new EventEmitter<Boolean>();
  toggleBar: boolean = true;

  // private _toggleSideBar = new Subject<boolean>();

  // get refreshNeeded() {
  //   return this._toggleSideBar;
  // }

  toggleSidebar() {
    // this._toggleSideBar.next(!this.toggleBar);
    this.dataEvent.emit(this.toggleBar);
  }
  
}
