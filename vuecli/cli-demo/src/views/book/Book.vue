<template>
    <div>
        <div class="container">
            书籍
            <swipe class="my-swipe">
                <swipe-item class="book1"></swipe-item>
                <swipe-item class="book2"></swipe-item>
                <swipe-item class="book3"></swipe-item>
                <swipe-item class="book4"></swipe-item>
                <swipe-item class="book5"></swipe-item>
            </swipe>
        </div>
    </div>
</template>

<script>

    require('vue-swipe/dist/vue-swipe.css');//引css
    import { Swipe, SwipeItem } from 'vue-swipe';//引用组件
    export default {
        created(){
            this.$emit('routerchange','book')
        },
        components:{    //注册组件
            swipe:Swipe,
            'swipe-item':SwipeItem,
        },
        data(){
            return{

            }
        },
        methods:{

        }
    }

</script>
<style>
    .my-swipe {
        height: 200px;
        font-size:30px;
        text-align:center;
    }

    .book1 {
        background: url("../../../public/img/book1.jpg") no-repeat center/cover;
                        /*css中要写绝对路径  center表示background：position，center*/
    }

    .book2 {
        background: url("../../../public/img/book2.jpg") no-repeat center/cover;
    }

    .book3 {
        background: url("../../../public/img/book3.jpg") no-repeat center/cover;
    }
    .book4 {
        background: url("../../../public/img/book4.jpg") no-repeat center/cover;
    }
    .book5 {
        background: url("../../../public/img/book5.jpg") no-repeat center/cover;
    }

</style>