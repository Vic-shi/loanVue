<template>
<div>
    <div class = "header">
      <a  href="#" onclick="javascript:history.back(-1);">
        <img class = "headerImg1" src = "static/image/loan/nav_back_y.png">
      </a>
      <span>关于我们</span>
    </div>
    <div class = "aboutUsValue">
        <div  onClick="location.href='/#/common'" class = "aboutUsValueBorder">
            <label>常见问题</label>
            <img src = "static/image/index/Icon_list.png">
        </div>
        <div class = "aboutUsValueBorder">
            <label>官方微信</label>
            <img src = "static/image/index/Icon_list.png">
            <span>小鸡普惠</span>
        </div>
        <div class = "aboutUsValueBorder">
            <label>客服电话</label>
            <img src = "static/image/index/Icon_list.png">
            <a>400-688-0802</a>
        </div>
        <div>
            <label>版本信息</label>
            <img src = "static/image/index/Icon_list.png">
            <span>v2.0.0</span>
        </div>
        <!-- <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">常见问题</a>
            </li>
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">官方微信</a>
                <label>小鸡普惠</label>
            </li>
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">客服电话</a>
            </li>
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">版本信息</a>
            </li>
        </ul> -->
    </div>

</div>
</template>
<script>

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  mounted(){
      $("body")[0].style.backgroundColor = "#f6f6f6";
  },
  watch:{

  }
}
</script>
<style rel="stylesheet/css" scoped>
    @import '../../../static/css/aboutUs.css';

</style>
