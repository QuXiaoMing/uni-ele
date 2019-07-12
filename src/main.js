import Vue from 'vue';
import App from './App';

import store from './store';
// 全局组件
import modules from './modules';

Vue.config.productionTip = false;

Vue.prototype.$store = store;
Vue.prototype.$backgroundAudioData = {
    playing: false,
    playTime: 0,
    formatedPlayTime: '00:00:00',
};

Object.keys(modules).forEach(key => {
    Vue.component(key, modules[key]);
});

App.mpType = 'app';

const app = new Vue({
    store,
    ...App,
});
app.$mount();
