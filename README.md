# ngx-tiny-slider
Angular component that gives you possibility to use [tiny-slider](https://www.npmjs.com/package/tiny-slider) library. 

# How to use

1. Import NgxTinySliderModule into your module
2. Use in your component template <ngx-tiny-slider>

# Usage example
Your component template
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
  
  # Your component defenition
  
  ```javascript
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

  ```
