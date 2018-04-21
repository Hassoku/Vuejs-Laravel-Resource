import VueRouter from 'vue-router'

export default new VueRouter({
    routes: [
        { path: '/', component: require('./components/Articles') },
        { path: '/login', component: require('./components/Login') },
        { path: '/register', component: require('./components/Register') }
    ]
})