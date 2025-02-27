import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveRequestFormComponentComponent } from './leave-request-form-component/leave-request-form-component.component';
import { LeaveLeaveHistoryComponentComponent } from './leave-leave-history-component/leave-leave-history-component.component';
import { HomeComponent } from './home/home.component'; // นำเข้า HomeComponent
import { LeaveBalanceDisplayComponent } from './leave-balance-display/leave-balance-display.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'leave-request', component: LeaveRequestFormComponentComponent },
  { path: 'leave-history', component: LeaveLeaveHistoryComponentComponent },
  { path: 'leave-requests', component: LeaveBalanceDisplayComponent }, // เส้นทางไปหน้า รายการขออนุมัติการลา
  { path: 'home', component: HomeComponent },  // เพิ่มเส้นทางไปหน้า Home
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // เปลี่ยนเส้นทางเริ่มต้นไปหน้า Home
];
