import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnivarsaryComponent } from './annivarsary.component';

describe('AnnivarsaryComponent', () => {
  let component: AnnivarsaryComponent;
  let fixture: ComponentFixture<AnnivarsaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnivarsaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnivarsaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
