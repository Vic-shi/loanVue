<template>
<div>
    <div class = "header">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>通知</span>
    </div>
    <div class = "successTop">
        <img v-show="success"  src = "static/image/notice/success_Icon.png">
        <img v-show="!success" src = "static/image/notice/fail_Icon.png">
        <span v-show="success">开户成功</span>
        <span v-show="!success">开户失败</span>
        <div>我们需要获得授权才能为您提供贷款服务请点击授权</div>
    </div>
      <div class = "allButton">
          <input v-show="success" class = "yellowBorderButton" type = "button" value = "授权"/>
          <input v-show="!success" class = "yellowButton" type = "button" value = "查看原因"/>
          <input class = "yellowBorderButton" type = "button" value = "取消"/>
      </div>
</div>
</template>
<script>

export default {
  data() {
    return {
      success:false
    }
  },
  methods: {

  },
  mounted(){
      $("body")[0].style.backgroundColor = "#ffffff";
  },
  watch:{

  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/meg.css';

</style>
