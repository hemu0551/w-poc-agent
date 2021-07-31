import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegMerchantsComponent } from './reg-merchants.component';

describe('RegMerchantsComponent', () => {
  let component: RegMerchantsComponent;
  let fixture: ComponentFixture<RegMerchantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegMerchantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegMerchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
