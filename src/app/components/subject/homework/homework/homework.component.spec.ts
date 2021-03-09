import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeworkComponent } from './homework.component';

describe('HomeworkComponent', () => {
  let component: HomeworkComponent;
  let fixture: ComponentFixture<HomeworkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
