import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnaComponent } from './dna.component';

describe('DnaComponent', () => {
  let component: DnaComponent;
  let fixture: ComponentFixture<DnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
