import Vue from "vue"
import App from "./App.vue"
import Vuex from "vuex"
import router from "./router"
import store from "./store"
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Vuex)

// const store = new Vuex.Store({
//     state: {
//         count: 0
//     },
//     mutations: {
//         countIncrease(state, number) {
//             state.count = number
//         }
//     }
// })

Vue.prototype.$store = store
Vue.prototype.$ajax = axios

router.beforeEach((to, from, next) => {
    if (localStorage.account || to.path === "/login") {
        next()
    } else {
        next({
            path: "/login"
        })
    }
})

new Vue({
    store,
    router,
    axios,
    render: h => h(App)
}).$mount("#app")
