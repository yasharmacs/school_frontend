import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { StudentFormComponent } from './components/student-form/student-form.component';

const routes: Routes = [
  { path: 'student-form', 
  component: StudentFormComponent,
  pathMatch:'full',
 }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }

