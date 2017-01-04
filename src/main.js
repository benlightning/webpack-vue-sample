import Vue from 'Vue';
import App from './components/app.vue';
Vue.config.debug = true; //开启错误提示
window.onload = function () {
    new Vue({
        el: '#app',
        components: {
            'my-component': App
        },
        render: h => h(App)
    });
}