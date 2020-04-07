import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClassromComponent } from './new-classrom.component';

describe('NewClassromComponent', () => {
  let component: NewClassromComponent;
  let fixture: ComponentFixture<NewClassromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClassromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClassromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
