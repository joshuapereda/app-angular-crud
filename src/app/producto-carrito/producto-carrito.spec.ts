import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCarrito } from './producto-carrito';

describe('ProductoCarrito', () => {
  let component: ProductoCarrito;
  let fixture: ComponentFixture<ProductoCarrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoCarrito],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoCarrito);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
