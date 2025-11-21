import type { App, Plugin } from 'vue'
import _TvLabel from './components/TvLabel.vue'
import './style.scss'

const TvLabel = _TvLabel as typeof _TvLabel & Plugin;
TvLabel.install = (app: App) => {
  app.component('TvLabel', TvLabel)
};

export { TvLabel }

export const TvLabelPlugin: Plugin = {
  install: TvLabel.install
};
export default TvLabel;

declare module 'vue' {
  export interface GlobalComponents {
    TvLabel: typeof TvLabel;
  }
}
