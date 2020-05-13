import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxTinySliderSettingsInterface, NgxTinySliderInstance, NgxTinySliderService} from 'ngx-tiny-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tinySliderConfig: NgxTinySliderSettingsInterface;
  @ViewChild('slider', {static: false}) slider: NgxTinySliderInstance;

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
