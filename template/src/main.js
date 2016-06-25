import Vue from 'vue';
import App from './app.vue';

new Vue({ // eslint-disable-line
  el: '#app',
  render() {
    return this.$createElement(App);
  }
});
