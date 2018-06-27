<template>
<div>
<div class = "mineSurround">
    <div class = "mineHeader">
        <img class = "mineHeaderImg" src = "static/image/index/mine_bg.png">
        <img onClick="location.href='/#/record'" class = "mineHeaderImg1" src = "static/image/index/nav_bill.png">
        <img onClick="location.href='/#/notice'" class = "mineHeaderImg2" src = "static/image/index/nav_news_b.png">
        <div v-show="showLogin" class = "mineHeaderName">
            <span class = "mineHeaderNameSpan1">蔡斌</span>
            <span class = "mineHeaderNameSpan2">186****763</span>
        </div>
        <div v-show="!showLogin" class = "mineHeaderName">
            <span class="loginOrRegister">登录/注册</span>
        </div>
    </div>
    <div class = "mineCentral">
        <div class = "mineCentralTop">
            <div onClick="location.href='/#/progress'" class = "mineCentralDiv1">
                <img v-show = "showMine_sqid" class = "mineCentralImg1" src = "static/image/index/mine_sqjd_pre.png">
                <img v-show = "!showMine_sqid" class = "mineCentralImg1" src = "static/image/index/mine_sqjd.png">
                <span>申请进度</span>
            </div>
            <div onClick="location.href='/#/detailed'" class = "mineCentralDiv2">
                <img v-show = "showMine_wyhk" class = "mineCentralImg1" src = "static/image/index/mine_wyhk_pre.png">
                <img v-show = "!showMine_wyhk" class = "mineCentralImg1" src = "static/image/index/mine_sqjd.png">
                <span>我要还款</span>
            </div>
        </div>
        <div class = "mineCentralBottom">
            <div onClick="location.href='/#/account'" >
                <img src = "static/image/index/mine_zhzl.png">
                <span>账户资料</span>
                <img class = "Icon_list" src = "static/image/index/Icon_list.png">
            </div>
            <div onClick="location.href='/#/aboutUs'">
                <img src = "static/image/index/mine_aboutus.png">
                <span>关于我们</span>
                <img class = "Icon_list" src = "static/image/index/Icon_list.png">
            </div>
            <div onClick="location.href='/#/setup'">
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
        showMine_sqid:false,
        showMine_wyhk:true,
        showLogin:false
    }
  },
  methods: {

  },
  created(){
      $("body")[0].style.backgroundColor = "#ffffff";
  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/mine.css';
</style>
