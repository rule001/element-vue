<template>
    <div class="card">
        <div class="card-header">
            <h5>资源中心</h5>
            <span>...</span>
        </div>
        <div class="card-body">
            <div class="card-item">
                <div class="card-item-h">
                    <span class="active">为您推荐</span>
                    <span>我收藏的</span>
                </div>
                <div class="card-item-body">
                    <div class="list-box">
                        <div class="list-item-box">
                            <span class="img-box">
                                <img src="../../assets/source.png" alt="">
                            </span>
                            <div class="text-box">
                                <h5>如何在校园里成为迷人的成为迷人的成为迷人的成为迷人的...</h5>
                                <p class="t1"><i class="el-icon-user-solid"></i>宣传小组</p>
                                <p class="t2">
                                    <span><i class="el-icon-video-camera"></i>650</span>
                                    <span>12分钟前发布</span>
                                </p>
                            </div>
                        </div>
                         <div class="list-item-box">
                            <span class="img-box">
                                <img src="../../assets/source.png" alt="">
                            </span>
                            <div class="text-box">
                                <h5>如何在校园里成为迷人的成为迷人的成为迷人的成为迷人的...</h5>
                                <p class="t1"><i class="el-icon-user-solid"></i>宣传小组</p>
                                <p class="t2">
                                    <span><i class="el-icon-video-camera"></i>650</span>
                                    <span>12分钟前发布</span>
                                </p>
                            </div>
                        </div>
                        <div class="list-item-box">
                            <span class="img-box">
                                <img src="../../assets/source.png" alt="">
                            </span>
                            <div class="text-box">
                                <h5>如何在校园里成为迷人的成为迷人的成为迷人的成为迷人的...</h5>
                                <p class="t1"><i class="el-icon-user-solid"></i>宣传小组</p>
                                <p class="t2">
                                    <span><i class="el-icon-video-camera"></i>650</span>
                                    <span>12分钟前发布</span>
                                </p>
                            </div>
                        </div>
                         <div class="list-item-box">
                            <span class="img-box">
                                <img src="../../assets/source.png" alt="">
                            </span>
                            <div class="text-box">
                                <h5>如何在校园里成为迷人的成为迷人的成为迷人的成为迷人的...</h5>
                                <p class="t1"><i class="el-icon-user-solid"></i>宣传小组</p>
                                <p class="t2">
                                    <span><i class="el-icon-video-camera"></i>650</span>
                                    <span>12分钟前发布</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-item-footer">
                    <span>以上是根据您的兴趣为您推荐的资源</span>
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
            
        }
    },
    methods:{
        handleClick(tab,event){
            console.log(tab,event)
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
                margin: 0 0 20px 0; 
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
                    p{
                        line-height: 30px;
                    }
                    .t1{
                        font-size: 12px;
                        color: #666;
                    }
                    .t2{
                        display:flex;
                        display:-webkit-flex;
                        justify-content: space-between;
                        color: #666;
                    }
                }
            }
        }
    }
    .card-item-footer{
        text-align: right;
        padding:10px 0 0 0;
        border-top: 1px solid #F6F6F6;
        a{
            text-decoration: none;
            cursor: pointer;
            font-size: 16px;
            color: #2A79C4;
        }
    }
}
</style>