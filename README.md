# ngx-tiny-slider
Angular component that gives you possibility to use tiny slider library. 
1. Demo [page](http://ganlanyuan.github.io/tiny-slider/demo/)

# How to use
1. npm i ngx-tiny-slider
2. Import NgxTinySliderModule into your shared / root module
3. Use in your component template use <ngx-tiny-slider>

# Whats new on 0.0.4?
1. Added component OnDestroy hook, that will handle slider instance destroying  

# Usage example
Your module defenition example
```javascript
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxTinySliderModule} from 'ngx-tiny-slider';

@NgModule({
  imports: [
    BrowserModule,
    NgxTinySliderModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    NgxTinySliderModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
```

Your component defenition example
  ```javascript
import {Component, OnInit} from '@angular/core';
import {NgxTinySliderSettingsInterface} from 'ngx-tiny-slider';

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
      controlsText: ['<', '>']
    };
  }
}

  ```

Your component template example
```html
<ngx-tiny-slider [config]="tinySliderConfig">
    <ng-container class="items">
      <div class="item">
        <a target="_blank" href="google.com">
          <img src="http://www.mattsorger.com/newsletterpics/gsw07_01.jpg">
        </a>
      </div>

      <div class="item">
        <a target="_blank" href="google.com">
          <img src="http://www.mattsorger.com/newsletterpics/gsw07_01.jpg">
        </a>
      </div>

      <div class="item">
        <a target="_blank" href="google.com">
          <img src="http://www.mattsorger.com/newsletterpics/gsw07_01.jpg">
        </a>
      </div>

      <div class="item">
        <a target="_blank" href="google.com">
          <img src="http://www.mattsorger.com/newsletterpics/gsw07_01.jpg">
        </a>
      </div>

      <div class="item">
        <a target="_blank" href="google.com">
          <img src="http://www.mattsorger.com/newsletterpics/gsw07_01.jpg">
        </a>
      </div>
    </ng-container>
  </ngx-tiny-slider>
  ```
  
  # Additional options
  1. domReady {Subject} - provide possibility to initialize component manually
