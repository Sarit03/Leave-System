import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Add ReactiveFormsModule
import { MatCardModule } from '@angular/material/card';  // นำเข้า MatCardModule
import { MatButtonModule } from '@angular/material/button';  // นำเข้า MatButtonModule
import { MatToolbarModule } from '@angular/material/toolbar';  // นำเข้า MatToolbarModule
import { MatTableModule } from '@angular/material/table'; // นำเข้า MatTableModule
import { MatFormFieldModule } from '@angular/material/form-field';  // เพิ่ม MatFormFieldModule
import { MatDatepickerModule } from '@angular/material/datepicker';  // นำเข้า MatDatepickerModule
import { MatNativeDateModule } from '@angular/material/core';  // นำเข้า MatNativeDateModule
import { MatSelectModule } from '@angular/material/select';
import { NavbarComponent } from "../navbar/navbar.component";  // นำเข้า MatSelectModule

@Component({
  selector: 'app-leave-request-form-component',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule, NavbarComponent],  // เพิ่ม ReactiveFormsModule ที่นี่
  templateUrl: './leave-request-form-component.component.html',
  styleUrls: ['./leave-request-form-component.component.scss']
})
export class LeaveRequestFormComponentComponent implements OnInit {
  leaveRequestForm!: FormGroup; // ใช้เครื่องหมาย ! เพื่อบอกว่า leaveRequestForm จะได้รับค่าในภายหลัง
  today: string = new Date().toISOString().split('T')[0]; // กำหนดค่าเริ่มต้นให้กับ today

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // สร้างฟอร์มใน ngOnInit
    this.leaveRequestForm = this.fb.group({
      leaveType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  // ฟังก์ชันส่งคำขอลา
  onSubmit(): void {
    if (this.leaveRequestForm.valid) {
      console.log(this.leaveRequestForm.value);
    }
  }
}