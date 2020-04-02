import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import BuyModalComponent from './components/Shared/BuyModal'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'vuetify/dist/vuetify.min.css'

Vue.component('app-buy-modal', BuyModalComponent);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyCFN_t2AW6G3Xv0BO9oicPWImGedK9SkyY",
      authDomain: "itc-new-ads.firebaseapp.com",
      databaseURL: "https://itc-new-ads.firebaseio.com",
      projectId: "itc-new-ads",
      storageBucket: "itc-new-ads.appspot.com",
      messagingSenderId: "135940306874",
      appId: "1:135940306874:web:150d5ecad787ac07464f83",
      measurementId: "G-9395RFTYZK"
    };
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    });

    this.$store.dispatch('fetchAds');
  }
}).$mount('#app');
