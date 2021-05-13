import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child3OfChild1Component } from './child3-of-child1.component';

describe('Child3OfChild1Component', () => {
  let component: Child3OfChild1Component;
  let fixture: ComponentFixture<Child3OfChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child3OfChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child3OfChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
