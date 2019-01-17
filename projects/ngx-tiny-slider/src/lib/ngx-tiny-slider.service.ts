import {Injectable} from '@angular/core';
import {tns} from 'tiny-slider';

@Injectable({
  providedIn: 'root'
})
export class NgxTinySliderService {

  constructor() {
  }

  initSlider(elementRef) {
    return tns({
      container: elementRef,
      items: 3,
      slideBy: 'page',
      autoplay: true
    });
  }
}
