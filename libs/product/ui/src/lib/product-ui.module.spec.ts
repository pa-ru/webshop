import { async, TestBed } from '@angular/core/testing';
import { ProductUiModule } from './product-ui.module';

describe('ProductUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProductUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProductUiModule).toBeDefined();
  });
});
