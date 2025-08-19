import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaComparador } from './factura-comparador';

describe('FacturaComparador', () => {
  let component: FacturaComparador;
  let fixture: ComponentFixture<FacturaComparador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaComparador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaComparador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
