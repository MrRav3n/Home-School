import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarksListComponent } from './marks-list.component';

describe('MarksListComponent', () => {
  let component: MarksListComponent;
  let fixture: ComponentFixture<MarksListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
