import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBarrierOutComponent } from './open-barrier-out.component';

describe('OpenBarrierOutComponent', () => {
  let component: OpenBarrierOutComponent;
  let fixture: ComponentFixture<OpenBarrierOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenBarrierOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenBarrierOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
