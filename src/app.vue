<template>
  <div>
    <header>
      <poi-header v-bind:father-name="hahaObj" v-on:head-vali="head(123)"></poi-header>
    </header>

    <section>
      <div class="page">
        <router-view transition="expand"></router-view>  <!--顶级的外链。它会渲染一个和顶级路由匹配的组件-->
      </div>
    </section>

    <footer>
      <poi-footer v-on:footer="onFooter" v-show="footShow"></poi-footer> <!--或者通过 v-on 标签绑定派发监听事件-->
    </footer>
  </div>
</template>

<script>
  	import poiHeader from './components/header.vue';
  import poiFooter from './components/footer.vue';
//
//  var poiHeader = require('./components/header.vue')

  export default {
    data() {
      return {
        footShow: true,
        haha: '',
        hahaObj: {
          name: 'fuckObj'
        }
      }
    },
    components: {
      poiHeader,
      poiFooter
    },
    methods: {
      onFooter: function(msg) {
        console.log(msg)
      },
      head: function(msg) {
        console.log("app headVali" + msg)
      }
    },
    created() {

    },
    events: {  //调用$on监听派发事件
      'child-msg': function(msg) {
        console.log(msg)
      }
    }
  };
</script>

<style>

  .expand-transition {
    transition: all .3s ease;
    overflow: hidden;
  }

  .expand-enter, .expand-leave {
    height: 0;
    /*padding: 0px 10px;*/
    opacity: 0;
  }

  p {
    font-size: 2em;
  }

</style>
