import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // **เพิ่ม FormsModule เพื่อใช้ ngModel**
import { CommonModule } from '@angular/common';
import { NavbarmasterComponent } from "../navbarmaster/navbarmaster.component";


@Component({
  selector: 'app-leave-balance-display',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarmasterComponent], // **นำเข้า FormsModule**
  templateUrl: './leave-balance-display.component.html',
  styleUrls: ['./leave-balance-display.component.scss']
})
export class LeaveBalanceDisplayComponent {
  
  leaveRequests = [
    {
      name: 'สมชาย ใจดี',
      department: 'ฝ่ายพัฒนาระบบ',
      leaveType: 'ลาพักร้อน',
      days: 2,
      startDate: '2025-02-15',
      endDate: '2025-02-16',
      reason: 'พักผ่อนกับครอบครัว',
      comment: '',
      status: 'รออนุมัติ'
    },
    {
      name: 'สมหญิง รักงาน',
      department: 'ฝ่ายการตลาด',
      leaveType: 'ลาป่วย',
      days: 1,
      startDate: '2025-02-12',
      endDate: '2025-02-12',
      reason: 'ไม่สบาย มีไข้',
      comment: '',
      status: 'รออนุมัติ'
    }
  ];

  approveRequest(request: any) {
    request.status = 'อนุมัติแล้ว';
  }

  rejectRequest(request: any) {
    request.status = 'ไม่อนุมัติ';
  }

}
