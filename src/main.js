import { createApp } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import TvLabel from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import './style.scss'

const app = createApp(TvLabel)
app.component('TvDemo', TvDemo)
app.mount('#tv-label')
