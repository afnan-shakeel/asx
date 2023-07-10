import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router  from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// import * as labsComponents from 'vuetify/labs/components';
// import colors from 'vuetify/lib/util/colors';
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
const vuetify = createVuetify({
  components,
  directives,
  });

const app = createApp(App)



app.use(vuetify)
app.use(router)
app.mount('#app')
