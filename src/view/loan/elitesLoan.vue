<template>
<div>
    <div class = "elitesLoanHeader">
        <img src = "static/image/loan/product_bg_frd.png">
        <a  href="#" onclick="javascript:history.back(-1);">
            <img class = "backImg" src = "static/image/loan/nav_back_w.png">
        </a>
        <div class = "elitesLoanHeaderTop">
            <span class = "elitesLoanHeaderTopSpan1">法人贷</span>
            <span class = "elitesLoanHeaderTopSpan2">用于解决企业中短期,资金需求的无抵押贷款。</span>
            <div class = "elitesLoanHeaderTopDiv">
                <div class = "elitesLoanHeaderTopLi1">
                    <li>贷款额度</li>
                    <li>年化利率</li>
                    <li>贷款期限</li>
                </div>
                <div class = "elitesLoanHeaderTopLi2">
                    <li>高至50万</li>
                    <li>低至8.5%</li>
                    <li>3-24个月</li>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class = "elitesLoanDiv">
            <span class = "elitesLoanYellowSpan"></span>
            <span class = "elitesLoanLabel">申请条件</span>
            <img @click="alert()" src = "static/image/loan/product_notice.png">
        </div>
        <div class="elitesLoanDivBorder">
            <span>1.&nbsp;&nbsp;&nbsp;年龄在23-60周岁之间</span>
            <span>2.&nbsp;&nbsp;&nbsp;企业经营场地在<a class = "yellowColor">业务区域</a>,且经营满一年。</span>
            <span>3.&nbsp;&nbsp;&nbsp;企业为借款单位,法人及其配偶作为共同借款人。</span>
        </div>
         <ul class="mui-table-view"> 
            <li class="mui-table-view-cell mui-collapse">
                <a class="mui-navigate-right" href="#">需要准备的材料及详情</a>
                <div class="mui-collapse-content">
                    <div class = "elitesLoanDiv2">
                        <span class = "elitesLoanYellowSpan"></span>
                        <span class = "elitesLoanLabel">产品详情</span>
                    </div>
                    <div class="elitesLoanDivBorder elitesLoanDivBorder2">
                        <span>1.&nbsp;&nbsp;&nbsp;支持提前还款及提前结清贷款</span>
                        <span>2.&nbsp;&nbsp;&nbsp;还款方式:&nbsp;&nbsp;<a>等额本息</a></span>
                        <span>3.&nbsp;&nbsp;&nbsp;借款金额:&nbsp;&nbsp;<a>10-100万</a></span>
                        <span>4.&nbsp;&nbsp;&nbsp;借款期限:&nbsp;&nbsp;<a>6-12个月</a></span>
                    </div>
                </div>
                <div class="mui-collapse-content oneBorderBottom">
                    <div class = "oneBorderBottomLi1">
                        <li>放款时间</li>
                        <li>参考年化</li>
                        <li>参考通过率</li>                        
                    </div>
                    <div class = "oneBorderBottomLi2">
                        <li>3天</li>
                        <li>8.5%</li>
                        <li>70%</li>                        
                    </div>
                </div>
                <div class="mui-collapse-content oneBorderBottom">
                    <div class = "elitesLoanDiv2">
                        <span class = "elitesLoanYellowSpan"></span>
                        <span class = "elitesLoanLabel">所需材料</span>
                    </div>
                    <div class ="material">
                        <div>
                            <span>1.&nbsp;&nbsp;&nbsp;征信报告</span>
                            <span>5.&nbsp;&nbsp;&nbsp;营业执照</span>
                        </div>
                        <div>
                            <span>2.&nbsp;&nbsp;&nbsp;身份证明</span>
                            <span>6.&nbsp;&nbsp;&nbsp;资产证明</span>
                        </div>
                        <div>
                            <span>3.&nbsp;&nbsp;&nbsp;户籍证明</span>
                            <span>7.&nbsp;&nbsp;&nbsp;开户资料</span>
                        </div>
                        <div>
                            <span>4.&nbsp;&nbsp;&nbsp;婚姻证明</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
        <div>
            <input onClick="location.href='/#/apply'" class = "yellowButton" type = "button" value = "去申请"/>
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
        var mesaage = '<span class = "alertSpan">宁波市</span><div class = "alertDiv">鄞州区、海曙区、江北区、北仑区、镇海区、余姚市、慈溪市、奉化市、宁海县、象山县</div><span class = "alertSpan">绍兴市</span><span class = "alertSpan">台州市</span>';
        mui.alert(mesaage, '业务区域', function() {  
        },"div");  
      }
  },
  created(){

  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/elitesLoan.css';
</style>
