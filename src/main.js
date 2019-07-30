import Vue from 'vue';
import App from './App';
import './styles/common.scss';
import store from './store';
// 全局组件
import pageHead from './components/page-head.vue';
import pageFoot from './components/page-foot.vue';
import uLink from '@/components/uLink.vue';
import product from '@/components/product.vue';
import uniIcon from '@/components/uni-icon/uni-icon.vue';
Vue.component('page-head', pageHead);
Vue.component('page-foot', pageFoot);
Vue.component('u-lint', uLink);
Vue.component('uni-icon', uniIcon);
Vue.component('x-product', product);
Vue.config.productionTip = false;

Vue.prototype.$store = store;
Vue.prototype.$backgroundAudioData = {
    playing: false,
    playTime: 0,
    formatedPlayTime: '00:00:00',
};

App.mpType = 'app';

const app = new Vue({
    store,
    ...App,
});
app.$mount();
