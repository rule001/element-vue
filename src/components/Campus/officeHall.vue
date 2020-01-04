<template>
    <div class="card">
        <div class="card-header">
            <h5>办事大厅</h5>
            <span>...</span>
        </div>
        <div class="card-body">
            <div class="card-item">
                <div class="card-item-h">
                    <div>
                        <h5>20</h5>
                        <span>代办事项</span>
                    </div>
                    <div>
                        <h5>20</h5>
                        <span>代办事项</span>
                    </div>
                    <div>
                        <h5>20</h5>
                        <span>代办事项</span>
                    </div>
                </div>
                <div class="card-item-body">
                    <h5>推荐服务</h5>
                    <div class="list-box">
                        <div class="list-item-box">
                            <span>
                                <img src="../../assets/icon.png" alt="">
                            </span>
                            <p>教师借用申请</p>
                        </div>
                        <div class="list-item-box">
                            <span>
                                <img src="../../assets/icon.png" alt="">
                            </span>
                            <p>教师借用申请</p>
                        </div>
                        <div class="list-item-box">
                            <span>
                                <img src="../../assets/icon.png" alt="">
                            </span>
                            <p>教师借用申请</p>
                        </div>
                        <div class="list-item-box">
                            <span>
                                <img src="../../assets/icon.png" alt="">
                            </span>
                            <p>教师借用申请</p>
                        </div>
                        <div class="list-item-box">
                            <span>
                                <img src="../../assets/icon.png" alt="">
                            </span>
                            <p>教师借用申请</p>
                        </div>
                        <div class="list-item-box">
                            <span>
                                <img src="../../assets/icon.png" alt="">
                            </span>
                            <p>教师借用申请</p>
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
        div{
            background-size:100% 100%;
            // background: url('../../assets/card.png') no-repeat center center;
             background: url('../../assets/card.png') no-repeat;
            display: inline-block;
            text-align: left;
            height: 120px;
            width:33%;
            // box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
            h5{
                color: #fff;
                font-size: 16px;
                font-weight: bold;
                margin:30px 0 10px 20px;
            }
            span{
                font-size: 14px;
                color: #fff;
                margin:0 0 0 20px;
                display: inline-block;
            }
        }
    }
    .card-item-body{
        // border-bottom: 1px solid #F6F6F6;
        padding: 20px 0 0;
        text-align: left;
        h5{
            font-size: 14px;
        }
        .list-box{
            padding: 20px 0;
            .list-item-box{
                background: #F9FAFC;
                border-radius: 10px;
                width: 30%;
                padding: 20px 0 20px 0;
                float: left;
                margin: 0 3% 20px 0;
                span{
                    height: 80px;
                    width: 80px;
                    border-radius: 40px;
                    display: inline-block;
                    background: #fff;
                    text-align:center;
                    margin: 0 10px 0 10px;
                    float: left;
                    img{
                        margin:20px auto;
                        height: 40px;
                    }
                }
                p{
                    font-size: 14px;
                    line-height: 80px;
                }
            }
        }
    }
}
</style>