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

  }
}
</script>
<style rel="stylesheet/css" scoped>
.loadSurround{
	margin-bottom:140px;
}
.loadHeader{
	background: #FFFFFF;
	box-shadow: 0 0 10px 0 rgba(223,223,223,0.50);
	height:100px;
}
.loadHeader>span{
    font-family: PingFangSC-Medium;
    font-size: 30px;
    color: #222222;
    letter-spacing: 0;
    line-height: 30px;
    padding-top: 50px;
    display: block;
    padding-left: 10px;
}
.loanTitle{
	font-family: PingFangSC-Medium;
	font-size: 14px;
	color: #222222;
	letter-spacing: 0;
	padding-top: 3%;
    padding-left: 4%;
    display: block;
}
.companyLoad{
	font-family: PingFangSC-Regular;
	font-size: 13px;
	color: #666666;
	letter-spacing: 0;
	padding-top:3.2%;
	margin:3.2%;
	background: #FFFFFF;
	box-shadow: 0 5px 10px 0 rgba(153,153,153,0.06);
	border-radius: 12px;
}
.companyLoad>div{
    display: inline-block;
	width:93.6%;
	border-bottom: 1px solid #EAEAEA;
	padding-top: 4.4%;
    padding-bottom: 4.4%;
	margin-left: 3.2%;
}
.companyLoadDivNoBoder{
	border-bottom:none !important;
}
.companyLoad>div>img{
	width:50px;
	float: left;
}
.companyLoad>div>div>span{
	display:block;
}
.companyLoad>div>div{
	display:block;
	max-width: 184px;
    float: left;
	margin-left: 3.2%;
	margin-top: 2%;
	line-height: 30px;
}
.companyLoad>div>input{
	background-image: linear-gradient(-90deg, #FCDF07 0%, #FECD15 100%);
	box-shadow: 0 3px 10px 0 rgba(254,206,21,0.60);
	border:none;
	position: absolute;
    right: 8.2%;
	border-radius: 15px;
}

.boldSpan{
	font-family: PingFangSC-Regular;
	font-size: 16px;
	color: #222222;
	letter-spacing: 0;
	line-height: 16px;
}
</style>
