import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTinySliderComponent } from './ngx-tiny-slider.component';

describe('NgxTinySliderComponent', () => {
  let component: NgxTinySliderComponent;
  let fixture: ComponentFixture<NgxTinySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTinySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTinySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
