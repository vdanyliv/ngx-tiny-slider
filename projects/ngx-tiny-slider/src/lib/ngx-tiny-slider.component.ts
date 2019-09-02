import {Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import {Subject} from 'rxjs';
import {first, takeWhile} from 'rxjs/operators';

import {NgxTinySliderService} from './ngx-tiny-slider.service';
import {NgxTinySliderSettingsInterface} from './interfaces/ngx-tiny-slider-settings.interface';

@Component({
  selector: 'ngx-tiny-slider',
  templateUrl: 'ngx-tiny-slider.component.html',
  styleUrls: ['ngx-tiny-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxTinySliderComponent implements OnInit, OnDestroy {
  @Input() config: NgxTinySliderSettingsInterface;
  @ViewChild('slideItems') slideItemsContainerRef;

  public sliderInstance;
  private aliveObservable = true;

  public domReady = new Subject();
  private defaultConfig = this.ngxTinySliderService.getDefaultConfig();

  constructor(private ngxTinySliderService: NgxTinySliderService) {
  }

  ngOnInit() {
    if (this.config) {
      this.extendConfig();
    }

    if (this.config.waiteForDom) {
      this.listenForDomReady();
    } else {
      this.initSlider();
    }
  }

  ngOnDestroy() {
    if (this.config.waiteForDom) {
      this.aliveObservable = false;
    }

    if (this.sliderInstance && this.sliderInstance.destroy) {
      this.sliderInstance.destroy();
    }
  }

  private listenForDomReady() {
    this.domReady
      .pipe(
        first(),
        takeWhile(() => this.aliveObservable)
      )
      .subscribe(() => this.initSlider());
  }

  private extendConfig() {
    Object.keys(this.config).forEach(i => this.defaultConfig[i] = this.config[i]);
  }

  private initSlider() {
    this.sliderInstance = this.ngxTinySliderService.initSlider(this.defaultConfig, this.slideItemsContainerRef);
  }
}
