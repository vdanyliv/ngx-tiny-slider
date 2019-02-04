# ngx-tiny-slider
Angular component that gives you possibility to use tiny slider library. 
1. Demo [page](http://ganlanyuan.github.io/tiny-slider/demo/)

# How to use
1. Import NgxTinySliderModule into your module
2. Use in your component template <ngx-tiny-slider>

#Whats new on 0.0.4?
1. Added component OnDestroy hook, that will handle slider instance destroying  

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
  
Your component defenition
  
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
      controlsText: ['<', '>']
    };
  }
}

  ```
  
  # Additional options
  1. domReady {Subject} - provide possibility to initialize component manually
  
  # Deprecated and removed (use tiny-slider options in case if you need extra  customisation)
  1. customControlsStyle {Boolean} - Custom component style
  2. centerNavigation {Boolean} - Navigation on center of the slider container
