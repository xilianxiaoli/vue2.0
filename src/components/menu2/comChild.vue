<style>
  a {
    display: block;
  }

  .code {
    display: block;
  }
</style>
<template>
  <div>
    <div>this is comm child</div>
    <span style="display:block">子组件name:{{f_name}}</span>
    <input type="text" v-model='f_name'>

    <button @click="send()">与父类通信</button>

    <code class="code">
      组件中通信方式<br>
      1.通过声明 props，在父组件中将值传给子组件，默认是单向的，但可以 设置 sync 变为双向的数据流<br>
      2.在父组件中通过设置索引 ref，获取子组件的对象<br>
      3.子组件可以通过向上广播的方式主动与父组件通信，父组件监听方式有： 子组件上 v-on:footer="onFooter" ， 监听footer句柄，触发onFooter方法； events 中监听事件<br>
    </code>

    <a href="https://vuejs.org.cn/" target="_blank">vue</a>
    <a href="https://github.com/vuejs/vue-router" target="_blank">vue-router</a>
    <a href="http://vue-loader.vuejs.org/en/index.html" target="_blank">vue-loader</a>
    <a href="http://vuex.vuejs.org/en/intro.html" target="_blank">vuex</a>
    <a href="https://github.com/vuejs/awesome-vue#libraries--plugins" target="_blank">vue插件列表</a>
    <a href="http://javascript.ruanyifeng.com/nodejs/module.html" target="_blank">CommonJS规范</a>
    <a href="https://babeljs.io/docs/learn-es2015/" target="_blank">babel-es6</a>
    <a href="http://es6.ruanyifeng.com/" target="_blank">es6</a>
    <a href="https://tinypng.com/" target="_blank">tinypng</a>

    <a href="https://github.com/keepfool/vue-tutorials" target="_blank">vue1.0 及一些相关插件的介绍</a>

  </div>
</template>
<script>
  import eventHub from '../../eventHub'

  export default{
    data(){
      return {
        msg: 'hello vue',
        index: 0
      }
    },
    props: {
      f_name: Number
    },
    methods: {
      send: function() {
        console.log(this.f_name);
        //向父类发送通知
        this.$emit('child', 'child send ms' + this.index);
        this.index++;
      },
      wall: function() {
        console.log('call from father')
      },
      toSiblings:function() {
        eventHub.$emit('sibling','hello dibling')
      }
    },
    created:function() {
      eventHub.$on('sibling',function(msg) {
        console.log(msg)
      })
    }
  }
</script>
