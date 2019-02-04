import {ElementRef, Injectable} from '@angular/core';
import {tns} from 'tiny-slider/src/tiny-slider';

@Injectable({
  providedIn: 'root'
})
export class NgxTinySliderService {

  constructor() {
  }

  initSlider(config, elementRef: ElementRef) {
    const extendConfig = Object.assign({container: elementRef.nativeElement}, config);
    return tns(extendConfig);
  }

  getDefaultConfig() {
    return {
      items: 3,
      mode: 'carousel',
      controlsPosition: 'bottom',
      speed: 400
    };
  }
}
