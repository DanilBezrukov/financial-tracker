import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticalPointComponent } from './analytical-point.component';

describe('AnalyticalPointComponent', () => {
  let component: AnalyticalPointComponent;
  let fixture: ComponentFixture<AnalyticalPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticalPointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyticalPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
