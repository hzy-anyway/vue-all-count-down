import AllCountDown from './vue-all-count-down.vue';
import _Vue from 'vue'
import Manager from "./manager.js";

AllCountDown.install = Vue => {
    if (!Vue) {
    window.Vue = Vue = _Vue
    }
    Vue.AllCountDown=Manager;
    Vue.component('all-count-down',AllCountDown);
}
export default AllCountDown;