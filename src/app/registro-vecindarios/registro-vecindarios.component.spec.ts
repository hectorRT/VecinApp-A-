import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVecindariosComponent } from './registro-vecindarios.component';

describe('RegistroVecindariosComponent', () => {
  let component: RegistroVecindariosComponent;
  let fixture: ComponentFixture<RegistroVecindariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroVecindariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVecindariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
