import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaVecinosComponent } from './consulta-vecinos.component';

describe('ConsultaVecinosComponent', () => {
  let component: ConsultaVecinosComponent;
  let fixture: ComponentFixture<ConsultaVecinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaVecinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaVecinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
