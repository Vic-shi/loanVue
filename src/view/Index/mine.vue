<template>
<div>
<div class = "mineSurround">
    <div class = "mineHeader">
        <img class = "mineHeaderImg" src = "static/image/index/mine_bg.png">
        <img class = "mineHeaderImg1" src = "static/image/index/nav_bill.png">
        <img class = "mineHeaderImg2" src = "static/image/index/nav_news_b.png">
        <div class = "mineHeaderName">
            <span class = "mineHeaderNameSpan1">蔡斌</span>
            <span class = "mineHeaderNameSpan2">186****763</span>
        </div>
    </div>
    <div class = "mineCentral">
        <div class = "mineCentralTop">
            <div class = "mineCentralDiv1">
                <img class = "mineCentralImg1" src = "static/image/index/mine_sqjd_pre.png">
                <span>申请进度</span>
            </div>
            <div class = "mineCentralDiv2">
                <img class = "mineCentralImg1" src = "static/image/index/mine_wyhk_pre.png">
                <span>我要还款</span>
            </div>
        </div>
        <div class = "mineCentralBottom">
            <div>
                <img src = "static/image/index/mine_zhzl.png">
                <span>账户资料</span>
                <img class = "Icon_list" src = "static/image/index/Icon_list.png">
            </div>
            <div>
                <img src = "static/image/index/mine_aboutus.png">
                <span>关于我们</span>
                <img class = "Icon_list" src = "static/image/index/Icon_list.png">
            </div>
            <div>
                <img src = "static/image/index/mine_set.png">
                <span>设置</span>
                <img class = "Icon_list" src = "static/image/index/Icon_list.png">
            </div>
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
            <img src = "static/image/index/tab_icon_money.png">
            <span>借款</span>
        </router-link>
    </div>
    <div>
        <router-link to="/mine">
            <img src = "static/image/index/tab_icon_mine_pre.png">
            <span class = "yellowSpan">我的</span>
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
    /* @import 'static/css/index.css'; */
.mineHeaderImg{
	width:100% !important;
}
.mineHeaderImg1{
	height:20px;
	position: absolute;
    right: 13.4%;
    top: 2.5%;
}
.mineHeaderImg2{
	height:20px;
	position: absolute;
	right: 3.4%;
	top: 2.5%;
}
.mineHeaderName{
    width: 38.7%;
    height: 90px;
    text-align: center;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    background: #FFFFFF;
    box-shadow: 0 4px 14px -4px rgba(0,0,0,0.08);
    border-radius: 12px;
	z-index:999;
	top: 21%;
}
.mineHeaderName>span{
	display:block;
}
.mineHeaderNameSpan1{
	font-family: PingFangSC-Medium;
	font-size: 30px;
	color: #222222;
	letter-spacing: 0;
	line-height: 30px;
	padding-top: 15px;
}
.mineHeaderNameSpan2{
	font-family: PingFangSC-Regular;
	font-size: 16px;
	color: #999999;
	letter-spacing: 0;
	line-height: 16px;
    padding-top: 15px;	
}
.mineCentral{
	margin-top: -25px;
    z-index: 998;
    position: absolute;
    width: 100%;
}
.mineCentralTop>div>span{
	font-family: PingFangSC-Regular;
	font-size: 16px;
	color: #666666;
	letter-spacing: 0;
	line-height: 16px;
	display: block;
	margin-top: 3vw;
}
.mineCentralTop{
	width:100%;
	text-align: center;
	background: #FFFFFF;
	height:180px;
	padding-top: 20vw;
	border-bottom: 1px solid #EAEAEA;
	border-radius:20px;
}
.mineCentralTop>div{
	width: 50%;
    float: left;
}
.mineCentralImg1{
	width:40px;
}
.mineCentralImg2{
	width:34px;
}
.mineCentralDiv1{
	border-right: 1px solid #EAEAEA;
}
.mineCentralBottom>div>img{
	width:24px;
	float: left;
    margin-right: 10px;
}
.mineCentralBottom>div>span{
	font-family: PingFangSC-Regular;
	font-size: 15px;
	color: #222222;
	letter-spacing: 0;
	line-height: 15px;
}
.mineCentralBottom>div{
    margin: 3%;
    border-bottom: 1px solid #EAEAEA;
    padding-top: 3%;
    padding-bottom: 3%;
	padding-left: 1%;
}
.Icon_list{
	width:8px !important;
	float: right !important;
}
</style>
