<template>
<div>
    <div style = "background-color:#ffffff;">
    <!-- <div class="mui-slider">
        <div class="mui-slider-group">
            <div class="mui-slider-item">
                <img src = "static/image/index/indexImg.jpg">
            </div>
            <div class="mui-slider-item">
                <img src = "static/image/index/indexImg.jpg">
            </div>
            <div class="mui-slider-item">
                <img src = "static/image/index/indexImg.jpg">
            </div>
            <div class="mui-slider-item">
                <img src = "static/image/index/indexImg.jpg">
            </div>
        </div>
        <div class="mui-slider-indicator">  
            <div class="mui-indicator mui-active"></div>  
            <div class="mui-indicator"></div>  
            <div class="mui-indicator"></div>  
            <div class="mui-indicator"></div>  
        </div>  
    </div> -->
    <swiper :options="swiperOption"  ref="mySwiper">  
        <!-- 这部分放你要渲染的那些内容 -->  
        <!-- <swiper-slide v-for="item in items">
            <img src = item.img>
        </swiper-slide>   -->
        <swiper-slide>
            <img src = "static/image/index/indexImg.jpg">
        </swiper-slide>  
        <swiper-slide>
            <img src = "static/image/index/indexImg.jpg">
        </swiper-slide> 
        <swiper-slide>
            <img src = "static/image/index/indexImg.jpg">
        </swiper-slide> 
        <swiper-slide>
            <img src = "static/image/index/indexImg.jpg">
        </swiper-slide> 
        <!-- 这是轮播的小圆点 -->  
        <div class="swiper-pagination" slot="pagination"></div>  
    </swiper>  
    <div class = "imgForRightShort">
        <img src = "static/image/index/nav_news_pre.png">
    </div>
    <div class="hotRecommend">
        <img class = "hotRecommendImgTopLeft" src = "static/image/index/home_title_left.png">
        <span>热门推荐</span>
        <img class = "hotRecommendImgTopRight" src = "static/image/index/home_title_right.png">
    </div>
    <div class = "imgDiv">
        <div class = "indexImg" onClick="location.href='/#/elitesLoan'">
            <img src = "static/image/index/product_icon_jyfrd.png">
            <span class = "imgSpan1">精英法人贷</span>
            <span class = "imgSpan2">20-100万</span>
            <span class = "imgSpan3">在申请地经营满2年</span>
        </div>
        <div class = "indexImg">
            <img src = "static/image/index/product_icon_xzd.png">
            <span class = "imgSpan1">薪资贷</span>
            <span class = "imgSpan2">1-5万</span>
            <span class = "imgSpan3">在申请地居住满6个月</span>            
        </div>
    </div>
    <div class="hotRecommend2">
        <span class = "hotRecommendSpan">所有借贷</span>
        <img class = "hotRecommendImgBottom" src = "static/image/index/home_btn_more.png">
    </div>
    <div class = "borderDiv"></div>
    <div>
        <img class = "bottomImg" src = "static/image/index/home_prbg.png">
    </div>
</div>
<input @click="aaa()" class = "wshishi" style = "position: fixed;top: 100px;z-index: 999;" type = "text" v-model = "sss">
<div class = "fotter">
    <div>
        <router-link to="/">
            <img src = "static/image/index/tab_icon_home_pre.png">
            <span class = "yellowSpan">首页</span>
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
            <img src = "static/image/index/tab_icon_mine.png">
            <span>我的</span>
        </router-link>
    </div>
</div>
</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'  
import 'swiper/dist/css/swiper.min.css';
export default {
  data() {
    return {
        swiperOption: {  
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
        notNextTick: true,  
        pagination: '.swiper-pagination',  
        slidesPerView: 'auto',  
        centeredSlides: true,  
        paginationClickable: true,  
        spaceBetween: 30,  
            onSlideChangeEnd: swiper => {  
                //这个位置放swiper的回调方法  
                this.page = swiper.realIndex+1;  
                this.index = swiper.realIndex;  
            }  
        },
        items : [{img:"static/image/index/indexImg.jpg"},{img:"static/image/index/indexImg.jpg"},{img:"static/image/index/indexImg.jpg"},{img:"static/image/index/indexImg.jpg"}]  
    }
  },
  methods: {
      aaa(){
          console.log($(".wshishi")[0]);
      }
  },
  watch:{
      sss:function(val){
          console.log("11");
          $(".wshishi")[0]
      }
  },
  mounted(){
    //   var item2Show = false,item3Show = false;
    //   document.querySelector('.mui-slider').addEventListener('slide', function(event) {
    //     if (event.detail.slideNumber === 1&&!item2Show) {
    //         //切换到第二个选项卡
    //         //根据具体业务，动态获得第二个选项卡内容；
    //         //显示内容
    //         // document.getElementById("item2").innerHTML = content;
    //         //改变标志位，下次直接显示
    //         item2Show = true;
    //     } else if (event.detail.slideNumber === 2&&!item3Show) {
    //         //切换到第三个选项卡
    //         //根据具体业务，动态获得第三个选项卡内容；
    //         //显示内容
    //         // document.getElementById("item3").innerHTML = content;
    //         //改变标志位，下次直接显示
    //         item3Show = true;
    //     }
    //     });
  }
}
</script>
<style rel="stylesheet/scss" scoped>
    @import '../../../static/css/index.css';
    .swiper-slide{
        /* width: 100vw; */
    }
    .swiper-slide>img{
        width: 100%;
    }
    .mui-indicator{
	width: 10px !important;
	height: 2px !important;
	border-radius:0 !important;
}
.hotRecommend{
	font-size: 15px;
    text-align: center;
    margin-top: 2.4%;
	margin-bottom: 2.4%;
    color: #666666;
}
.hotRecommend2{
	font-size: 15px;
    text-align: center;
    margin-top: 3.4%;
	margin-bottom: 3.4%;
    color: #666666;
}
.hotRecommendImgBottom{
	width:16px;
	position: absolute;
    margin-top: 2px;
    margin-left: 5px;
}
.hotRecommendImgTopLeft{
	width:10px;
	position: absolute;
    margin-top: 5px;
    margin-left: -5.2%;
}
.hotRecommendImgTopRight{
	width:10px;
	position: absolute;
    margin-top: 5px;
    margin-left: 2.2%;
}
.hotRecommendSpan{
	margin-left: -12px;
}
.indexImg{
	width:45.5%;
	float:left;
	text-align:center;
	margin-left:3%;
	background: #FFFFFF;
	box-shadow: 0 0 13px 0 rgba(170,170,170,0.17);
	border-radius: 12px;
	padding-top:5%;
	padding-bottom:2%;
}
.indexImg>img{
	width:50px;
}
.indexImg>span{
	display:block;
	padding-top:4%;
	padding-bottom:4%;
}
.imgSpan1{
	font-size:16px;
	color:#222222;
}
.imgSpan2{
	font-size:14px;
	background: rgba(251,195,55,0.16);
	border: 0 solid rgba(251,195,55,0.36);
	border-radius: 8px;
	font-size: 14px;
	color: #FBC02D;
	letter-spacing: 0;
	line-height: 14px;
	width:40%;
	margin:auto;
}
.imgSpan3{
	font-size:13px;
}
.imgDiv{
	min-height:180px;
}
.borderDiv{
	height:12px;
	width:100vw;
	background-color:#f2f2f2;
}
.bottomImg{
	width:100vw;
}
.fotter{
	height:50px;
	width:100%;
	background: #FFFFFF;
	border: 0 solid #EAEAEA;
	position: fixed;
    bottom: 0;
}
.fotter>div>a>img{
	width:22px;
}
.fotter>div{
	width:33%;
	float:left;
	text-align:center;
	padding-top: 1.2%;
}
.fotter>div>a>span{
	display:block;
	font-family: PingFangSC-Regular;
	font-size: 10px;
	color: #999999;
	letter-spacing: 0.25px;
	line-height: 10px;
}
.yellowSpan{
	color: #FECE15 !important;
}
.imgForRightShort{
	position: absolute;
    height: 20px;
	top: 3%;
	right:0;
    z-index: 999;
	width:12.8%;
	height:34px;
	background-image: linear-gradient(-90deg, #FCDF07 0%, #FECD15 100%);
    padding-top: 4px;
    padding-left: 13px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}
.imgForRightShort>img{
	height: 25px;
    z-index: 999;
}
</style>
