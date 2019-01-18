import {TinySliderSettings} from 'tiny-slider';

export interface NgxTinySliderSettingsInterface extends TinySliderSettings {
  waiteForDom?: boolean;
  centerNavigation?: boolean;
  customControlsStyle?: boolean;
}
