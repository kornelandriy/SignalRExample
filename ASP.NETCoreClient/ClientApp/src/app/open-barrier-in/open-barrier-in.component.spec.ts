import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBarrierInComponent } from './open-barrier-in.component';

describe('OpenBarrierInComponent', () => {
  let component: OpenBarrierInComponent;
  let fixture: ComponentFixture<OpenBarrierInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenBarrierInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenBarrierInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
