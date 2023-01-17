import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LepiComponent } from './lepi.component';

describe('LepiComponent', () => {
  let component: LepiComponent;
  let fixture: ComponentFixture<LepiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LepiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LepiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
