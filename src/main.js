import {
    createApp
} from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/reset.css';
import router from './router'

import 'vant/lib/index.css';
import vant from 'vant'

import TDesignMobile from 'tdesign-mobile-vue'
import 'tdesign-mobile-vue/es/style/index.css'

import naive from 'naive-ui'


import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'


// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'


const app = createApp(App);

app.use(router);


app.use(vant).use(TDesignMobile);

app.use(Antd)
.use(ViewUIPlus);
app.use(naive).mount('#app');
