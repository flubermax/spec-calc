import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {swal} from '@/mixins/swal'

const app = createApp({
  render: () => h(App)
});
app.use(router);
app.use(store);
app.mixin(swal)

// configureCompat({
//   // default everything to Vue 2 behavior
//   MODE: 2
// });

app.mount("#app");
