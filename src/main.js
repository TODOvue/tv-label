import { createApp } from 'vue'
import TvLabel from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import './style.scss'

const app = createApp(TvLabel)
app.mount('#tv-label')
