import { async, TestBed } from '@angular/core/testing';
import { OrderUiModule } from './order-ui.module';

describe('OrderUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OrderUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OrderUiModule).toBeDefined();
  });
});
