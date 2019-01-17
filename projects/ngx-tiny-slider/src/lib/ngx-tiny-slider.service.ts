import {ElementRef, Injectable} from '@angular/core';
import {tns} from 'tiny-slider/src/tiny-slider';

@Injectable({
  providedIn: 'root'
})
export class NgxTinySliderService {

  constructor() {
  }

  initSlider(config, elementRef: ElementRef) {
    return tns(Object.assign({container: elementRef.nativeElement}, config));
  }

  getDefaultConfig() {
    return {
      items: 3,
      nav: false,
      mode: 'carousel',
      controlsPosition: 'bottom',
      speed: 400,
    };
  }
}
