import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpkWidgetOverallDataCardComponent } from './spk-widget-overall-data-card.component';

describe('SpkWidgetOverallDataCardComponent', () => {
  let component: SpkWidgetOverallDataCardComponent;
  let fixture: ComponentFixture<SpkWidgetOverallDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpkWidgetOverallDataCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpkWidgetOverallDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
