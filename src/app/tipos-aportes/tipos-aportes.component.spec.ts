import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposAportesComponent } from './tipos-aportes.component';

describe('TiposAportesComponent', () => {
  let component: TiposAportesComponent;
  let fixture: ComponentFixture<TiposAportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposAportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposAportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
