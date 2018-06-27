<template>
<div>
    <div style = "background-color:#ffffff;">
        <div class="title"></div>
        <div class="mui-card">
            <div class="mui-input-group">
                <div class="vue_input_code">
                    <div class="input" @click="focusInput" >
                        <div class="input-code" :style="{left: left, 'z-index': zIndex}">
                            <template v-if="type==='number'">
                                <input ref="input_code" type="tel" @keyup="inputCodeEvent($event)" @blur="blurInput" v-model="inputCode" autofocus maxlength="1" @keyup.delete="deleteInput">
                            </template>
                            <template v-else>
                                <input ref="input_code" type="text" @keyup="inputCodeEvent($event)" @blur="blurInput" v-model="inputCode" autofocus maxlength="1" @keyup.delete="deleteInput">
                            </template>
                        </div>
                        <span v-for="(item,index) in block" v-text="codeArray[index] ? codeArray[index] : ''"></span>
                    </div>
                </div>
                <div class="tips">请输入您的手机收到的验证码</div>
                <div class="mui-button-row button_reg">
                    <button class="mui-btn mui-btn-primary obtain" v-show="show" @click="getCode">重新获取</button>
                    <button class="mui-btn mui-btn-primary" v-show="!show">重新获取（{{count}}s）</button>
                </div>
            </div>
            <div class="link-area">
                <a href="javascript:;">已有账号·直接登录</a>           
            </div>
        </div>
    </div>
</div>
</template>
<script>
let timer = null;
export default {
    props: {
        code: {
            type: Array,
            default: () => [],
            required: true
        },//接收一个可以改变父组件的数据(引用类型才可以修改,所以这里是引用类型)
        success: {
            type: Function,
            default: (codeString) => {
                console.log("complete");
                console.log(codeString);
            }
        },//用户输入完成后的回调
        error: {
            type: Function,
            default: () => {}
        },//用户输入错误的时候调用的函数
        getInput: {
            type: Function,
            default: () => {}
        },//每次输入都回调
        number: {
            type: Number,
            default: 4,
        },//验证码个数
        type: {
            type: String,
            default: "number",
            validator: (value) => {
                return ['number', 'text'].indexOf(value) > -1;
            }
        },//用户输入类型,有number,text
        upperCase: {
            type: Boolean,
            default: false
        } // 输入的字母是否需要大写
    },
    data() {
        return {
            inputCodeNum: 0, //输入框的位置
            left: "0", //输入框距离左边的距离
            inputCode: "", //单次输入的值
            codeArray: [], //输入的值数组
            blockSize: (100/this.number).toFixed(4), //计算用宽度
            block: [], //存放格子
            zIndex: 10, //输入框层级(开始默认最高)
            show: true,
            count: '',
            timer: null
        }
    },
    created(){
        for(let i = 0;i < this.number; i++){
            this.block.push(i);//获取格子数并保持方便循环
        }
    },
    computed:{
        codeString() {
            let data = "";
            this.codeArray.map(item => {
                data += item;
            });
            return data;
        }
    },
    methods: {
        /** 删除输入 */
        deleteInput() {
            if(this.inputCodeNum === this.number - 1) {
                this.inputCodeNum--;
                this.left = (this.blockSize * this.inputCodeNum) + "%";
                this.codeArray.pop();
                this.code.pop();
                this.getInput(this.codeString);//回调
                return;
            }
            if(this.inputCodeNum !== 0) {
                this.inputCodeNum--;
                this.codeArray.pop();
                this.code.pop();
                this.left = (this.blockSize * this.inputCodeNum) + '%'
                this.getInput(this.codeString);//回调
            }
        },
        /** 每次输入的事件 */
        inputCodeEvent(event) {
            if (!this.inputCode) return;
            if (this.type === "number" && (event.keyCode < 48 || event.keyCode > 57)) {
                // 要求输入数字类型
                if (!this.error(this.inputCode)) {
                    // 没有返回或者返回false就清掉并退出
                    this.inputCode = '';
                    return;
                }
            }
            this.upperCase && (this.inputCode = this.inputCode.toUpperCase());
            if(this.inputCodeNum < this.number-1){
                this.codeArray.push(this.inputCode);
                this.code.push(this.inputCode);
                this.inputCode = '';
                this.inputCodeNum++;
                this.left = (this.blockSize * this.inputCodeNum) + '%';
                this.getInput(this.codeString);//回调
            }
            else{
                if(this.inputCodeNum === this.number - 1){
                    this.inputCodeNum++;
                    this.codeArray.push(this.inputCode);
                    this.code.push(this.inputCode);
                    this.success(this.codeString);//输入完成后回调
                    this.getInput(this.codeString);//回调
                }
            }
        },
        /** 失去焦点 */
        blurInput(){
            this.zIndex = -10;
        },
        /** 获得焦点 */
        focusInput(){
            this.zIndex = 10;
            this.$refs.input_code.focus();
        },
        /** 验证码60s倒计时 */
        getCode(){
            const time_count = 60;
            if (!this.timer) {
                this.count = time_count;
                this.show = false;
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= time_count) {
                        this.count--;
                    } else {
                        this.show = true;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000)
            }
        }
    },
    mounted(){
    
    }
}
</script>
<style rel="stylesheet/css" scoped>
@import '../../../static/css/login.css';
@import '../../../static/css/code.css';
</style>