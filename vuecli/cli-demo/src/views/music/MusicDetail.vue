<template>
    <div>
        <aplayer v-if="isIf" autoplay
                 :music="dataList[0]"
                 :list='dataList'
                 :showLrc='true'
        />
    </div>
</template>
<script>
    import aplayer from 'vue-aplayer'
    export default {
        components:{
            aplayer
        },
        created(){
            this.getData();
        },
        data(){
            return{
                dataList:[],
                isIf:false,
            }
        },
        methods:{
            getData(){
                axios.get('./data/musicdata.json')
                    .then((res) =>{
                        console.log(res);
                        this.dataList=res.data.musicData;
                        this.isIf=true;
                        for(var i=0;i<res.data.musicData.length;i++){
                            this.dataList[i].lrc=location.origin+location.pathname+res.data.musicData[i].lrc;
                        }
                    })
                    .catch(()=>{

                    })
            }
        }

    }
</script>