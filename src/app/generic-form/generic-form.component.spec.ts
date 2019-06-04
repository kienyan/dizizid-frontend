import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { genericFormComponent } from './generic-form.component';

describe('genericFormComponent', () => {
  let component: genericFormComponent;
  let fixture: ComponentFixture<genericFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ genericFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(genericFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
