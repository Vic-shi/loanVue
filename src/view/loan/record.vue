<template>
<div>
    <div class = "header">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>借款记录</span>
    </div>
    <div>
        <div class = "blankDiv"></div>
        <div onClick="location.href='/#/loanDetails'" class = "recordValue">
            <div>
                <span class = "recordValueDiv1Span">HNGB2018092282</span>
                <span class = "recordYellowSpan">申请中</span>
            </div>
            <div class = "recordValueDiv2">
                <span>法人贷</span>
                <span class = "recordValueDiv2Right">20000.00元</span>
            </div>
            <div class = "recordValueDiv3">
                <span>2018/3/11</span>
                <span class = "recordValueDiv3Right">12期</span>
            </div>
        </div>

        <div class = "recordValue">
            <div>
                <span class = "recordValueDiv1Span">HNGB2018092282</span>
                <span class = "recordYellowSpan">申请中</span>
            </div>
            <div class = "recordValueDiv2">
                <span>法人贷</span>
                <span class = "recordValueDiv2Right">20000.00元</span>
            </div>
            <div class = "recordValueDiv3">
                <span>2018/3/11</span>
                <span class = "recordValueDiv3Right">12期</span>
            </div>
        </div>

        <div class = "recordValue">
            <div>
                <span class = "recordValueDiv1Span">HNGB2018092282</span>
                <span class = "recordYellowSpan">申请中</span>
            </div>
            <div class = "recordValueDiv2">
                <span>法人贷</span>
                <span class = "recordValueDiv2Right">20000.00元</span>
            </div>
            <div class = "recordValueDiv3">
                <span>2018/3/11</span>
                <span class = "recordValueDiv3Right">12期</span>
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

  },
  mounted(){
      $("body")[0].style.backgroundColor = "#f6f6f6";
  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/record.css';

</style>
