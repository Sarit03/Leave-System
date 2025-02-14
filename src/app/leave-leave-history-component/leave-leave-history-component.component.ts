import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';  // นำเข้า MatCardModule
import { MatButtonModule } from '@angular/material/button';  // นำเข้า MatButtonModule
import { MatToolbarModule } from '@angular/material/toolbar';  // นำเข้า MatToolbarModule
import { MatTableModule } from '@angular/material/table'; // นำเข้า MatTableModule
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';  // สำหรับ mat-form-field
import { MatSelectModule } from '@angular/material/select';  // สำหรับ mat-select
import { MatOptionModule } from '@angular/material/core';   // สำหรับ mat-option
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavbarComponent } from "../navbar/navbar.component";
import { NavbarmasterComponent } from "../navbarmaster/navbarmaster.component";

@Component({
  selector: 'app-leave-leave-history-component',
  standalone: true,
   imports: [MatCardModule, MatButtonModule, MatToolbarModule, MatTableModule, CommonModule, MatFormFieldModule, MatSelectModule, NavbarComponent, NavbarmasterComponent],
  templateUrl: './leave-leave-history-component.component.html',
  styleUrl: './leave-leave-history-component.component.scss'
})
export class LeaveLeaveHistoryComponentComponent {

  
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: number[] = [2023, 2024, 2025]; // กำหนดปีที่ต้องการให้เลือก

  selectedMonth: string = this.months[0];  // เดือนที่เลือกเริ่มต้น
  selectedYear: number = this.years[0];   // ปีที่เลือกเริ่มต้น

  leaveData = [
    { name: 'สมชาย ไวย์', department: 'IT', leaveType: 'ลาป่วย', days: 2 },
    { name: 'สมศักดิ์ รังงาน', department: 'HR', leaveType: 'ลาพักร้อน', days: 1 }
  ];

  displayedColumns: string[] = ['name', 'department', 'leaveType', 'days'];

  loadLeaveData() {
    // ฟังก์ชันโหลดข้อมูลการลา (สามารถทำให้เชื่อมต่อกับ API หรือข้อมูลจากฐานข้อมูลจริง)
  }
}