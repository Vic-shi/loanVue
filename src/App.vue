
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
      closeAlert(){
        var index = parent.layer.getFrameIndex(window.name); 
        parent.layer.close(index);
      }
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  box-shadow: 0 5px 10px 0 rgba(153,153,153,0.06);
  min-height: 100vh;
}
</style>
