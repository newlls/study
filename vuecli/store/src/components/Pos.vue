<template>
    <div class="pos">
        <el-row >
            <el-col :span='7' id="order-list" class="pos-order">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table border style="width: 100%" :data="tableData">
                            <el-table-column prop="goodsName" label="商品"  ></el-table-column>
                            <el-table-column prop="count" label="数量" width="70"></el-table-column>
                            <el-table-column prop="price" label="单价" width="70"></el-table-column>
                            <el-table-column  label="操作" width="100" fixed="right">
                                <template scope="scope">
                                    <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="totalDiv">
                            <small>数量：</small>
                            <strong>{{totalCount}}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                            <small>总计：</small>
                            <strong>{{totalMoney}}</strong> 元
                        </div>
                        <el-button type="warning" >挂单</el-button>
                        <el-button type="danger" @click="delAllGoods">删除</el-button>
                        <el-button type="success" @click="checkout">结账</el-button>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">
                        挂单
                    </el-tab-pane>
                    <el-tab-pane label="外卖">
                        外卖
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <!--商品展示-->
            <el-col :span="17">
                <div class="title">常用商品</div>
                <div class="often-goods-list">
                    <ul>
                        <li v-for="(items,index) in oftenGoods" :key="index+'gl'" @click="addOrderList(items)">
                            <span>{{items.goodsName}}</span>
                            <span class="o-price">{{items.price}}元</span>
                        </li>
                    </ul>
                </div>
                <div class="good-type">
                    <el-tabs>
                        <el-tab-pane label="汉堡">
                           <!-- <ul class='cookList'>
                                <li>
                                    <span class="foodImg"><img src="http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg" width="100%"></span>
                                    <span class="foodName">香辣鸡腿堡</span>
                                    <span class="foodPrice">￥20.00元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                            <ul class='cookList'>
                                <li>
                                    <span class="foodImg"><img src="http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg" width="100%"></span>
                                    <span class="foodName">香辣鸡腿堡</span>
                                    <span class="foodPrice">￥20.00元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            <ul class='cookList'>
                                <li>
                                    <span class="foodImg"><img src="http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg" width="100%"></span>
                                    <span class="foodName">香辣鸡腿堡</span>
                                    <span class="foodPrice">￥20.00元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            <ul class='cookList'>
                                <li>
                                    <span class="foodImg"><img src="http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg" width="100%"></span>
                                    <span class="foodName">香辣鸡腿堡</span>
                                    <span class="foodPrice">￥20.00元</span>
                                </li>
                            </ul>-->
                            <ul class='cookList'>
                                <li v-for="(items,index) in type0Goods" :key="index+'tl'" @click="addOrderList(items)">
                                    <span class="foodImg"><img :src="items.goodsImg" width="100%"></span>
                                    <span class="foodName">{{items.goodsName}}</span>
                                    <span class="foodPrice">{{items.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                            <ul class='cookList'>
                                <li v-for="(items,index) in type0Goods" :key="index+'tl'">
                                    <span class="foodImg"><img :src="items.goodsImg" width="100%"></span>
                                    <span class="foodName">{{items.goodsName}}</span>
                                    <span class="foodPrice">{{items.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            <ul class='cookList'>
                                <li v-for="(items,index) in type0Goods" :key="index+'tl'">
                                    <span class="foodImg"><img :src="items.goodsImg" width="100%"></span>
                                    <span class="foodName">{{items.goodsName}}</span>
                                    <span class="foodPrice">{{items.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            <ul class='cookList'>
                                <li v-for="(items,index) in type0Goods" :key="index+'tl'">
                                    <span class="foodImg"><img :src="items.goodsImg" width="100%"></span>
                                    <span class="foodName">{{items.goodsName}}</span>
                                    <span class="foodPrice">{{items.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>

    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name:'pos',
        data(){
            return{
                tableData:[], //订单列表的值
                //oftenGoods: [],
                oftenGoods:[
                    {
                        goodsId:1,
                        goodsName:'香辣鸡腿堡',
                        price:18
                    }, {
                        goodsId:2,
                        goodsName:'田园鸡腿堡',
                        price:15
                    }, {
                        goodsId:3,
                        goodsName:'和风汉堡',
                        price:15
                    }, {
                        goodsId:4,
                        goodsName:'快乐全家桶',
                        price:80
                    }, {
                        goodsId:5,
                        goodsName:'脆皮炸鸡腿',
                        price:10
                    }, {
                        goodsId:6,
                        goodsName:'魔法鸡块',
                        price:20
                    }, {
                        goodsId:7,
                        goodsName:'可乐大杯',
                        price:10
                    }, {
                        goodsId:8,
                        goodsName:'雪顶咖啡',
                        price:18
                    }, {
                        goodsId:9,
                        goodsName:'大块鸡米花',
                        price:15
                    }, {
                        goodsId:20,
                        goodsName:'香脆鸡柳',
                        price:17
                    }
                ],
                type0Goods:[
                    {
                        goodsId:1,
                        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                        goodsName:'香辣鸡腿堡',
                        price:18
                    }, {
                        goodsId:2,
                        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                        goodsName:'田园鸡腿堡',
                        price:15
                    }, {
                        goodsId:3,
                        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                        goodsName:'和风汉堡',
                        price:15
                    }, {
                        goodsId:4,
                        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                        goodsName:'快乐全家桶',
                        price:80
                    }, {
                        goodsId:5,
                        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                        goodsName:'脆皮炸鸡腿',
                        price:10
                    }, {
                        goodsId:6,
                        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                        goodsName:'魔法鸡块',
                        price:20
                    }, {
                        goodsId:7,
                        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                        goodsName:'可乐大杯',
                        price:10
                    }, {
                        goodsId:8,
                        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                        goodsName:'雪顶咖啡',
                        price:18
                    }, {
                        goodsId:9,
                        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                        goodsName:'大块鸡米花',
                        price:15
                    }, {
                        goodsId:20,
                        goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                        goodsName:'香脆鸡柳',
                        price:17
                    }
                ],
                totalMoney: 0, //订单总价格
                totalCount: 0  //订单商品总数量

                /*tableData: [
                    {
                    goodsName: '可口可乐',
                    price: 8,
                    count:1
                },
                {
                    goodsName: '香辣鸡腿堡',
                    price: 15,
                    count:1
                },
                {
                    goodsName: '爱心薯条',
                    price: 8,
                    count:1
                },
                    {
                    goodsName: '甜筒',
                    price: 8,
                    count:1
                }],

                */
            }
        },
        /*created(){
            axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
                .then(response=>{
                    console.log(response);
                    this.oftenGoods=response.data;
                })
                .catch(error=>{
                    console.log(error);
                    alert('网络错误，不能访问');
                });
        },*/
        mounted(){
            var orderHeight=document.body.clientHeight;
            document.getElementById('order-list').style.height=orderHeight+'px';//设置高度
        },
        methods:{
            //添加订单列表的方法
            addOrderList(goods){
                console.log(goods);
                this.totalCount=0; //汇总数量清0
                this.totalMoney=0;
                let isHave=false;
                //判断是否这个商品已经存在于订单列表
                for (var i=0;i<this.tableData.length;i++){
                    if(this.tableData[i].goodsId==goods.goodsId){
                        isHave=true;
                    }
                }
                if(isHave){//存在就进行数量添加
                    let arr=this.tableData.filter( o => o.goodsId==goods.goodsId);
                    console.log(arr);
                    arr[0].count++;
                }else {//不存在就推入数组
                    let newGoods = { goodsId: goods.goodsId, goodsName: goods.goodsName,
                        price: goods.price, count: 1 };
                    this.tableData.push(newGoods);
                }
                this.getAllMoney();
            },
            //汇总数量和金额
            getAllMoney(){
                this.totalMoney=0;
                this.totalCount=0;
                if(this.tableData){
                    this.tableData.forEach((elment) =>{
                        this.totalCount+=elment.count;
                        this.totalMoney=this.totalMoney+(elment.price*elment.count);
                    })
                }
            },
            //删除单个商品
            delSingleGoods(goods){
                this.tableData=this.tableData.filter( o => o.goodsId!=goods.goodsId);
                this.getAllMoney();
            },
            //删除所有商品
            delAllGoods() {
                this.tableData = [];
                this.totalCount = 0;
                this.totalMoney = 0;
            },
            //结账方法模拟
            checkout(){
                if (this.totalCount!=0){
                    this.tableData=[];
                    this.totalMoney=0;
                    this.totalCount=0;
                    this.$message({
                        message:'结账成功，感谢你又为店里出了一份力!',
                        type: 'success'
                    })
                }else{
                    this.$message.error('不能空结。老板了解你急切的心情！');
                }
            }
        },
    }
</script>
<style scoped>
    .pos {
        font-size: 12px;
    }

    .pos-order {
        background-color: #F9FAFC;
        border-right: 1px solid #C0CCDA;
    }
    .title{
        font-size: 16px;
        height: 18px;
        text-align: left;
        padding: 10px;
        border-bottom: 1px solid #D3DCE6;
        background-color: #F9FAFC;
    }
    .totalDiv{
        background: #fff;
        height: 35px;
        border-bottom: 1px solid #D3DCE6;
        text-align: center;
        line-height: 35px;
        margin-bottom: 5px;
    }
    .often-goods-list ul::after{
        clear: both;
        content: '';
        display: block;
    }
    .often-goods-list ul li{
        list-style: none;
        border: 1px solid #E5E9F2;
        padding: 10px;
        margin: 5px;
        background-color: #fff;
        cursor: pointer;
        float: left;
    }
    .o-price{
        color: #58B7FF;
    }

    .cookList li::after{
        clear: both;
        content: '';
        display: block;
    }
    .cookList li{
        width: 23%;
        border: 1px solid #E5E9F2;
        list-style: none;
        margin: 2px;
        background: #fff;
        padding: 2px;
        cursor: pointer;
        float: left;
    }
    .cookList li span{
        display: block;
        float: left;
    }
    .foodImg{
        width: 40%;
    }
    .foodName {
        font-size: 18px;
        padding-left: 10px;
        color: brown;
    }
    .foodPrice {
        font-size: 16px;
        padding-left: 10px;
        padding-top: 10px;
    }

</style>