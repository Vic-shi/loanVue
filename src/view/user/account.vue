<template>
<div>
    <div class = "header">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>账户资料</span>
    </div>
    <div class = "acountValue">
        <div onClick="location.href='/#/openAccount'" class = "acountValue1">
            <div>
                <label>实名认证</label>
                <img src = "static/image/user/Icon_certified.png">
            </div>
            <span>蔡彬&nbsp;·&nbsp;187******76</span>
        </div>
        <div onClick="location.href='/#/depository'" class = "acountValue2">
            <div>
                <label>银行存管开户</label>
                <img src = "static/image/user/Icon_certified.png">
            </div>
            <span>工行&nbsp;·&nbsp;3312&nbsp;****&nbsp;****4568</span>
        </div>
        <div class = "acountValue3">
            <div>
                <label>平台授权</label>
                <img src = "static/image/user/Icon_certified.png">
            </div>
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
    alert(){
        //去认证下标为1,取消为2
        var btnArray = ['取消', '去认证'];
        var mesaage = '<div class = "alertDivForApply" style = "text-align:center;"><span>为了顺利借款,请尽快进行实名认证</span></div>';
        mui.confirm(mesaage,"您还未进行实名认证", btnArray,function(e) {  
            if(e.index == 1){
                console.log("去认证");
                window.location.href = "/#/openAccount"
            }else{
                console.log("取消");
            }
        });  
      },
  },
  mounted(){
      this.alert();
      $("body")[0].style.backgroundColor = "#f6f6f6";
      
  },
  watch:{

  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/account.css';

</style>
