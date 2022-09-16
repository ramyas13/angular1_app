import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaysofferComponent } from './birthdaysoffer.component';

describe('BirthdaysofferComponent', () => {
  let component: BirthdaysofferComponent;
  let fixture: ComponentFixture<BirthdaysofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdaysofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaysofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
