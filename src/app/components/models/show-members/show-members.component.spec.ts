import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowMembersComponent } from './show-members.component';

describe('ShowMembersComponent', () => {
  let component: ShowMembersComponent;
  let fixture: ComponentFixture<ShowMembersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
