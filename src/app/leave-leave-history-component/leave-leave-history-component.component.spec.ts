import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveLeaveHistoryComponentComponent } from './leave-leave-history-component.component';

describe('LeaveLeaveHistoryComponentComponent', () => {
  let component: LeaveLeaveHistoryComponentComponent;
  let fixture: ComponentFixture<LeaveLeaveHistoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveLeaveHistoryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveLeaveHistoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
