import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveRequestFormComponentComponent } from './leave-request-form-component/leave-request-form-component.component';
import { LeaveLeaveHistoryComponentComponent } from './leave-leave-history-component/leave-leave-history-component.component';
import { LeaveBalanceDisplayComponent } from './leave-balance-display/leave-balance-display.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'leave-request', component: LeaveRequestFormComponentComponent },
  { path: 'leave-history', component: LeaveLeaveHistoryComponentComponent },
  { path: 'leave-requests', component: LeaveBalanceDisplayComponent }, // เส้นทางไปหน้า รายการขออนุมัติการลา
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
