<template>
    <div class="card">
        <div class="card-header">
            <h5>系统集成</h5>
            <span>...</span>
        </div>
        <div class="card-body">
            <div class="card-item">
                <div class="card-item-h">
                    <div class="left">
                        <span class="active">图书馆</span>
                        <span>一卡通</span>
                        <span>网费</span>
                        <span>工资</span>
                        <span>寝室</span>
                        <span>报修</span>
                    </div>
                    <div class="right">
                        <span>更多>></span>
                    </div>
                </div>
                <div class="card-item-body">
                    <div class="img-box">
                        <img src="../../assets/sy1.png" alt="">
                    </div>
                    <div class="text-box">
                        <div class="text-title">
                            <h5>图书列表</h5>
                            <span>更多>></span>
                        </div>
                        <div class="text-content">
                            <span><i class="el-icon-reading"></i>科学发现纵谈论</span>
                            <span><i class="el-icon-reading"></i>科学发现纵谈论</span>
                            <span><i class="el-icon-reading"></i>科学发现纵谈论</span>
                            <span><i class="el-icon-reading"></i>科学发现纵谈论</span>
                            <span><i class="el-icon-reading"></i>科学发现纵谈论</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            activeName: 'first',
            contentList:[
                {
                    content:'我校与大连市，中科院微电子所三方共建微电子系统，为广大是十年文革的梵蒂冈地方官',
                    source:'校长办公室',
                    time:'2019-12-19'
                },
                {
                    content:'我校与大连市，中科院微电子所三方共建微电子系统，为广大是十年文革的梵蒂冈地方官',
                    source:'校长办公室',
                    time:'2019-12-19'
                },
                {
                    content:'我校与大连市，中科院微电子所三方共建微电子系统，为广大是十年文革的梵蒂冈地方官',
                    source:'校长办公室',
                    time:'2019-12-19'
                },
                {
                    content:'我校与大连市，中科院微电子所三方共建微电子系统，为广大是十年文革的梵蒂冈地方官',
                    source:'校长办公室',
                    time:'2019-12-19'
                },
                {
                    content:'我校与大连市，中科院微电子所三方共建微电子系统，为广大是十年文革的梵蒂冈地方官',
                    source:'校长办公室',
                    time:'2019-12-19'
                },
                {
                    content:'我校与大连市，中科院微电子所三方共建微电子系统，为广大是十年文革的梵蒂冈地方官',
                    source:'校长办公室',
                    time:'2019-12-19'
                },
                 {
                    content:'我校与大连市，中科院微电子所三方共建微电子系统，为广大是十年文革的梵蒂冈地方官',
                    source:'校长办公室',
                    time:'2019-12-19'
                },
                
            ]
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
        display:flex;
        display:-webkit-flex;
        justify-content: space-between;  
        .left{
            span{
                display: inline-block;
                margin: 0 20px 15px 0;
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
        .right{
            span{
                color: #808EA1;
                line-height:23px;
                font-size: 14px;
            }
        }
    }
    .card-item-body{
        border-top: 1px solid #F6F6F6;
        // border-bottom: 1px solid #F6F6F6;
        padding: 20px 0 0;
        overflow: hidden;
        .img-box{
            float: left;
            margin: 0 20px 0 0;
            height: 130px;
            img{
                height:100%;
            }
        }
        .text-box{
            float: left;
            .text-title{
                line-height: 41px;
                display:flex;
                display:-webkit-flex;
                justify-content: space-between;
                h5{
                    font-size: 14px;
                    color: #333;
                }
                span{
                    color: #999;
                }
            }
            .text-content{
                text-align:left;
                span{
                    width: 50%;
                    float: left;
                    line-height:30px;
                }
            }
        }
    }
}
</style>