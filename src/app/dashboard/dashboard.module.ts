import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardRoute } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';



@NgModule({
   imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoute)
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
