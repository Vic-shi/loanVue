<template>
<div>
    <div class = "header">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>还款清单</span>
    </div>
    <div>
        <div v-show="closeEye" class = "repayment">
            <div>
                <span>今日</span>
                <img v-show="closeEye" @click="showOrHide()" src = "static/image/loan/list_open.png">
                <img v-show="!closeEye" @click="showOrHide()" src = "static/image/loan/list_close.png">
            </div>
            <div class = "repaymentHeader2">
                <span>2018/5/12&nbsp;·&nbsp;周六</span>
                <!-- <li>周六</li> -->
            </div>
        </div>
        <div v-show="!closeEye" class = "repayment2">
            <div>
                <span>全部待还</span>
                <img @click="showOrHide()" src = "static/image/loan/list_close.png">
            </div>
            <div class = "repayment2Div">
                <span class = "repaymentBigMoney">25900.00</span><a>元</a>
            </div>
            <div class = "repaymentHeader3">
                <span>今日</span>
                <span>2018/5/12&nbsp;·&nbsp;周六</span>
                <!-- <li>周六</li> -->
            </div>
        </div>
        <div class = "elitesLoanDiv">
            <span class = "elitesLoanYellowSpan"></span>
            <span class = "elitesLoanLabel">近30日待还</span>
            <img src = "static/image/loan/list_more_b.png">
            <span class = "rightSpan">全部借款</span>
        </div>
        <div>
            <div onClick="location.href='/#/repayment'" class = "repaymentDiv">
                <div class = "repaymentDivHeader">
                    <span class = "labelColorRed">已逾期</span>
                    <span class = "orderNumber">HNGB2018092282</span>
                    <span class = "repaymentDay">6/12</span>
                </div>
                <div class = "repaymentDivValue">
                    <div>
                        <span>本月未还</span>
                        <span class = "repaymentDivMoney">4876.4元</span>
                    </div>
                    <div>
                        <span>逾期未还&nbsp;·&nbsp;0天</span>
                        <span class = "repaymentDivMoney">32.87元</span>
                    </div>
                </div>
                <div class = "repaymentDivDetail">
                    <span>还款日:&nbsp;2018/05/11</span>
                    <img class = "rightImg" src = "static/image/loan/list_more_b.png">
                    <span class = "rightSpan">查看详情</span>
                </div>
            </div>
            <div class = "repaymentDiv">
                <div class = "repaymentDivHeader">
                    <span class = "labelColorYellow">本月未还</span>
                    <span class = "orderNumber">HNGB2018092282</span>
                    <span class = "repaymentDay">6/12</span>
                </div>
                <div class = "repaymentDivValue">
                    <div>
                        <span>本月未还</span>
                        <span class = "repaymentDivMoney">4876.4元</span>
                    </div>
                    <div>
                        <span>逾期未还&nbsp;·&nbsp;0天</span>
                        <span class = "repaymentDivMoney">32.87元</span>
                    </div>
                </div>
                <div class = "repaymentDivDetail">
                    <span>还款日:&nbsp;2018/05/11</span>
                    <img class = "rightImg" src = "static/image/loan/list_more_b.png">
                    <span class = "rightSpan">查看详情</span>
                </div>
            </div>


        </div>


    </div>

</div>
</template>
<script>

export default {
  data() {
    return {
        closeEye:true
    }
  },
  methods: {
      showOrHide(){
          if(this.closeEye == true){
              this.closeEye = false;
          }else{
              this.closeEye = true;
          }
      }
  },
  mounted(){
      $("body")[0].style.backgroundColor = "#f6f6f6";
  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/detailed.css';

</style>
