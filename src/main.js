import Vue from "vue";
import App from "./App.vue";

// npm install vue@next
// npm install -g @vue/cli first
//  vue create vue-test2app to start the job
// npm run serve to run it in localhost:8080
// npm i axios

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
