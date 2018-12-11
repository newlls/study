<template>
    <div>
        <div >
            <ul>
                <li @click="goDetail(index)"
                    v-for="(items,index) in pictureList" :key="index+'pl'">
                    <img :src="items.src" alt=""/>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import VueTouch from 'vue-touch'
    Vue.use(VueTouch,{name: 'v-touch'});
    import axios from 'axios';
    export default {
        created(){
            this.$emit('routerchange','picture');
            this.getPicture();
        },
        data(){
            return{
                pictureList:[],
            }
        },
        methods:{
            getPicture(){
                axios('./data/photodata.json')
                    .then((res)=>{
                        this.pictureList=res.data.photoData;
                    })
                    .catch(()=>{

                    })
            },
            goDetail(index){
                this.$store.commit('changIndex',index);
                this.$store.commit('changLength',this.pictureList.length);
                this.$router.push('/picturedetail')
            },
        }
    }

</script>
<style scoped>
    ul li{
        float: left;
        width: 50%;
    }
    img{
        height: 125px;
        width: 100%;
    }
</style>