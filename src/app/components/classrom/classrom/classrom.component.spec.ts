import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassromComponent } from './classrom.component';

describe('ClassromComponent', () => {
  let component: ClassromComponent;
  let fixture: ComponentFixture<ClassromComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
