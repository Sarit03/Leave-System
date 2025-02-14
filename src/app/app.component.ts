import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LeaveBalanceDisplayComponent } from "./leave-balance-display/leave-balance-display.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LeaveRequestFormComponentComponent } from "./leave-request-form-component/leave-request-form-component.component";
import { LeaveLeaveHistoryComponentComponent } from "./leave-leave-history-component/leave-leave-history-component.component";
import { NavbarmasterComponent } from "./navbarmaster/navbarmaster.component";
// import { LeaveLeaveHistoryComponentComponent } from "./leave-leave-history-component/leave-leave-history-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    LeaveRequestFormComponentComponent,
    LeaveLeaveHistoryComponentComponent,
    DashboardComponent,
    LeaveBalanceDisplayComponent, NavbarmasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Leave-System';
}
