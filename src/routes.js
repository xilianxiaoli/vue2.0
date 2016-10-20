import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {path: '/index', component: require('./components/index.vue')},
    {path: '/timeline', component: require('./components/menu2/index.vue')},
    {path: '/comm', component: require('./components/menu2/comm.vue')},
    {path: '/com', component: require('./components/menu2/com.vue'),meta:{auth:true}},
    {path: '*', redirect: '/index'}
  ]
})

// if (to.matched.some(record => record.meta.requiresAuth)) {

// module.exports = function(router) {
//
//   routes:[
//     { path: '/index', component: require('./components/index.vue') },
//     { path: '/timeline', component: require('./components/menu2/index.vue') },
//     { path: '*', redirect: '/index' }
//   ]
//
//
//     // router.transitionOnLoad = true;
//     // router.map({
//     //     '/index': {
//     //         component: require('./components/index.vue'),
//     //         auth: true,
//     //         subRoutes: {
//     //             '/xiaoli/:id': {
//     //                 component: require('./components/menu2/index.vue')
//     //             }
//     //         }
//     //     },
//     //     '/timeline': {
//     //         name: 'time',
//     //         component: require('./components/menu2/index.vue')
//     //     },
//     //     '/comm': {
//     //         name: '',
//     //         component: require('./components/menu2/comm.vue')
//     //     },
//     //     '/com': {
//     //         name: '',
//     //         component: require('./components/menu2/com.vue')
//     //     },
//     //     '/404': {
//     //         component: {
//     //             component: require('./404.vue')
//     //         }
//     //     }
//     //
//     // })
// };
