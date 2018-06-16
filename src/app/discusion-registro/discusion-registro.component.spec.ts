import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscusionRegistroComponent } from './discusion-registro.component';

describe('DiscusionRegistroComponent', () => {
  let component: DiscusionRegistroComponent;
  let fixture: ComponentFixture<DiscusionRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscusionRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscusionRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
