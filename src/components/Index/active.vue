<template>
    <div class="card" style="margin:20px 0 0 0">
        <div class="card-header">
            <h5>活动中心</h5>
            <span>...</span>
        </div>
        <div class="card-body">
            <div class="card-item">
                <div class="card-item-h">
                    <span class="active">热门活动</span>
                    <span>我关注的人的活动</span>
                </div>
                <div class="card-item-body">
                    <div class="list-box">
                        <div class="list-item-box">
                            <span class="img-box">
                                <img src="../../assets/source.png" alt="">
                            </span>
                            <div class="text-box">
                                <h5>投票选出您心目中的...</h5>
                                <p class="t1"><i class="el-icon-user-solid"></i>校园杂志社</p>
                                <p class="t1">2019-08-19 12:30</p>
                                <p class="t2">
                                    <span class="btn0"><i class="el-icon-video-camera"></i></span>
                                     <span class='btn' @click="getMethod()" :class="title?'':'active'">{{title?'未参加':'已参加'}}</span>
                                </p>
                            </div>
                        </div>
                        <div class="list-item-box">
                            <span class="img-box">
                                <img src="../../assets/source.png" alt="">
                            </span>
                            <div class="text-box">
                                <h5>投票选出您心目中的...</h5>
                                <p class="t1"><i class="el-icon-user-solid"></i>校园杂志社</p>
                                <p class="t1">2019-08-19 12:30</p>
                                <p class="t2">
                                    <span class="btn0"><i class="el-icon-video-camera"></i></span>
                                    <span class='btn' @click="getMethod()" :class="title?'':'active'">{{title?'未参加':'已参加'}}</span>
                                </p>
                            </div>
                        </div>
                        <div class="list-item-box">
                            <span class="img-box">
                                <img src="../../assets/source.png" alt="">
                            </span>
                            <div class="text-box">
                                <h5>投票选出您心目中的...</h5>
                                <p class="t1"><i class="el-icon-user-solid"></i>校园杂志社</p>
                                <p class="t1">2019-08-19 12:30</p>
                                <p class="t2">
                                    <span class="btn0"><i class="el-icon-video-camera"></i></span>
                                    <span class='btn' @click="getMethod()" :class="title?'':'active'">{{title?'未参加':'已参加'}}</span>
                                </p>
                            </div>
                        </div>
                        <div class="list-item-box">
                            <span class="img-box">
                                <img src="../../assets/source.png" alt="">
                            </span>
                            <div class="text-box">
                                <h5>投票选出您心目中的...</h5>
                                <p class="t1"><i class="el-icon-user-solid"></i>校园杂志社</p>
                                <p class="t1">2019-08-19 12:30</p>
                                <p class="t2">
                                    <span class="btn0"><i class="el-icon-video-camera"></i></span>
                                    <span class='btn' @click="getMethod()" :class="title?'':'active'">{{title?'未参加':'已参加'}}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-item-footer">
                    <span>以上是根据您的兴趣为您推荐的资源</span>
                    <img src="../../assets/shuaxin.png" alt="">
                    <a href="javascript:;">查看更多</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:true,
        }
    },
    methods:{
        getMethod(){
            this.title=!this.title;
        }

    }
}
</script>
<style lang="scss" scoped>
.card-item{
    
    .card-item-h{
        text-align: left;
        span{
            display: inline-block;
            margin: 0 20px 0 0;
            background: #F6F6F6;
            padding: 5px 15px;
            border-radius: 20px;
            color: #808EA1;
            font-size: 14px;
        }
        span.active{
            background: #2A79C4;
            color: #fff;
        }
    }
    .card-item-body{
        // border-bottom: 1px solid #F6F6F6;
        text-align: left;
        h5{
            font-size: 14px;
        }
        .list-box{
            padding: 20px 0;
            overflow: hidden;
            .list-item-box{
                // background: #F9FAFC;
                border-radius: 10px;
                width: 50%;
                float: left;
                margin: 0 0 10px 0; 
                .img-box{
                    margin: 0 10px 0 0px;
                    float: left;
                    img{
                        height: 80px;
                    }
                }
                .text-box{
                    float: left;
                    // padding: 0 20px 0 0;
                    width: 60%;
                    h5{
                        font-size: 14px;
                        color: #000;
                        font-weight: bold;
                        white-space: nowrap; 
                        overflow: hidden;
                        text-overflow:ellipsis;
                    }
                    // p{
                    //    
                    // }
                    .t1{
                        font-size: 12px;
                        color: #666;
                    }
                    .t2{
                        display:flex;
                        display:-webkit-flex;
                        justify-content: space-between;
                        color: #666;
                        line-height:25px;
                        padding:0 10px 0 0;
                        .btn0{
                           color: #fff;
                            border-radius: 5px;
                            text-align: center; 
                            width: 25px;
                            background: #DFDFDF;
                        }
                        .btn{
                            color: #fff;
                            background: #2A79C4;
                            border-radius: 5px;
                            padding:0 10px;
                            width:150px;
                            text-align: center;
                            cursor: pointer;
                        }
                        .active{
                            background: #dcdcdc;
                            color: #999;
                        }
                    }
                }
            }
            .list-item-box:nth-last-child(2),.list-item-box:nth-last-child(1){
                margin: 0;
            }
        }
    }
    .card-item-footer{
        text-align: right;
        padding:10px 0 0 0;
        border-top: 1px solid #F6F6F6;
        line-height:35px;
        a{
            text-decoration: none;
            cursor: pointer;
            font-size: 14px;
            color: #2A79C4;
        }
        img{
            height:20px;
            vertical-align:middle;
            margin:0 5px 0 20px;
        }
    }
}
</style>