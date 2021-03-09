import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeworkResponseModalComponent } from './homework-response-modal.component';

describe('HomeworkResponseComponent', () => {
  let component: HomeworkResponseModalComponent;
  let fixture: ComponentFixture<HomeworkResponseModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkResponseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkResponseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
