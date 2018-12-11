<template>
    <div class="movie">
        <div class="movie-box">
            <div class="movie-img">
                <img :src="dataList.img"/>
            </div>
            <div class="movie-info">
                <h4>{{dataList.nm}}</h4>
                <p>{{dataList.sc}}</p>
                <p>{{dataList.cat}}</p>
                <p>{{dataList.src}}</p>
                <p>{{dataList.rt}}/</p>
            </div>
            <div class="movie-star">
                <h4>主演</h4>
                <p>{{dataList.star}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        created() {
            this.getData()
        },
        data(){
            return{
                dataList:[]
            }
        },
        methods:{
            getData(){
                axios.get(`./data/moviedetail.json?movieId=${this.$route.params.movieId}`)
                    .then((res)=>{
                        console.log(res);
                        this.dataList=res.data.data.MovieDetailModel;

                    })
                    .catch(()=>{

                    })
            }
        }
    }
</script>
<style scoped>
    .movie{
        padding: 0.5rem;
    }


</style>

