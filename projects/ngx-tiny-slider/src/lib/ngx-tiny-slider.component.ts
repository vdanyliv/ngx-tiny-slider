import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import {NgxTinySliderService} from './ngx-tiny-slider.service';

@Component({
  selector: 'ngx-tiny-slider',
  templateUrl: 'ngx-tiny-slider.component.html',
  styleUrls: ['ngx-tiny-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxTinySliderComponent implements OnInit {
  @Input() config;
  @ViewChild('slideItems') slideItemsContainerRef;

  defaultConfig = this.ngxTinySliderService.getDefaultConfig();

  constructor(private ngxTinySliderService: NgxTinySliderService) {
  }

  ngOnInit() {
    this.extendConfig();
    this.initSlider();
  }

  private extendConfig() {
    Object.keys(this.config).forEach(i => this.defaultConfig[i] = this.config[i]);
  }

  private initSlider() {
    this.ngxTinySliderService.initSlider(this.defaultConfig, this.slideItemsContainerRef);
  }
}
