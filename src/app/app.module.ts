import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker'; // นำเข้า MatDatepickerModule
import { MatNativeDateModule } from '@angular/material/core';  // นำเข้า MatNativeDateModule
import { ReactiveFormsModule } from '@angular/forms';  // Reactive Forms
import { MatFormFieldModule } from '@angular/material/form-field'; // นำเข้า MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // นำเข้า MatInputModule
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select'; // สำหรับ mat-select
import { MatOptionModule } from '@angular/material/core';  // สำหรับ mat-option
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';  // นำเข้า FormsModule
import { AppRoutingModule } from './app.routes.module';
import { RouterModule } from '@angular/router';  // นำเข้า RouterModule
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveRequestFormComponentComponent } from './leave-request-form-component/leave-request-form-component.component';
import { LeaveLeaveHistoryComponentComponent } from './leave-leave-history-component/leave-leave-history-component.component';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';  // นำเข้า CommonModule

@NgModule({
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,  // เพิ่ม MatNativeDateModule ที่นี่
    MatFormFieldModule, // ลบการนำเข้าซ้ำ
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule, // สำหรับ mat-select
    MatOptionModule, // สำหรับ mat-option
    MatButtonModule, // สำหรับปุ่ม
    MatCardModule, // สำหรับ Card
    MatToolbarModule, // สำหรับ Toolbar
    FormsModule , // สำหรับ ngModel
    AppRoutingModule,  // นำเข้า AppRoutingModule ที่มีการตั้งค่าเส้นทาง
    LeaveLeaveHistoryComponentComponent,
    LeaveRequestFormComponentComponent,
    RouterModule,  // ต้องมีการนำเข้า RouterModule
    AppRoutingModule,  // นำเข้า AppRoutingModule
    BrowserAnimationsModule,
    AppComponent,
    DashboardComponent,
    CommonModule,
    RouterModule.forRoot(routes),


  ],
  providers: [],

})
export class AppModule {}
