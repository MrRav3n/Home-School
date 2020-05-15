import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResponseFileComponent } from './show-response-file.component';

describe('ShowResponseFileComponent', () => {
  let component: ShowResponseFileComponent;
  let fixture: ComponentFixture<ShowResponseFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowResponseFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowResponseFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
