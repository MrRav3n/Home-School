import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeworkFinishedComponent } from './homework-finished.component';

describe('HomeworkFinishedComponent', () => {
  let component: HomeworkFinishedComponent;
  let fixture: ComponentFixture<HomeworkFinishedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
