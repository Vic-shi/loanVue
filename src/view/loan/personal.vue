<template>
<div>
    <div class = "header">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>个人开户</span>
    </div>
    <div class = "personalValue">
        <div>
            <label>姓名</label>
            <input />
        </div>
        <div>
            <label>身份证号</label>
            <input />
        </div>
        <div>
            <label>联系电话</label>
            <input />
        </div>
        <div>
            <label>银行卡号</label>
            <input />
            <img class = "blankImg" src = "static/image/loan/bank_logo_ny.png">
        </div>
        <div @click="alert">
            <label>开户行</label>
            <input v-model="blankName" placeholder="可不填"/>
        </div>
    </div>
    <div class = "personalBottom">
        <div>
            <img @click="changeShowRb" v-show="showRb" class = "personalBottomImg1" src = "static/image/loan/Rb_pre.png">
            <img @click="changeShowRb" v-show="!showRb" class = "personalBottomImg1" src = "static/image/loan/Rb.png">
            <label>开通新网管</label>
        </div>

        <img class = "personalBottomImg2" src = "static/image/loan/account_banner.png">
    </div>
    <div>
        <input onClick="location.href='/#/success'" class = "yellowButton" type = "button" value = "下一步"/>
    </div>
    <div id="sheet1" class="mui-popover mui-popover-bottom mui-popover-action ">
    <!-- 可选择菜单 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell">
        <a @click="changeBlank('工商银行')">工商银行</a>
      </li>
      <li class="mui-table-view-cell">
        <a @click="changeBlank('建设银行')">建设银行</a>
      </li>
      <li class="mui-table-view-cell">
        <a @click="changeBlank('农业银行')">农业银行</a>
      </li>
      <li class="mui-table-view-cell">
        <a @click="changeBlank('招商银行')">招商银行</a>
      </li>
      <li class="mui-table-view-cell">
        <a @click="changeBlank('中国银行')">中国银行</a>
      </li>
    </ul>
    <!-- 取消菜单
    <ul class="mui-table-view">
      <li class="mui-table-view-cell">
        <a href="#sheet1"><b>取消</b></a>
      </li>
    </ul> -->
</div>
</div>
</template>
<script>

export default {
  data() {
    return {
        blankName: "",
        showRb:true
    }
  },
  methods: {
      alert(){
          mui('#sheet1').popover('toggle');
      },
      changeBlank(blankNames){
          this.blankName = blankNames;
        //   window.location.href = "#sheet1";
         mui('#sheet1').popover('toggle');
      },
      changeShowRb(){
          if(this.showRb == true){
              this.showRb = false;
          }else{
              this.showRb = true;
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
    @import '../../../static/css/personal.css';

</style>
