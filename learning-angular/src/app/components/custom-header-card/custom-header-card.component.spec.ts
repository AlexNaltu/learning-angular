import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeaderCardComponent } from './custom-header-card.component';

describe('CustomHeaderCardComponent', () => {
  let component: CustomHeaderCardComponent;
  let fixture: ComponentFixture<CustomHeaderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomHeaderCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomHeaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
