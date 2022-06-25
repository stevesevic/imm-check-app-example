import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaStampComponent } from './visa-stamp.component';

describe('VisaStampComponent', () => {
  let component: VisaStampComponent;
  let fixture: ComponentFixture<VisaStampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaStampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
