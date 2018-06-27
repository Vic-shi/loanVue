<template>
<div>
    <div class = "headerCommon">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>常见问题</span>
    </div>
    <div class = "aboutUsValue">
        <div class = "aboutUsValueBorder">
            <label>还款指南</label>
            <img src = "static/image/index/Icon_list.png">
        </div>
        <div class = "aboutUsValueBorder">
            <label>逾期说明</label>
            <img src = "static/image/index/Icon_list.png">
        </div>
        <div class = "aboutUsValueBorder">
            <label>借款指南</label>
            <img src = "static/image/index/Icon_list.png">
        </div>
        <div class = "aboutUsValueBorder">
            <label>个人开户演示</label>
            <img src = "static/image/index/Icon_list.png">
        </div>
        <div class = "aboutUsValueBorder">
            <label>企业开户演示</label>
            <img src = "static/image/index/Icon_list.png">
        </div>
        <div class = "aboutUsValueBorder">
            <label>密码更改及找回</label>
            <img src = "static/image/index/Icon_list.png">
        </div>
        <div>
            <label>更换银行卡</label>
            <img src = "static/image/index/Icon_list.png">
        </div>
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
      $("body")[0].style.backgroundColor = "#f6f6f6";
  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/aboutUs.css';

</style>
