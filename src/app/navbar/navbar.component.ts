  import { Component } from '@angular/core';
  import { MatToolbarModule } from '@angular/material/toolbar';  // นำเข้า MatToolbarModule
  import { MatButtonModule } from '@angular/material/button';  // นำเข้า MatButtonModule
  import { MatDialog } from '@angular/material/dialog';
  import { LeaveRequestFormComponentComponent } from '../leave-request-form-component/leave-request-form-component.component';
  import { Router } from '@angular/router';
  import { CommonModule } from '@angular/common'; // เพิ่มการนำเข้า CommonModule

  @Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
  })
  export class NavbarComponent {
    isLoggedOut = false;  // กำหนดสถานะล็อกเอาท์เป็น false

    constructor(private router: Router) {}

    // ฟังก์ชันสำหรับไปที่หน้า Dashboard
    goToDashboard() {
      this.router.navigate(['/dashboard']);
    }

    // ฟังก์ชันสำหรับไปที่หน้า Leave Request Form
    goToLeaveRequest() {
      this.router.navigate(['/leave-request']);
    }

    // ฟังก์ชันสำหรับไปที่หน้า Leave History
    goToLeaveHistory() {
      this.router.navigate(['/leave-history']);
    }

    // ฟังก์ชันสำหรับล็อกเอาท์
    goToHome() {
      this.isLoggedOut = true;  // เมื่อกดล็อกเอาท์จะซ่อน Navbar
      this.router.navigate(['/home']);
    }

    // ฟังก์ชันตรวจสอบเส้นทางที่กำลังใช้งาน
    isActive(route: string): boolean {
      return this.router.url === route;
    }
  }
