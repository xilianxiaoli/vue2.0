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
    <div>this is comm child two</div>
    <button @click="toSiblings()">sibling</button>

    <button @click="_post()">Post</button>


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
