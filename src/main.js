// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import iview from 'iview';
// import 'iview/dist/styles/iview.css';
Vue.use(iview);


// css
import '@/assets/fonts/iconfont/iconfont.css';
import '@/assets/style/reset.css';
import '@/assets/style/common.css';
import '@/assets/style/theme.css';
import '@/assets/style/app.css';

// import '@/assets/style/main.css';

import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
