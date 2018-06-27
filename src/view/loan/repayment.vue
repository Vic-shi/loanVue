<template>
<div>
    <div class = "header">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>还款</span>
    </div>
    <div>
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
            <a v-show= "activeForA" class="item1ClassActive">
                信息服务费
            </a>
            <a v-show= "!activeForA" v-on:click="test" class="item1Class">
                信息服务费
            </a>
            <a v-show= "activeForA" v-on:click="test" class="item2Class">
                本息还款
            </a>
            <a v-show= "!activeForA" class="item2ClassActive">
                本息还款
            </a>
        </div>
    </div>
    <div class="mui-clearfix">
        <div v-show= "activeForItem" id = "item1" class = "">
            <div class = "repaymentDiv">
                <span>剩余未还</span>
                <span class = "repaymentDivSpan">876.4</span>
            </div>
            <div class = "repaymentDiv2">
                <div class = "repaymentDiv2Li">
                    <div>
                        <li>本金</li>
                        <li class = "noDian">476.4元</li>
                    </div>
                    <div class = "repaymentLongDiv">
                        <li>生命周期服务费</li>
                        <li class = "noDian">476.4元</li>
                    </div>
                    <div>
                        <li>利息</li>
                        <li class = "noDian">476.4元</li>
                    </div>
                    <div>
                        <li>逾期费</li>
                        <li class = "noDian">476.4元</li>
                    </div>
                    <div>
                        <li>应还总额</li>
                        <li class = "noDian">1905.6元</li>
                    </div>
                </div>
            </div>

        </div>
        <div v-show= "!activeForItem" id = "item2" class = "">
            <div class = "repaymentDiv">
                <span>剩余未还</span>
                <span class = "repaymentDivSpan">876.4</span>
            </div>
            <div class = "repaymentDiv2">
                <div class = "repaymentDiv2Li">
                    <div>
                        <li>逾期费</li>
                        <li class = "noDian">476.4元</li>
                    </div>
                    <div class = "repaymentLongDiv">
                        <li>信息费</li>
                        <li class = "noDian">476.4元</li>
                    </div>
                    <div>
                        <li>应还总额</li>
                        <li class = "noDian">476.4元</li>
                    </div>
                </div>

            </div>
        </div>
        <div class = "repaymentDiv2Div">
                    <div @click="count" class = "yellowBorderBlank">
                        <span>还款银行尾号</span>
                        <div class = "blackDianDiv">
                            <span class = "blackDian1"></span>
                            <span class = "blackDian2"></span>
                            <span class = "blackDian3"></span>
                            <span class = "blackDian4"></span>
                            0247
                        </div>
                    </div>
            <span class = "inputBorderTop">设置还款额</span>
            <div class = "inputBorder">
                <input/>
                <label>元</label>                    
            </div>
            <div class = "inputBorderBottom">
                <span>银行卡最高限额3000元,</span>
                <span>若超过限额请更换银行卡获前往PC端充值</span>
            </div>
            <div>
                <input class = "yellowButton" type = "button" value = "还款"/>
        </div>
        </div>
    </div>
    </div>


</div>
</template>
<script>

export default {
  data() {
    return {
        activeForA:true,
        activeForItem:true
    }
  },
  methods: {
      test:function(){
          if(this.activeForA == false){
              this.activeForA = true;
          }else{
              this.activeForA = false;
          }
        if(this.activeForItem == false){
              this.activeForItem = true;
          }else{
              this.activeForItem = false;
          }
      },
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
        var content = '<div class = "alertBlank">'
            +'<div class = "swiperDiv1">'
            +'   <div class = "swiperDiv1Div1">'
            +'        <img src = "static/image/user/bank_logo_ny.png">'
            +'        <span>农业银行</span>'
            +'    </div>'
            +'    <div class = "swiperDiv1Div2">'
            +'        <span>银行卡号</span>'
            +'        <span>4634 **** **** 0247</span>'
            +'    </div>'
            +'    <div class = "swiperDiv1Div3">'
            +'        <span>132 **** 7697</span>'
            +'        <span class = "swiperDiv1Div3Right">邓**</span>'
            +'    </div>'
            +'</div>'
            +'</div>';
        this.$layer.dialog({
            type: 1
            ,content: content
            ,anim: 'up'
            ,btn: ['更换绑定']
            ,style: 'position:fixed; bottom:0; left:0; width: 100%; height: 200px; padding:10px 0; border:none;'
          }).then(function(res){
              console.log("11");
              window.location.href = "/#/depository"
          });
      },
            testLayerClose(){
            var _this = this;
            this.$layer.loading('测试关闭方法');
            setTimeout(function(){
                _this.$layer.close();
            },3000);
        }
  },
  mounted(){
      $("body")[0].style.backgroundColor = "#f6f6f6";
  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/repayment.css';

</style>
