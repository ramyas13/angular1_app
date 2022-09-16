import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsdealComponent } from './dealsdeal.component';

describe('DealsdealComponent', () => {
  let component: DealsdealComponent;
  let fixture: ComponentFixture<DealsdealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealsdealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
