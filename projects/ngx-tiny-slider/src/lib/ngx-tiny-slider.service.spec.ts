import { TestBed } from '@angular/core/testing';

import { NgxTinySliderService } from './ngx-tiny-slider.service';

describe('NgxTinySliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTinySliderService = TestBed.get(NgxTinySliderService);
    expect(service).toBeTruthy();
  });
});
