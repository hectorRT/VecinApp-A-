import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDiscusionesComponent } from './blog-discusiones.component';

describe('BlogDiscusionesComponent', () => {
  let component: BlogDiscusionesComponent;
  let fixture: ComponentFixture<BlogDiscusionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDiscusionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDiscusionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
