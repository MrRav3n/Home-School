import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHomeworkResponseComponent } from './add-homework-response.component';

describe('AddHomeworkResponseComponent', () => {
  let component: AddHomeworkResponseComponent;
  let fixture: ComponentFixture<AddHomeworkResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHomeworkResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHomeworkResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
