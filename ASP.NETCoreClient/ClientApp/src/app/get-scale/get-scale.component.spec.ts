import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetScaleComponent } from './get-scale.component';

describe('GetScaleComponent', () => {
  let component: GetScaleComponent;
  let fixture: ComponentFixture<GetScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
