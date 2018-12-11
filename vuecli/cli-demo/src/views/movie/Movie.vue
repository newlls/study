<template>
    <div>
        <div class="container">
            <!--电影-->
            <ul>
                <li v-for="(items,index) in dataList" :key="index+'ml'"
                    @click="$router.push({name:'moviedetail',params:{id:items.id}})">
                    <!--{{items.title}}-->
                    <div>
                        <img :src="items.images.small" alt=""/>
                    </div>
                    <div>
                        <h3>{{items.title}}</h3>
                        <span v-for="(items,index) in items.casts" :key="index+'mc'">{{items.name}}/</span>
                        <p>{{items.collect_count}}人已观看</p>
                        <p>年份{{items.year}}</p>
                        <span v-for="(items,index) in items.genres" :key="index+'mg'">{{items}}/</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="loading" v-show="!isFinish">
            <div class="loading-content">
                <img src="@/assets/loading.gif" alt="">
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        created(){
            this.$emit('routerchange','movie');
            this.getData();
        },
        data(){
            return{
                dataList:[],
                isFinish:true,
            }
        },
        methods:{
            getData(){
                this.isFinish=false;
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters?start='+this.dataList.length+'&count=10')
                    .then((res) =>{
                        this.dataList=this.dataList.concat(res.data.subjects);
                        this.isFinish=true;
                    })
                    .catch(() =>{

                    });

            }
        },
        mounted(){
            window.onscroll=()=>{
                let cHeight=document.documentElement.clientHeight;//可视高度
                let sHeight=document.documentElement.scrollHeight;//滚动高度
                let sTop=document.documentElement.scrollTop;
                if(sTop+cHeight==sHeight){
                    if(this.isFinish){
                        this.getData();
                    }
                }
            }
        }
    }

</script>
<style scoped>
    ul{
        padding: 0 .2rem;
    }
    li{
        display: flex;
        padding: .5rem 0;
        border-bottom: 1px solid #ccc;
    }
   ul li div{
        width: 0;
    }
    li div:nth-child(1){
        flex-grow: 1;
    }
    li div:nth-child(2){
        flex-grow: 2;
        padding-left: .3rem;
    }
    .loading{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        background: rgba(0,0,0,.5);
    }
    .loading-content{
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%,-50%);
        background: rgba(255,255,255,.5);
        border-radius: .1rem;
        padding: 1rem;
    }
    .loading-content img{
        height: 1rem;
    }
</style>