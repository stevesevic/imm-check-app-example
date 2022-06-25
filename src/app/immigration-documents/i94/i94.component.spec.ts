import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I94Component } from './i94.component';

describe('I94Component', () => {
  let component: I94Component;
  let fixture: ComponentFixture<I94Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I94Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(I94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
