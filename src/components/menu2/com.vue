<template>
  <div>
    <div>this is comm component</div>

    <span>父组件name:{{item.age}}</span>

    <div>
      <span class="bb" v-for='ms in messages'>{{ms}}</span>
    </div>

    <button @click="getFromChild()">dd</button>

    <com-child :f_name='item.age' v-on:child="getFromChild"></com-child>

    <com-childt></com-childt>

  </div>
</template>

<script>

  var comChild = require('./comChild.vue');
  var comChildt = require('./comChildt.vue');

  var ff = {
    data: function() {
      return {
        msg: 'com vue',
        name: 'com',
        item: {
          age: 12
        },
        messages: []
      }
    },

    components: {
      comChild,
      comChildt
    },
    methods: {
      getFromChild: function(msg) {
        this.messages.push(msg);
      }
    },
    // 在创建实例时 `events` 选项简单地调用 `$on`
//        events: {
//            'child': function(msg) {
//                this.messages.push(msg);
//                return true
//            }
//        },
    ready: function() {
      var c = this.$refs.comchild
      c.wall()
      console.log(c)
    }
  }

  module.exports = ff;
</script>

<style>
  .bb {
    display: block;
    color: #00b3ee;
  }
</style>
