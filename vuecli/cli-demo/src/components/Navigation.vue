<template>
    <div :class="active">
        <header>
            <div @click="routerPush({name:'movie',title:'电影',id:'1',path:'/'})">首页</div>
            <h3>{{title}}</h3>
        </header>
        <nav>
            <ul>
                <!--<li>电影</li>
                <li>音乐</li>
                <li>书籍</li>
                <li>图片</li>-->
                <li v-for="(items,index) in navList" :key="index+'nl'"
                    @click="routerPush(items)" :class="{'nav-active':active==items.name}">
                    {{items.title}}
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                active:"movie",
                title:'电影',
                navList:[
                    {
                        name:'movie',
                        title:'电影',
                        id:'1',
                        path:'/'
                    },
                    {
                        name:'music',
                        title:'音乐',
                        id:'2',
                        path:'/music'
                    },
                    {
                        name:'book',
                        title:'图书',
                        id:'3',
                        path:'/book'
                    },
                    {
                        name:'picture',
                        title:'图片',
                        id:'4',
                        path:'/picture'
                    }
                ]
            }
        },
        methods:{
            routerPush(obj){
                this.$router.push(obj.path);
                this.title=obj.title;
                this.active=obj.name;
            }
        },
        props: ['movieTitle'],
        mounted() {
            this.$nextTick(function () {
                this.navList.forEach(val => {
                    if(val.name == this.movieTitle){
                        this.active = val.name;
                        this.title = val.title;
                    }
                });
            })
        }

    }
</script>
<style scoped>
    header,nav{
        position: fixed;
        height: 1rem;
        background-color: rgb(121, 85, 72);
        color: #fff;
        width: 100%;
    }
    header{
        top: 0;
    }
    header div{
        line-height: 1rem;
        margin-left: .2rem;
    }
    header h3{
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        position: absolute;
    }
    nav{
        bottom: 0;
    }
    nav ul{
        display: flex;
    }
    nav li{
        float: left;
        flex-grow: 1;
        line-height: 1rem;
        text-align: center;
        color: #ccc;
    }
    .nav-active{
        color: #fff;
    }
    .movie header,.movie nav{
        background-color: rgb(33, 150, 243);
    }
    .music header,.music nav{
        background-color: rgb(0, 150, 136);
    }
    .book header,.book nav{
        background-color: rgb(121, 85, 72);
    }
    .picture header,.picture nav{
        background-color: rgb(63, 81, 181);
    }
</style>