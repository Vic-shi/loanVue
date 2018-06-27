<template>
<div>
    <div class = "header">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>申请进度</span>
    </div>
        <div class = "swiperDiv">
        <div class = "elitesLoanDiv">
            <span class = "elitesLoanYellowSpan"></span>
            <span class = "elitesLoanLabel">您的贷款</span>
            <div class="swiper-pagination" slot="pagination"></div>  
        </div>
            <swiper :options="swiperOption"  ref="mySwiper">  
        <!-- 这部分放你要渲染的那些内容 -->  
        <!-- <swiper-slide v-for="item in items">
            <img src = item.img>
        </swiper-slide>   -->
        <swiper-slide>
          <div >
            <div>
              <span>2018/5/3 12:00</span>
              <span>请签约</span>
              <span>20000.00元</span>
            </div>
          </div>
        </swiper-slide>  
        <swiper-slide>
          <div >
            <div>
              <span>2018/5/3 12:00</span>
              <span>请签约</span>
              <span>20000.00元</span>
            </div>
          </div>
        </swiper-slide> 
        <swiper-slide>
          <div >
            <div>
              <span>2018/5/3 12:00</span>
              <span>请签约</span>
              <span>20000.00元</span>
            </div>
          </div>
        </swiper-slide> 
        <swiper-slide>
          <div >
            <div>
              <span>2018/5/3 12:00</span>
              <span>请签约</span>
              <span>20000.00元</span>
            </div>
          </div>
        </swiper-slide> 
        <!-- 这是轮播的小圆点 -->  
    </swiper>  
    </div>
    <div class = "progressBottom">
      <div class = "progressBottomDiv1">
        <span claas = "progressBottomDiv1Span1">合同编号</span>
        <span class = "progressBottomDiv1Span2">HBSG2018098222</span>
      </div>
      <div class="progressBottomBottom2">
        <span>申请进度</span>
        <table>
          <tr>
            <td>2018/03/13</td>
            <td>申请中</td>
          </tr>
          <tr>
            <td>2018/03/13</td>
            <td>申请中</td>
          </tr>
          <tr>
            <td>2018/03/13</td>
            <td>申请中</td>
          </tr>
          <tr>
            <td>2018/03/13</td>
            <td>申请中</td>
          </tr>
          <tr>
            <td>2018/03/13</td>
            <td>申请中</td>
          </tr>
        </table>
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
            slidesPerView: 1.2,
            centeredSlides: true,
            coverflowEffect: {
              stretch: 50,
              modifier: 2,
              slideShadows : true
            },
            pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          on:{
            slideChangeTransitionEnd: function(){
              //从下标0开始
              alert(this.activeIndex)
            }
          }
        }
    }
  },
  methods: {
    contract(data){
      console.log(data);
    },
      alert(){
        var mesaage = '<div class = "alertDivForApply">我们的业务员会尽快与您联系,您也可以在"我的-申请进度"中查看当前进度。</div>';
        mui.alert(mesaage, '贷款申请已提交', function() {  
        },"div");  
      },
  },
  mounted(){
    this.alert();
    $("body")[0].style.backgroundColor = "#f6f6f6";
  },
  watch:{

  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/progress.css';

</style>
