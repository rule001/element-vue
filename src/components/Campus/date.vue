<template>
    <el-row class="box">
        <el-col :span="12">
            <div class="rili-box">
                <div class="rili-top">
                    <img src="../../assets/rili.png" alt="">
                    <div class="text-box">
                    <h4>2019年12月26日</h4>
                    <p>农历腊月 初一</p>
                    <a href="javascript:;">第十六教学周</a>
                    </div>
                </div>
                <div class="rili-bottom">
                    <div class="title-box">
                    <h5>12月份 日程事件</h5>
                    <p><i class="el-icon-circle-plus-outline"></i>添加日程</p>
                    </div>
                    <div class="news-list">
                        <ul>
                        <li v-for="(list,index) in newsList" :key='index'>
                            <span></span>
                            <p>{{list.name}}</p>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="12">
            <el-card class="date-box">
                我是日期选择器
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data(){
        return{
            newsList:[
                {name:'【毕业季】我学与大连市，中科院微电子所三方共建电子系统'},
                {name:'【毕业季】我学与大连市，中科院微电子所三方共建电子系统'},
                {name:'【毕业季】我学与大连市，中科院微电子所三方共建电子系统'},
                {name:'【毕业季】我学与大连市，中科院微电子所三方共建电子系统'},
                {name:'【毕业季】我学与大连市，中科院微电子所三方共建电子系统'}
            ],
        }
    }
}
</script>
<style lang="scss" scoped>
.box{
    height:300px;
    overflow: hidden;
    padding: 20px;
}
// 日历样式
.rili-box{
    .rili-top{
        overflow: hidden;
        img{
        width:100px;
        margin:0 10px 0 0;
        display:inline-block;
        float: left;
        }
        .text-box{
            float:left;
            padding: 10px;
            text-align: left;
            h4{
            font-size:16px;
            font-weight: bold;
            }
            p{
            margin:8px 0;
            }
            a{
            background: #58A6CD;
            padding:5px 10px;
            border-radius: 20px;
            color: #fff;
            }
        }
    }
    .rili-bottom{
        text-align: left;
        margin: 10px 0 0 0;
        .title-box{
            line-height: 25px;
            overflow: hidden;
            margin: 0 0 10px 0;
            h5{
                font-size: 14px;
                font-weight: bold;
                float: left;
            }
            p{
                float:right;
                color: #999;
                font-size: 14px;
                i{
                    margin: 0 5px 0 0;
                }
            }
        }
        .news-list{
            height: 120px;
            overflow-Y:scroll;
            ul{
                list-style: none;
                margin: 0;
                li{
                    overflow: hidden;
                    span{
                        background: #2A79C4;
                        height: 4px;
                        width:4px;
                        display: inline-block;
                        border-radius:4px;
                        float: left;
                        margin:12px 0 0 0;
                    }
                    p{
                        float: left;
                        line-height:30px;
                        display: inline-block;
                        white-space: nowrap; 
                        width:92%; 
                        overflow: hidden;
                        text-overflow:ellipsis;
                    }
                }
            }
        }
        .news-list::-webkit-scrollbar{
            width: 4px;
            background: rgba(0,0,0,0.2);
        }
        .news-list::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: #2A79C4;
        }
    }
}
// 日期样式
.date-box{
    margin: 0 0 0 20px;
}
</style>