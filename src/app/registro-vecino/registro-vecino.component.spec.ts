import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVecinoComponent } from './registro-vecino.component';

describe('RegistroVecinoComponent', () => {
  let component: RegistroVecinoComponent;
  let fixture: ComponentFixture<RegistroVecinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroVecinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVecinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
