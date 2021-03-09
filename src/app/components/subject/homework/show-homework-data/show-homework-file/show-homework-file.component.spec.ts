import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowHomeworkFileComponent } from './show-homework-file.component';

describe('ShowHomeworkFileComponent', () => {
  let component: ShowHomeworkFileComponent;
  let fixture: ComponentFixture<ShowHomeworkFileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHomeworkFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHomeworkFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
