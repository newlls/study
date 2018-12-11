<template>
    <div>
        <div class="container">
            <!--音乐-->
            <ul>
                <li v-for="(items,index) in dataList" :key="index+'ul'"
                    @click="$router.push('/musicdetail')">
                    <img :src="items.bg"/>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        created(){
            this.$emit('routerchange','music');
            this.getData();
        },
        data(){
            return{
                dataList:[]
            }
        },
        methods:{
            getData(){
                axios.get('./data/musiclist.json')
                    .then((res) =>{
                        this.dataList=res.data.albums;
                    })
                    .catch(() =>{

                    })
            }
        }
    }

</script>
<style scoped>
    ul li{
        width: 50%;
        display: inline-block;
    }
    ul li img{
        width: 100%;
    }
</style>