import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxTinySliderSettingsInterface} from '../../projects/ngx-tiny-slider/src/lib/interfaces/ngx-tiny-slider-settings.interface';
import {NgxTinySliderInstance} from '../../projects/ngx-tiny-slider/src/lib/interfaces/ngx-tiny-slider-instanse.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tinySliderConfig: NgxTinySliderSettingsInterface;
  @ViewChild('slider') slider: NgxTinySliderInstance;

  ngOnInit() {
    this.tinySliderConfig = {
      arrowKeys: true,
      autoWidth: true,
      gutter: 10,
      nav: false,
      controlsText: ['<', '>']
    };
  }

  next() {
    this.slider.sliderInstance.goTo('next');
  }

  prev() {
    this.slider.sliderInstance.goTo('prev');
  }
}
