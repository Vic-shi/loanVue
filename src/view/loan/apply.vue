<template>
<div>
    <div class = "header">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>提交申请</span>
      <img @click="alert()" class = "headerImg2" src = "static/image/loan/card_notice.png">
    </div>
    <div>
      <div class = "MoneyChange">
          <span>借款金额</span>
          <div>
            <input class = "MoneyChangeInput" type = "number" v-model= "showMoney" ref = "showMoney"/>
            <a>元</a>
            <label>最高30万</label>
            <input type = "range" class="single-slider" v-model = "range" ref = "range"/>
          </div>
      </div>
    </div>
      <div class = "showMeg">
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
            <a class="mui-control-item mui-active">
                1<br>
                个月
            </a>
            <a class="mui-control-item">
                3<br>
                个月
            </a>
            <a class="mui-control-item">
                6<br>
                个月
            </a>
            <a class="mui-control-item">
                12<br>
                个月
            </a>
        </div>
    </div>
    <div class="mui-clearfix">
        <div id = "item1">
          <div>
            <li>还款方式</li>
            <li class = "noLi">等额本息</li>
          </div>
          <div>
            <li>借款金额</li>
            <li class = "noLi">10-100万</li>
          </div>
          <div>
            <li>借款期限</li>
            <li class = "noLi">6-12个月</li>
          </div>
        </div>
    </div>
    </div>
        <div class = "allButton">
            <input @click="count()" class = "yellowBorderButton" type = "button" value = "计算还款信息"/>
            <input onClick="location.href='/#/progress'" class = "yellowButton" type = "button" value = "提交申请"/>
        </div>

        <!-- <div style = "text-align:center;width:93vw;border-radius: 12px;background: #FFFFFF;">
          <div>
            <div style = "height:24vw;border-bottom:1px solid #ccc;">
                <div style = "border-right:1px solid #ccc; width: 45vw;float: left;"><span style = "display: block;">应还总额</span><span>164605.45元</span></div>
                <div style = "width: 45vw;float: left;"><span style = "display: block;">3个月每月应还</span><span>60523.56元</span></div>
            </div>
            <span style = "display:inline-block;text-align:left;">共3期,支持提前还款</span>
            <table style = "width:90vw;margin-left:5vw;">
              <tr>
                <th>每月还款日</th>
                <th>每月还款额</th>
                <th>期数</th>
              </tr>
              <tr>
                <td>2018/03/13</td>
                <td>334.32元</td>
                <td>1/3</td>
              </tr>
              <tr>
                <td>2018/03/13</td>
                <td>334.32元</td>
                <td>2/3</td>
              </tr>
              <tr>
                <td>2018/03/13</td>
                <td>334.32元</td>
                <td>3/3</td>
              </tr>
            </table>
          </div>
          <div><img style = "width:36px;" src = "static/image/notice/btn_close.png"></div>
        </div> -->
</div>
</template>
<script>
// import $ from '../../../static/rangeslider/jquery.min.js';
import '../../../static/rangeslider/rangeslider.min.js';

export default {
  data() {
    return {
      range : 50,
      showMoney : 150000
    }
  },
  methods: {
      alert(){
        var mesaage = '<span class = "alertSpan">本次申请仅为意向申请,实际息费以后续合同为准。</span><div class = "alertDivForApply"><span>请准备以下证件以及配合快速放款:</span><li>身份证原件</li><li>银行征信报告</li><li>营业执照副本</li></div>';
        mui.alert(mesaage, '申请需知', function() {  
        },"div");  
      },
      count(){
        // var contetn = '';
        // var meg = {  type: 1,
        //           title: false,
        //           closeBtn: 0,
        //           shadeClose: true,
        //           skin: 'yourclass',
        //           content: '自定义HTML内容'}
        // this.$layer.alert(1,false,'自定义HTML内容');
        var contetn = '        <div class = "alertHtml">'
          +'<div>'
            +' <div class = "alertHtmlHeader">'
              +'   <div class = "alertHtmlHeader1"><span>应还总额</span><span class = "alertHtmlMoney">164605.45元</span></div>'
            +'     <div><span>3个月每月应还</span><span class = "alertHtmlMoney">60523.56元</span></div>'
           +'  </div>'
            +' <span class = "alertHtmlSpan">共3期,支持提前还款</span>'
             +'<table class = "alertTable">'
            +'   <tr>'
             +'    <th>每月还款日</th>'
             +'    <th>每月还款额</th>'
             +'    <th>期数</th>'
             +'  </tr>'
             +'  <tr>'
             +'    <td>2018/03/13</td>'
             +'    <td>334.32元</td>'
             +'    <td>1/3</td>'
             +'  </tr>'
             +'  <tr>'
             +'    <td>2018/03/13</td>'
             +'    <td>334.32元</td>'
             +'  <td>2/3</td>'
             +'  </tr>'
             +'  <tr>'
             +'    <td>2018/03/13</td>'
             +'    <td>334.32元</td>'
             +'    <td>3/3</td>'
             +'  </tr>'
             +'</table>'
            +' </div>'
           +'<div><img @click = "closeAlert()" src = "static/image/notice/btn_close.png"></div>'
         +'</div>';
        this.$layer.open({
            type: 1
            ,content: contetn
            ,anim: 'up'
            ,style: 'position:fixed; bottom:0; left:0; width: 100%; height: 200px; padding:10px 0; border:none;'
          });
      },
      closeAlert(){
        var index = parent.layer.getFrameIndex(window.name); 
        parent.layer.close(index);
      }
  },
  mounted(){
    // $('input[type="range"]').rangeslider();
    // $('input[type="range"]').rangeslider('destroy');
    //  $('input[type="range"]').rangeslider('update', true);
    // $('.single-slider').jRange({
    //     from: 0,//开始于
    //     to: 300000,//结束于
    //     step: 10000,//一次滑动多少
    //     scale: [0,50000,100000,150000,200000,250000,300000],//分割点
    //     format: '%s',//格式化格式
    //     width: 300,//宽度
    //     showLabels: true,
    //     showScale: true
    // });
    $('input[type="range"]').rangeslider({

    // Feature detection the default is `true`.
    // Set this to `false` if you want to use
    // the polyfill also in Browsers which support
    // the native <input type="range"> element.
    polyfill: true,

    // Default CSS classes
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    verticalClass: 'rangeslider--vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    // Callback function
    onInit: function() {},

    // Callback function
    onSlide: function(position, value) {},

    // Callback function
    onSlideEnd: function(position, value) {}
});
    // $('.range-slider').jRange({
    //     from: 0,
    //     to: 100,
    //     step: 1,
    //     scale: [0,25,50,75,100],
    //     format: '%s',
    //     width: 300,
    //     showLabels: true,
    //     isRange : true//是否显示区间
    // });
  },
  watch:{
    range:function(){
      // console.log(this.$refs.range.value);
      this.$refs.showMoney.value = this.$refs.range.value*3000;
      this.showMoney = this.$refs.range.value*3000;
    },
    showMoney:function(){
      var money = this.$refs.showMoney.value;
      if(parseInt(money)>300000){
        this.$refs.showMoney.value = 300000;
        this.showMoney = 300000;
      }else{
        this.range = money/3000;
        this.$refs.range.value = money/3000;
      }
    }
  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/apply.css';
    @import '../../../static/rangeslider/rangeslider.css';

</style>
