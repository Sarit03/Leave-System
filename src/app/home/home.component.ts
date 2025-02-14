import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  // นำเข้า Router

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedRole: string = '';  // ตัวแปรเก็บบทบาท
  isLoggedIn: boolean = false; // ตัวแปรเช็คสถานะล็อกอิน

  // ฟังก์ชันเลือกบทบาท
  constructor(private router: Router) {}

  selectRole(role: string) {
    this.selectedRole = role;
    this.isLoggedIn = true; // ตั้งสถานะให้เป็นล็อกอิน

    if (role === 'employee') {
      // ถ้าเลือกพนักงาน ให้ไปที่หน้า dashboard
      this.router.navigate(['/dashboard']);
    } else if (role === 'manager') {
      // ถ้าเลือกผู้จัดการ ให้ไปที่หน้า leave-history
      this.router.navigate(['/leave-history']);
    }
  }

  // ฟังก์ชันล็อกเอาท์
  logout() {
    this.isLoggedIn = false;
    this.selectedRole = ''; // รีเซ็ตบทบาท
  }
}
