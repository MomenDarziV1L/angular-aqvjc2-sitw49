import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAltersComponent } from './product-alters.component';

describe('ProductAltersComponent', () => {
  let component: ProductAltersComponent;
  let fixture: ComponentFixture<ProductAltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
