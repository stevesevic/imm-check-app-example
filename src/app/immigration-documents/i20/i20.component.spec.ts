import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I20Component } from './i20.component';

describe('I20Component', () => {
  let component: I20Component;
  let fixture: ComponentFixture<I20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(I20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
