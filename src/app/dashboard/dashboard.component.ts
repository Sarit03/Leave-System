import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';  // นำเข้า MatCardModule
import { MatButtonModule } from '@angular/material/button';  // นำเข้า MatButtonModule
import { MatToolbarModule } from '@angular/material/toolbar';  // นำเข้า MatToolbarModule
import { MatTableModule } from '@angular/material/table'; // นำเข้า MatTableModule
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatToolbarModule, MatTableModule, CommonModule, NavbarComponent],  // นำเข้า MatCardModule และ MatButtonModule
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  displayedColumns: string[] = ['date', 'leaveType', 'days', 'status'];

  

  leaveRequests = [
    { date: '10-15 ก.พ. 2567', leaveType: 'ลาพักร้อน', days: 5, status: 'รออนุมัติ' },
    { date: '5 ม.ค. 2567', leaveType: 'ลาป่วย', days: 1, status: 'อนุมัติแล้ว' }
  ];

  

}
