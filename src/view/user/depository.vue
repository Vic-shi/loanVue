<template>
<div>
    <div class = "header">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>存管账户</span>
    </div>
    <div class = "swiperDiv">
        <div class = "elitesLoanDiv">
            <span class = "elitesLoanYellowSpan"></span>
            <span class = "elitesLoanLabel">您的银行卡</span>
            <div class="swiper-pagination" slot="pagination"></div>  
        </div>
            <swiper :options="swiperOption"  ref="mySwiper">  
        <!-- 这部分放你要渲染的那些内容 -->  
        <!-- <swiper-slide v-for="item in items">
            <img src = item.img>
        </swiper-slide>   -->
        <swiper-slide>
            <div class = "swiperDiv1">
                <div class = "swiperDiv1Div1">
                    <img src = "static/image/user/bank_logo_ny.png">
                    <span>农业银行</span>
                </div>
                <div class = "swiperDiv1Div2">
                    <span>银行卡号</span>
                    <span>4634 **** **** 0247</span>
                </div>
                <div class = "swiperDiv1Div3">
                    <span>132 **** 7697</span>
                    <span class = "swiperDiv1Div3Right">邓**</span>
                </div>
            </div>
            <div class = "binded">
                <img src = "static/image/user/card_lock.png">
                <span>此卡已绑定</span>                
            </div>
        </swiper-slide>  
        <swiper-slide>
            <div class = "swiperDiv1">
                <div class = "swiperDiv1Div1">
                    <img src = "static/image/user/bank_logo_ny.png">
                    <span>农业银行</span>
                </div>
                <div class = "swiperDiv1Div2">
                    <span>银行卡号</span>
                    <span>4634 **** **** 0247</span>
                </div>
                <div class = "swiperDiv1Div3">
                    <span>132 **** 7697</span>
                    <span class = "swiperDiv1Div3Right">邓**</span>
                </div>
            </div>
        </swiper-slide> 
        <swiper-slide>
            <div class = "swiperDiv1">
                <div class = "swiperDiv1Div1">
                    <img src = "static/image/user/bank_logo_ny.png">
                    <span>农业银行</span>
                </div>
                <div class = "swiperDiv1Div2">
                    <span>银行卡号</span>
                    <span>4634 **** **** 0247</span>
                </div>
                <div class = "swiperDiv1Div3">
                    <span>132 **** 7697</span>
                    <span class = "swiperDiv1Div3Right">邓**</span>
                </div>
            </div>
        </swiper-slide> 
        <swiper-slide>
            <div class = "swiperDiv1">
                <div class = "swiperDiv1Div1">
                    <img src = "static/image/user/bank_logo_ny.png">
                    <span>农业银行</span>
                </div>
                <div class = "swiperDiv1Div2">
                    <span>银行卡号</span>
                    <span>4634 **** **** 0247</span>
                </div>
                <div class = "swiperDiv1Div3">
                    <span>132 **** 7697</span>
                    <span class = "swiperDiv1Div3Right">邓**</span>
                </div>
            </div>
        </swiper-slide> 
        <!-- 这是轮播的小圆点 -->  
    </swiper>  
    </div>
    <div>
        <div class = "addNewBlank">
            <img class = "addNewBlankImg1" src = "static/image/user/card_add.png">
            <span>添加新的银行卡</span>
            <img class = "addNewBlankImg2" src = "static/image/user/Icon_list.png">
        </div>
        <div class = "promptMsg">
            <img src = "static/image/user/card_notice.png">
            <span>Tip:</span>
            <label>存管账户仅支持绑定一张银行卡,换卡点击更换绑定按钮。</label>
        </div>
        <div class = "buttonForChange">
            <div class = "bigBlankDianDiv1">
                <span>更换绑定</span>
                <span class = "bigBlackDian"></span>
            </div>
            <div class = "bigBlankDianDiv2">
                <span>更换手机号</span>
                <span class = "bigBlackDian"></span>
            </div>
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
            slidesPerView: 1.1,
            // centeredSlides: true,
            coverflowEffect: {
              stretch: 50,
              modifier: 2,
              slideShadows : true
            },
            pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
        },
        items : [{img:"static/image/index/indexImg.jpg"},{img:"static/image/index/indexImg.jpg"},{img:"static/image/index/indexImg.jpg"},{img:"static/image/index/indexImg.jpg"}]  
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
    @import '../../../static/css/depository.css';
</style>
