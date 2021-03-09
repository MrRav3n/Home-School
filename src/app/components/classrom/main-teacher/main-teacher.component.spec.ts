import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainTeacherComponent } from './main-teacher.component';

describe('MainTeacherComponent', () => {
  let component: MainTeacherComponent;
  let fixture: ComponentFixture<MainTeacherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
