<template>
<div>
    <div class = "loadSurround">
    <div class = "loadHeader">
        <span>借贷类型</span>
    </div>
    <span class = "loanTitle">企业借贷</span>
    <div class = "companyLoad">
        <div>
            <img src = "static/image/index/product_icon_jyfrd.png">
            <div>
                <span class = "boldSpan">精英法人贷</span>
                <span>最高额度 100万&nbsp;&nbsp;3至24个月</span>
            </div>
            <input type = "button" value = "立即申请"/>
        </div>
        <div>
            <img src = "static/image/index/product_icon_frd.png">
            <div>
                <span class = "boldSpan">法人贷</span>
                <span>最高额度 50万&nbsp;&nbsp;&nbsp;3至24个月</span>
            </div>
            <input type = "button" value = "立即申请"/>
        </div>
        <div>
            <img src = "static/image/index/product_icon_hnd.png">
            <div>
                <span class = "boldSpan">惠农贷</span>
                <span>最高额度 100万&nbsp;&nbsp;3至24个月</span>
            </div>
            <input type = "button" value = "立即申请"/>
        </div>
        <div class = "companyLoadDivNoBoder">
            <img src = "static/image/index/product_icon_jyd.png">
            <div>
                <span class = "boldSpan">经营贷</span>
                <span>最高额度 50万&nbsp;&nbsp;&nbsp;3至24个月</span>
            </div>
            <input type = "button" value = "立即申请"/>
        </div>
    </div>
    <span class = "loanTitle">个人借贷</span>
    <div class = "companyLoad">
            <div>
                <img src = "static/image/index/product_icon_jyfrd.png">
                <div>
                    <span class = "boldSpan">法人贷</span>
                    <span>最高额度 50万&nbsp;&nbsp;&nbsp;3至24个月</span>
                </div>
                <input type = "button" value = "立即申请"/>
            </div>
            <div class = "companyLoadDivNoBoder">
                <img src = "static/image/index/product_icon_frd.png">
                <div>
                    <span class = "boldSpan">薪资贷</span>
                    <span>最高额度 100万&nbsp;&nbsp;3至24个月</span>
                </div>
                <input type = "button" value = "立即申请"/>
            </div>
        </div>
</div>
<div class = "fotter">
    <div>
       <router-link to="/">
            <img src = "static/image/index/tab_icon_home.png">
            <span>首页</span>
        </router-link>
    </div>
    <div>
        <router-link to="/Loan">
            <img src = "static/image/index/tab_icon_money_pre.png">
            <span class = "yellowSpan">借款</span>
        </router-link>
    </div>
    <div>
        <router-link to="/mine">
            <img src = "static/image/index/tab_icon_mine.png">
            <span>我的</span>
        </router-link>
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
  created(){
      $("body")[0].style.backgroundColor = "#f6f6f6";
  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/Loan.css';
</style>
