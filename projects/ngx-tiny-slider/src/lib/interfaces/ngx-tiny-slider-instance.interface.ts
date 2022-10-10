import {TinySliderInstance} from 'tiny-slider';
import {ElementRef} from '@angular/core';
import {Subject} from 'rxjs';

export interface NgxTinySliderInstanceInterface {
  domReady: Subject<any>;
  sliderInstance: TinySliderInstance;
  slideItemsContainerRef: ElementRef;
}
