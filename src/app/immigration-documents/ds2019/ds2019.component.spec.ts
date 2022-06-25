import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ds2019Component } from './ds2019.component';

describe('Ds2019Component', () => {
  let component: Ds2019Component;
  let fixture: ComponentFixture<Ds2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ds2019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ds2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
