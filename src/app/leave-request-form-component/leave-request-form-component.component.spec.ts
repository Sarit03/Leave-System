import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestFormComponentComponent } from './leave-request-form-component.component';

describe('LeaveRequestFormComponentComponent', () => {
  let component: LeaveRequestFormComponentComponent;
  let fixture: ComponentFixture<LeaveRequestFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveRequestFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveRequestFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
