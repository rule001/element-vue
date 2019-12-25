<template>
    <div class="card">
        <div class="card-header">
            <h5>交流中心</h5>
            <span>...</span>
        </div>
        <div class="card-body">
            <div class="card-item">
                <div class="card-item-h">
                    <div>
                        <img src="../../assets/ideaicon.png" alt="">
                        <p><span>校园圈信息</span><span class="active">4546</span></p>
                    </div>
                    <div>
                        <img src="../../assets/ideaicon.png" alt="">
                        <p><span>校园圈信息</span><span class="active">4546</span></p>
                    </div>
                </div>
                <div class="card-item-body">
                    <div class="list-box">
                        <h5 class="title">消息（你有11条未读消息）<img src="../../assets/shuaxin.png" alt=""></h5>
                        <div class="list-item-box">
                            <div class="img-box">
                                <img src="../../assets/ideaimg.png" alt="">
                            </div>
                            <div class="text-box">
                                <p class="t2"><span>17级计算机科学与技术</span><span>15:46</span></p>
                                <h5><span class="t1">高冷余</span><span class="t2">11</span></h5>
                                <p class="t1">与其抱怨老板关注细节，不如比老板更细心</p>
                            </div>
                        </div>
                        <div class="list-item-box">
                            <div class="img-box">
                                <img src="../../assets/ideaimg.png" alt="">
                            </div>
                            <div class="text-box">
                                <p class="t2"><span>17级计算机科学与技术</span><span>15:46</span></p>
                                <h5><span class="t1">高冷余</span><span class="t2">11</span></h5>
                                <p class="t1">与其抱怨老板关注细节，不如比老板更细心</p>
                            </div>
                        </div>
                        <div class="list-item-box">
                            <div class="img-box">
                                <img src="../../assets/ideaimg.png" alt="">
                            </div>
                            <div class="text-box">
                                <p class="t2"><span>17级计算机科学与技术</span><span>15:46</span></p>
                                <h5><span class="t1">高冷余</span><span class="t2">11</span></h5>
                                <p class="t1">与其抱怨老板关注细节，不如比老板更细心</p>
                            </div>
                        </div>
                        <div class="list-item-box">
                            <div class="img-box">
                                <img src="../../assets/ideaimg.png" alt="">
                            </div>
                            <div class="text-box">
                                <p class="t2"><span>17级计算机科学与技术</span><span>15:46</span></p>
                                <h5><span class="t1">高冷余</span><span class="t2">11</span></h5>
                                <p class="t1">与其抱怨老板关注细节，不如比老板更细心</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-item-footer">
                    <!-- <span>以上是根据您的兴趣为您推荐的资源</span> -->
                    <img src="../../assets/shuaxin.png" alt="">
                    <a href="javascript:;">查看全部消息</a>
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
        overflow: hidden;
        div{
           
            width: 50%;
            float: left;
            img{
                height: 80px;
                margin: 0 20px 0 0;
                vertical-align:middle;
            }
            p{
                width: 50%;
                display: inline-block;
                margin: 0 20px 0 0;
                background: #FBFAC8;
                border: 1px solid #E4E2C7;
                padding: 5px 15px;
                border-radius: 20px;
                color: #808EA1;
                font-size: 14px;
                .active{
                    color: red;
                    float:right;
                }
            }
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
            .title{
                margin:5px 0 20px 0;
                color: #384B64;
                font-weight: bold;
                img{
                    height: 20px;
                    vertical-align: middle;
                    float:right;
                }
            }
            .list-item-box{
                // background: #F9FAFC;
                border-top: 1px solid #F6F6F6;
                // border-bottom: 1px solid #F6F6F6;
                border-radius: 10px;
                padding: 20px 0;
                margin:10px 0; 
                width: 100%;
                .img-box{
                    margin: 0 10px 0 0px;
                    float: left;
                    img{
                        height: 80px;
                    }
                }
                .text-box{
                    // float: left;
                    // padding: 0 20px 0 0;
                    h5{
                        font-size: 14px;
                        color: #000;
                        font-weight: bold;
                        display:flex;
                        display:-webkit-flex;
                        justify-content: space-between;
                        .t2{
                            background:#4ECE3D;
                            color: #fff;
                            padding:0 5px;
                            border-radius: 10px;
                            font-size: 10px;
                        }

                    }
                    p{
                        line-height: 30px;
                    }
                    .t1{
                        font-size: 12px;
                        color: #666;
                        white-space: nowrap; 
                        overflow: hidden;
                        text-overflow:ellipsis;
                    }
                    .t2{
                        display:flex;
                        display:-webkit-flex;
                        justify-content: space-between;
                        color: #666;
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