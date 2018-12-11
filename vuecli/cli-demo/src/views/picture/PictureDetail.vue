<template>
    <div>
        <v-touch @swipeleft="onSwipeLeft" @tap="swipetap"
                 @swiperight="onswiperight" class="content" :style="styleobj" tag="div">
        </v-touch>
    </div>
</template>
<script>
    import Vue from 'vue'
    import VueTouch from 'vue-touch'
    Vue.use(VueTouch, {name: 'v-touch'});
    export default {
        created(){
         // this.$emit('routerChange','picture') ;
            if(this.$store.state.nowIndex==-1){
                this.$router.push('/picture');
            }

        },
        data(){
            return{
                nowIn:this.$store.state.nowIndex+1,
                thisLength:this.$store.state.listLenght
            }
        },
        computed:{
            styleobj(){
                return {background:`#000 url('./img/${this.nowIn}.jpg') no-repeat center/contain`}
            }
        },
        methods:{
            onSwipeLeft(){
                this.nowIn++;
                if(this.nowIn==this.thisLength+1){
                    this.nowIn = 1
                }
            },
            swipetap(){
                this.$router.push("/picture")
            },
            onswiperight(){
                this.nowIn--;
                if(this.nowIn==0){
                    this.nowIn = this.thisLength
                }
            }
        },

    }
</script>
<style scoped>
    .content{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
</style>