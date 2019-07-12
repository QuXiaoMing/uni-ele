import Vue from 'vue';

import pageHead from './components/page-head.vue';
import pageFoot from './components/page-foot.vue';
import uLink from '@/components/uLink.vue';
import uniIcon from '@/components/uni-icon/uni-icon.vue';

// Object.keys(modules).forEach(key => {
//     Vue.component(key, modules[key]);
// });

Vue.component('page-head', pageHead);
Vue.component('page-foot', pageFoot);
Vue.component('u-lint', uLink);
Vue.component('uni-icon', uniIcon);

export const modules = {
    pageHead,
    pageFoot,
    uLink,
    uniIcon,
};

export default modules;
