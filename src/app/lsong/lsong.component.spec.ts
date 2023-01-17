import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsongComponent } from './lsong.component';

describe('LsongComponent', () => {
  let component: LsongComponent;
  let fixture: ComponentFixture<LsongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
