import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';  // นำเข้า isPlatformBrowser
import { Chart, registerables } from 'chart.js';  // นำเข้า Chart.js
import { MatCardModule } from '@angular/material/card';  // นำเข้า MatCardModule
import { MatButtonModule } from '@angular/material/button';  // นำเข้า MatButtonModule
import { MatToolbarModule } from '@angular/material/toolbar';  // นำเข้า MatToolbarModule
import { MatTableModule } from '@angular/material/table'; // นำเข้า MatTableModule
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';  // สำหรับ mat-form-field
import { MatSelectModule } from '@angular/material/select';  // สำหรับ mat-select
import { MatOptionModule } from '@angular/material/core';   // สำหรับ mat-option
import { NavbarComponent } from "../navbar/navbar.component";
import { NavbarmasterComponent } from "../navbarmaster/navbarmaster.component";

@Component({
  selector: 'app-leave-leave-history-component',
  standalone: true,
  imports: [
    MatCardModule, MatButtonModule, MatToolbarModule, MatTableModule, CommonModule,
    MatFormFieldModule, MatSelectModule, NavbarComponent, NavbarmasterComponent
  ],
  templateUrl: './leave-leave-history-component.component.html',
  styleUrls: ['./leave-leave-history-component.component.scss']
})
export class LeaveLeaveHistoryComponentComponent implements OnInit {
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: number[] = [2023, 2024, 2025]; // กำหนดปีที่ต้องการให้เลือก

  selectedMonth: string = this.months[0];  // เดือนที่เลือกเริ่มต้น
  selectedYear: number = this.years[0];   // ปีที่เลือกเริ่มต้น

  leaveData = [
    { name: 'สมชาย ไวย์', department: 'IT', leaveType: 'ลาป่วย', days: 2 },
    { name: 'สมศักดิ์ รังงาน', department: 'HR', leaveType: 'ลาพักร้อน', days: 1 }
  ];

  displayedColumns: string[] = ['name', 'department', 'leaveType', 'days'];

  private chart: any;

  leaveChartOptions: any = {  // เพิ่มตัวแปร leaveChartOptions
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadLeaveData();
      this.loadChart();  // เรียกฟังก์ชันในการโหลดกราฟเฉพาะเมื่อรันในเบราว์เซอร์
    }
  }

  loadLeaveData(): void {
    // ฟังก์ชันโหลดข้อมูลการลา (สามารถทำให้เชื่อมต่อกับ API หรือข้อมูลจากฐานข้อมูลจริง)
    console.log('Data Loaded');
  }

  loadChart(): void {
    if (isPlatformBrowser(this.platformId)) {
      // ลงทะเบียนส่วนประกอบของ Chart.js
      Chart.register(...registerables);

      const ctx = document.getElementById('leaveChart') as HTMLCanvasElement;

      // สร้างกราฟ
      this.chart = new Chart(ctx, {
        type: 'bar',  // กำหนดประเภทของกราฟ
        data: {
          labels: ['ลาพักร้อน', 'ลาป่วย', 'ลากิจ'],  // ชื่อหมวดหมู่
          datasets: [{
            label: 'จำนวนวันลา',
            data: [45, 30, 5],  // ข้อมูลที่จะแสดง
            backgroundColor: 'rgb(31, 165, 255)',  // สีกราฟ
            borderColor: 'rgb(0, 94, 255)',  // สีเส้นขอบกราฟ
            borderWidth: 1
          }]
        },
        options: this.leaveChartOptions  // ใช้ leaveChartOptions ที่ประกาศไว้
      });
    }
  }
}
