<template>

  <div style="">
    <div class="row a-bounceinT" style="text-align:center;padding:100px;">
      <p>menu2</p>
      <div>
        <p>当前路径: {{$route.path}}</p>
        <!--<p>当前路由参数: {{$route.params | json}}</p>-->
      </div>
      <!--<span v-on:click="makeArr">{{name | capitalize }}</span>-->
      <!--<p v-if='1==1' v-bind:class='classObj' @click="change()">v-if</p>-->
      <!--showCount = {{showCount}}-->
    </div>

    <span>preCount：{{preCount}}</span>
    <span>currentCount：{{currentCount}}</span>

    <ul>
      <li v-for="item in list">
        {{item.name}}
      </li>
    </ul>

    <!--<span>动态组件</span>-->
    <!--<input type="text" v-model="currentView">-->
    <!--<component :is="currentView"></component>-->


    <button @click='goto()'>点击事件切换路由com</button>
    <router-link to="com">链接跳转comm</router-link>

  </div>

</template>

<script>
  import com from './com.vue'
  import comm from './comm.vue'

  export default{
    data: function() {
      return {
        currentView: 'com',
        name: 'xiaoli',
        classObj: {
          pp: true
        },
        list: [],
        show: true,
        count: 1,
        preCount: 0
      }
    },
    computed: {
      currentCount: function() {
        return this.preCount * 2
      },
      qq: function() {
        return !this.classObj.pp
      },
      showCount: function() {
        if (this.show) {
          this.count += 1
        }
        return this.count
      }
    },
    methods: {
      makeArr: function() {
        for (var i = 0; i < 10; i++) {
          var _item = {name: 'name=' + i}
          this.list.push(_item)
        }
        this.$dispatch('child-msg', 'child')
        console.log('activate path: ' + $route.path)
      },
      change: function() {
        this.show = !this.show;
      },
      goto: function() {
        this.$router.push('com')
      }
    },
    components: {
      com,
      comm
    },
    mounted: function() {
      var self = this
      console.log('activate path: ')
      setInterval(function() {
        console.log('ss')
        self.preCount++
      }, 1000)
      self.$nextTick(function() {
        console.log(this.$el)
      })
    },
    beforeRouteEnter: function(to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
      next()
    },
    beforeRouteLeave: function(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      next()
    }
  }

</script>

<style>
  .pp {
    color: red;
  }
</style>
