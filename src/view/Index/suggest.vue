<template>
<div>
    <div class = "headerCommon">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>反馈建议</span>
    </div>
    <div class="suggestValue">
        <h4>您的建议和想法对我们非常重要！</h4>
        <div>
            <textarea class="suggestBackgroundImg"></textarea>
        </div>
        <div class = "suggestWord">我们将从反馈建议的客户中,不动气取出优秀建议的客户给予奖励。</div>
    </div>
    <div class = "allButton">
        <input onClick="location.href='/#/progress'" class = "yellowButton" type = "button" value = "还款"/>
    </div>
</div>
</template>
<script>

export default {
  data() {
    return {
    }
  },
  methods: {

  },
  mounted(){
      $("body")[0].style.backgroundColor = "#ffffff";
  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/aboutUs.css';

</style>
