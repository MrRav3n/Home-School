import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClassromComponent } from './manage-classrom.component';

describe('NewClassromComponent', () => {
  let component: ManageClassromComponent;
  let fixture: ComponentFixture<ManageClassromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageClassromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClassromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
