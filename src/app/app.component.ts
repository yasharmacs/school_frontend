import { ChangeDetectorRef, Component, SimpleChanges, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-management';
  receivedData: boolean;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private cdr: ChangeDetectorRef) {}

  receiveDataFromChild(data) {
    this.receivedData = data;
    this.cdr.detectChanges();
    this.toggleSidebar();
  }

  toggleSidebar() {
    if(this.receivedData) {
      this.sidenav.toggle();
    }
  }
}
