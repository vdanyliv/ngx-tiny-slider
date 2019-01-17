import {Component, OnInit, ViewChild} from '@angular/core';

import {NgxTinySliderService} from './ngx-tiny-slider.service';

@Component({
  selector: 'lib-ngx-tiny-slider',
  templateUrl: 'ngx-tiny-slider.component.ts',
  styleUrls: ['ngx-tiny-slider.component.scss']
})
export class NgxTinySliderComponent implements OnInit {
  @ViewChild('ref') containerRef;

  constructor(private ngxTinySliderService: NgxTinySliderService) {
  }

  ngOnInit() {
    this.ngxTinySliderService.initSlider(this.containerRef);
  }
}
