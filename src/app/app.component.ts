import {Component, OnInit, ViewChild} from '@angular/core';

import {NgxTinySliderSettingsInterface} from '../../projects/ngx-tiny-slider/src/lib/interfaces/ngx-tiny-slider-settings.interface';
import {NgxTinySliderInstanceInterface} from '../../projects/ngx-tiny-slider/src/lib/interfaces/ngx-tiny-slider-instance.interface';
import {NgxTinySliderService} from '../../projects/ngx-tiny-slider/src/lib/ngx-tiny-slider.service';
import {BehaviorSubject} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sliderHidden = true;
  tinySliderConfig: NgxTinySliderSettingsInterface;
  tinySliderConfigLazy: NgxTinySliderSettingsInterface;
  /**
   * Simple Behaviour subject that will accumulate number of successfully loaded images
   */
  imageLoadingProcess: BehaviorSubject<number> = new BehaviorSubject(0);

  @ViewChild('slider', {static: false}) slider: NgxTinySliderInstanceInterface;
  @ViewChild('sliderLazy', {static: false}) sliderLazy: NgxTinySliderInstanceInterface;

  /**
   * List of items that we plan to load dynamically
   */
  public listOfImages: Array<string> = [
    'http://www.mattsorger.com/newsletterpics/gsw07_01.jpg',
    'http://www.mattsorger.com/newsletterpics/gsw07_01.jpg',
    'http://www.mattsorger.com/newsletterpics/gsw07_01.jpg',
    'http://www.mattsorger.com/newsletterpics/gsw07_01.jpg',
    'http://www.mattsorger.com/newsletterpics/gsw07_01.jpg',
    'http://www.mattsorger.com/newsletterpics/gsw07_01.jpg',
    'http://www.mattsorger.com/newsletterpics/gsw07_01.jpg'
  ];

  constructor(private ngxTinySliderService: NgxTinySliderService) {
  }

  ngOnInit() {
    this.tinySliderConfig = {
      arrowKeys: true,
      autoWidth: true,
      gutter: 10,
      nav: false,
      controlsText: ['<', '>']
    };

    this.tinySliderConfigLazy = {
      arrowKeys: true,
      waitForDom: true, // do not forget about this
      autoWidth: true,
      gutter: 10,
      nav: false,
      controlsText: ['<', '>']
    };

    this.trackImageLoading();
  }

  /**
   * One of the way how we can count successfully loaded images and fire domReady event
   */
  trackImageLoading() {
    this.imageLoadingProcess
      .pipe(
        filter((count: number) => count === this.listOfImages.length)
      )
      .subscribe(next => {
          this.sliderLazy.domReady.next();
          this.sliderHidden = false;
          console.log('image loaded', next);
      });
  }

  /**
   * Simple example of tracking image loading process
   */
  onImgLoadSuccess() {
    const incLoadedCount = this.imageLoadingProcess.getValue() + 1;
    this.imageLoadingProcess.next(incLoadedCount);
  }

  invokeService() {
    console.log(this.ngxTinySliderService, 'ngxTinySliderService');
  }

  next() {
    this.slider.sliderInstance.goTo('next');
  }

  prev() {
    this.slider.sliderInstance.goTo('prev');
  }
}
