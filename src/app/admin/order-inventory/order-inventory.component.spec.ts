import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInventoryComponent } from './order-inventory.component';

describe('OrderInventoryComponent', () => {
  let component: OrderInventoryComponent;
  let fixture: ComponentFixture<OrderInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderInventoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
