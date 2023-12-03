import { Component, ViewChild, } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(){}
  @ViewChild('sidenav') sidenav: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle(); 
  }
}
