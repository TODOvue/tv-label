import TvLabel from './components/TvLabel.vue'
import './style.scss'

(TvLabel as any).install = (app: any) => {
  app.component('TvLabel', TvLabel)
};

export const TvLabelPlugin = {
  install(app: any) {
    app.component('TvLabel', TvLabel)
  }
}

export { TvLabel }
export default TvLabel
