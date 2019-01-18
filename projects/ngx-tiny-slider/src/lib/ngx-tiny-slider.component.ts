import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import {Subject} from 'rxjs';
import {first} from 'rxjs/operators';

import {NgxTinySliderService} from './ngx-tiny-slider.service';
import {NgxTinySliderSettingsInterface} from './interfaces/ngx-tiny-slider-settings.interface';

@Component({
  selector: 'ngx-tiny-slider',
  templateUrl: 'ngx-tiny-slider.component.html',
  styleUrls: ['ngx-tiny-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxTinySliderComponent implements OnInit {
  @Input() config: NgxTinySliderSettingsInterface;
  @ViewChild('slideItems') slideItemsContainerRef;

  public domReady = new Subject();
  private defaultConfig = this.ngxTinySliderService.getDefaultConfig();

  constructor(private ngxTinySliderService: NgxTinySliderService) {
  }

  ngOnInit() {
    this.extendConfig();

    if (this.config.waiteForDom) {
      this.listenForDomReady();
    } else {
      this.initSlider();
    }
  }

  private listenForDomReady() {
    this.domReady
      .pipe(first())
      .subscribe(() => {
        this.initSlider();
      });
  }

  private extendConfig() {
    Object.keys(this.config).forEach(i => this.defaultConfig[i] = this.config[i]);
  }

  private initSlider() {
    this.ngxTinySliderService.initSlider(this.defaultConfig, this.slideItemsContainerRef);
  }
}
