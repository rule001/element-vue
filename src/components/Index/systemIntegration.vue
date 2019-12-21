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
                    <div class="card-item">
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
                            </div>
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
.card{
    background: #fff;
    border-radius: 10px;
    .card-header{
        display:flex;
        display:-webkit-flex;
        justify-content:space-between;
        line-height: 50px;
        border-bottom: 1px solid #F6F6F6;
        padding:0 20px;
        h5{
            font-size:16px;
        }
        span{
            font-weight: bold;
        }
    }
    .card-body{
        padding: 20px;
    }
}
.card-item{
    .img-box{
        
    }
}
</style>