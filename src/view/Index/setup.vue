<template>
<div>
    <div class = "header">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>设置</span>
    </div>
    <div class = "aboutUsValue">
        <div onClick="location.href='/#/suggest'" class = "aboutUsValueBorder">
            <label>反馈建议</label>
            <img src = "static/image/index/Icon_list.png">
        </div>
        <div class = "aboutUsValueBorder">
            <label>登录密码设置</label>
            <img src = "static/image/index/Icon_list.png">
        </div>
    </div>
    <div class = "aboutUsValue">
        <div class = "aboutUsValueBorder">
            <label class = "logoutLabel">退出登录</label>
        </div>
    </div>
</div>
</template>
<script>
// import axios from 'axios';
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  mounted(){
      $("body")[0].style.backgroundColor = "#f6f6f6";
      var param = {"aaa":11};
        this.$axios.post('/test',param)
      .then(response => {
        this.accounts = response.data.result
        for (var i = 0; i < this.accounts.length; i++) {
          this.accounts[i].id2 = this.accounts[i].id
        }
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    // axios({method:'post',baseURL:'/api',url:'test'})


  },
  watch:{

  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/aboutUs.css';

</style>
