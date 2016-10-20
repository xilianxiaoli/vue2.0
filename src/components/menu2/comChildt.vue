<style style="sass">
  a {
    display: block;
  }

  .code {
    display: block;
  }
  .btnaaa{
    border-radius: 10px;
    transition :transform 1s;
    display: flex
  }
</style>
<template>
  <div>
    <div class="app">this is comm child two</div>
    <button @click="toSiblings()">sibling</button>

    <button class="btnaaa" @click="_post()">Post</button>


  </div>
</template>
<script>
  require('src/commons/styles/app.scss')
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
      toSiblings:function() {
        eventHub.$emit('sibling','hello dibling two ')
      },
      _post:function() {
        var formData = new FormData();
        this.$http.get('https://cnodejs.org/api/v1/topics?page=1&limit=20&tab=&mdrender=true').then(this.successCallback);
      },
      successCallback:function(response) {
        console.log(response.body)
      }
    }
  }
</script>
