import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import RestaurantCardsPlugin from './index'

const app = createApp(App)
app.use(RestaurantCardsPlugin)
app.mount('#app')
