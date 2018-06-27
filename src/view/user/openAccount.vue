<template>
<div>
    <div class = "header">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>开户申请</span>
    </div>
    <div class = "openAccountTop">
        <div class = "openAccountTopDiv1">
            <div v-show="showPeo">
                <img src = "static/image/user/account_personal_pre.png">
                <span>个人开户</span>    
            </div>
            <div v-show="!showPeo" @click="changePeo">
                <img src = "static/image/user/account_personal.png">
                <span>个人开户</span>    
            </div>
            <div v-show="showPeo" @click="changePeo">
                <img src = "static/image/user/account_company.png">
                <span>企业开户</span>    
            </div> 
            <div v-show="!showPeo">
                <img src = "static/image/user/account_company_pre.png">
                <span>企业开户</span>    
            </div> 
        </div>
        <div class = "openAccountWord">
            请根据您的需要选择开户类型,如企业开户只能绑定对公账户银行卡,若不清楚请咨询普惠客服: 400-688-0802
        </div>
    </div>
    <div>
        <input onClick="location.href='/#/personal'" class = "yellowButton" type = "button" value = "下一步"/>
    </div>
</div>
</template>
<script>

export default {
  data() {
    return {
        showPeo:true,
    }
  },
  methods: {
      changePeo(){
          if(this.showPeo == true){
            this.showPeo = false;
          }else{
            this.showPeo = true;
          }
      }
  },
  mounted(){

  },
  watch:{

  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/openAccount.css';

</style>
