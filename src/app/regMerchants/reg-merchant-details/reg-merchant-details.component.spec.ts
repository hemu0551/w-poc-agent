import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegMerchantDetailsComponent } from './reg-merchant-details.component';

describe('RegMerchantDetailsComponent', () => {
  let component: RegMerchantDetailsComponent;
  let fixture: ComponentFixture<RegMerchantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegMerchantDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegMerchantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
