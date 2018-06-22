import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAportesComponent } from './registro-aportes.component';

describe('RegistroAportesComponent', () => {
  let component: RegistroAportesComponent;
  let fixture: ComponentFixture<RegistroAportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
