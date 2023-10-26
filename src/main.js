import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css'
import 'amfe-flexible'
import router from './router'
import store from './store'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import './api/mock'
import { Button, Icon, Toast } from 'vant';
// 2. 引入组件样式
//import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)//.use(Button)
app.use(store)
app.mount('#app')
   