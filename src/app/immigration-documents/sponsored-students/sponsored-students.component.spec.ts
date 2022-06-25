import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredStudentsComponent } from './sponsored-students.component';

describe('SponsoredStudentsComponent', () => {
  let component: SponsoredStudentsComponent;
  let fixture: ComponentFixture<SponsoredStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsoredStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsoredStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
