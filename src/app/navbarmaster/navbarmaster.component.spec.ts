import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarmasterComponent } from './navbarmaster.component';

describe('NavbarmasterComponent', () => {
  let component: NavbarmasterComponent;
  let fixture: ComponentFixture<NavbarmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarmasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
