<template>
    <div class="left-nav">
        <ul>
            <li>
                <i class="icon iconfont icon-propertysafety"></i>
                <div>收银</div>
            </li>
            <li>
                <i class="icon iconfont icon-lv_zuanshi"></i>
                <div>店铺</div>
            </li>
            <li>
                <i class="icon iconfont icon-hanbao"></i>
                <div>商品</div>
            </li>
            <li>
                <i class="icon iconfont icon-huiyuanqia"></i>
                <div>会员</div>
            </li><li>
            <i class="icon iconfont icon-shopping"></i>
            <div>抢购</div>
        </li>
            <li>
                <i class="icon iconfont icon-setting"></i>
                <div>统计</div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .left-nav{
        width: 5%;
        float: left;
        background:#1D8ce0;
        font-size: 10px;
        color: #fff;
        height: 100%;
    }
    .left-nav ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .left-nav ul li{
        border-bottom: 1px solid #20a0ff;
        padding: 10px;
        text-align: center;
    }
    .iconfont{
        font-size: 24px;
    }
</style>
