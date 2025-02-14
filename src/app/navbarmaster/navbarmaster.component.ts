import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // เพิ่มการนำเข้า CommonModule


@Component({
  selector: 'app-navbarmaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbarmaster.component.html',
  styleUrl: './navbarmaster.component.scss'
})
export class NavbarmasterComponent {
  isLoggedOut = false;  // กำหนดสถานะล็อกเอาท์เป็น false

  constructor(private router: Router) {}

  goToHome() {
    this.isLoggedOut = true;  // เมื่อกดล็อกเอาท์จะซ่อน Navbar
    this.router.navigate(['/home']);
  }

  goToLeaveRequests() {
    this.router.navigate(['/leave-requests']); // นำทางไปยังหน้า leave-requests
  }

      // ฟังก์ชันสำหรับไปที่หน้า Leave History
      goToLeaveHistory() {
        this.router.navigate(['/leave-history']);
      }
  
}