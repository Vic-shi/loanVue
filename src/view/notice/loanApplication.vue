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
        <span v-show="success">您的贷款申请已通过</span>
        <span v-show="!success">开户失败</span>
        <div>为了顺利放款请尽快开户,以获得贷款款项。您也可以在“账户资料-银行存管”中自行开户。</div>
    </div>
      <div class = "allButton">
        <div>
            <span>2018/12/12&nbsp;&nbsp;21:00:04</span>
            <span>如有疑问请联系客服: <a>400-688-0802</a></span>
        </div>
          <input v-show="success" @click="count()" class = "yellowButton" type = "button" value = "去开户"/>
          <input v-show="!success" @click="count()" class = "yellowButton" type = "button" value = "查看原因"/>
          <!-- <input class = "yellowBorderButton" type = "button" value = "取消"/> -->
      </div>
</div>
</template>
<script>

export default {
  data() {
    return {
      success:true
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
