<template>
<div>
    <div style = "background-color:#ffffff;">
        <div class="title"></div>
        <div class="mui-card">
            <div class="mui-input-group">
                <span class="input input--hoshi">
                    <input class="input__field input__field--hoshi" type="text" id="mobile" name="mobile" maxlength="11" @focus="showClear()" @blur="hideClear()"/>
                    <label class="input__label input__label--hoshi">
                        <span class="input__label-content input__label-content--hoshi">手机号</span>
                    </label>
                    <span class="clear" id="input_clear" v-on:click="clear()"></span>
                </span>
                <span class="input input--hoshi">
                    <input class="input__field input__field--hoshi" type="password" id="password" name="password" />
                    <label class="input__label input__label--hoshi">
                        <span class="input__label-content input__label-content--hoshi">密码</span>
                    </label>
                    <span class="eyes-close" id="showText" v-on:click="visible()"></span>
                </span>
                <div class="mui-button-row">
                    <button class="mui-btn mui-btn-primary">登录</button>
                </div>
            </div>
            <div class="link-area">
                <a href="javascript:;">忘记密码</a>
                <a href="javascript:;">注册账号</a>             
            </div>
        </div>
    </div>
</div>
</template>
<script>
/*import '../../../static/js/classie.js';*/
export default {
  data() {
    return {

    }
  },
  methods: {
    visible: function () {
        if($("#password").attr("type") == "password"){
            $("#password").attr("type","text");
            $("#showText").removeClass("eyes-close");
            $("#showText").addClass("eyes-open");
        }else{
            $("#password").attr("type","password");
            $("#showText").removeClass("eyes-open");
            $("#showText").addClass("eyes-close");
        }
        return false;
    },
    showClear: function () {
        $("#input_clear").show();
    },
    hideClear: function () {
        if($("#mobile").val() == ''){
            $("#input_clear").hide();
        }
    },
    clear: function () { 
        $("#mobile").val('');    
        $("#input_clear").hide();    
    }
  },
  mounted(){
    
  }
}
</script>
<style rel="stylesheet/css" scoped>
@import '../../../static/css/login.css';
</style>