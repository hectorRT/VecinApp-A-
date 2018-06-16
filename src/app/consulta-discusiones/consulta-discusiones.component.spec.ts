import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDiscusionesComponent } from './consulta-discusiones.component';

describe('ConsultaDiscusionesComponent', () => {
  let component: ConsultaDiscusionesComponent;
  let fixture: ComponentFixture<ConsultaDiscusionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaDiscusionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaDiscusionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
