<template>
<div>
    <div class = "header">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>通知</span>
    </div>
    <div class = "swiperDiv">
            <swiper :options="swiperOption"  ref="mySwiper">  
        <!-- 这部分放你要渲染的那些内容 -->  
        <!-- <swiper-slide v-for="item in items">
            <img src = item.img>
        </swiper-slide>   -->
        <swiper-slide>
            <img src = "static/image/notice/news_banner.png">
        </swiper-slide>  
        <swiper-slide>
            <img src = "static/image/notice/news_banner.png">
        </swiper-slide> 
        <swiper-slide>
            <img src = "static/image/notice/news_banner.png">
        </swiper-slide> 
        <swiper-slide>
            <img src = "static/image/notice/news_banner.png">
        </swiper-slide> 
        <!-- 这是轮播的小圆点 -->  
        <div class="swiper-pagination" slot="pagination"></div>  
    </swiper>  
    </div>
    <div>
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
            <a class="mui-control-item mui-active" href="#item1">
                借款消息
            </a>
            <a class="mui-control-item" href="#item2">
                还款消息
            </a>
            <a class="mui-control-item" href="#item3">
                系统消息
            </a>
        </div>
    </div>
    <div class="mui-clearfix">
        <div id = "item1" class = "mui-control-content mui-active">
            <div>
                <img src = "static/image/notice/news_icon_system.png">
                <div>
                    <span>系统消息</span>
                    <label>您的登录密码已修改</label>
                </div>
                <div class = "mui-clearfixDiv2">
                    <label>2018/12/12</label>
                    <label>21:00:01</label>
                </div>
            </div>
            <div onClick="location.href='/#/loanApplication'">
                <img src = "static/image/notice/news_icon_money.png">
                <div>
                    <span>借款/还款消息</span>
                    <label>您的登录密码已修改</label>
                </div>
                <div class = "mui-clearfixDiv2">
                    <label>2018/12/12</label>
                    <label>21:00:01</label>
                </div>
            </div>
            <div>
                <img src = "static/image/notice/news_icon_system.png">
                <div>
                    <span>系统消息</span>
                    <label>您的登录密码已修改</label>
                </div>
                <div class = "mui-clearfixDiv2">
                    <label>2018/12/12</label>
                    <label>21:00:01</label>
                </div>
            </div>
        </div>
        <div id = "item2" class = "mui-control-content"></div>
        <div id = "item3" class = "mui-control-content"></div>
    </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
        swiperOption: {  
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
            // effect : 'coverflow',
            slidesPerView: 1.4,
            freeMode : true,
            // centeredSlides: true,
            coverflowEffect: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true}
        },
        items : [{img:"static/image/index/indexImg.jpg"},{img:"static/image/index/indexImg.jpg"},{img:"static/image/index/indexImg.jpg"},{img:"static/image/index/indexImg.jpg"}]  
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
    @import '../../../static/css/notice.css';
</style>
