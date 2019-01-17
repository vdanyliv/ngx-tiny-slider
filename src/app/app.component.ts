import {Component, OnInit} from '@angular/core';
import {NgxTinySliderSettingsInterface} from '../../projects/ngx-tiny-slider/src/lib/interfaces/ngx-tiny-slider-settings.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tinySliderConfig: NgxTinySliderSettingsInterface;

  ngOnInit() {
    this.tinySliderConfig = {
      arrowKeys: true,
      autoWidth: true,
      gutter: 10,
      centerNavigation: true,
      customControlsStyle: true,
      controlsText: ['<', '>'],
    };
  }
}
