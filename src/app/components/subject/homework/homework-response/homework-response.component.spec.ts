import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeworkResponseComponent } from './homework-response.component';

describe('HomeworkResponseComponent', () => {
  let component: HomeworkResponseComponent;
  let fixture: ComponentFixture<HomeworkResponseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
