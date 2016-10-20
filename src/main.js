// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

var Vue = require('vue');
import router  from'./routes';
var filter = require('./filters/index.js');
var directive = require('./directive/index.js');
var services = require('./services/index.js');
var appEntry = require('./app.vue');
import FastClick from 'fastclick';

//初始化全局css
require('./commons/styles/app.scss');//公用定制css

//初始化XMLHttpRequest RestfulAPI
Vue.use(require('vue-resource'));

FastClick.attach(document.body, {});

//初始化过滤器
filter.init(Vue);
directive.init(Vue);
//初始化应用程序路由

new Vue({
  el: '#app',
  http: {
    root: '/root',
    headers: {
      Authorization: 'Basic YXBpOnBhc3N3b3Jk'
    },
    before:function(request) {
      // abort previous request, if exists
      if (this.previousRequest) {
        this.previousRequest.abort();
      }

      // set previous request on Vue instance
      this.previousRequest = request;
    }
  },
  router,
  render: h => h(appEntry)
}).$mount();

Vue.http.interceptors.push((request, next) => {
  //在发起请求之前 loading 处理
  // help.showLoading = true
  next((response) => {
    //当网络错误时统一处理
    if(!response.ok){
       response.status;
      alert('network error')
    }
    // help.showLoading = false
    return response
  });
});

//每次路由之前请求该方法
router.beforeEach(function(to, from, next) {
  console.log('auth:' + to.meta.auth);
  if (to.meta.auth === true) {
    //进行登录验证
    if (1==1) {
      next();
    } else {
      alert('do login');
    }
  } else {
    next()
  }
});

router.afterEach(function() {

});

