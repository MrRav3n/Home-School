import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkResponseComponent } from './homework-response.component';

describe('HomeworkResponseComponent', () => {
  let component: HomeworkResponseComponent;
  let fixture: ComponentFixture<HomeworkResponseComponent>;

  beforeEach(async(() => {
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
