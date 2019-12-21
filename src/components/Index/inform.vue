<template>
    <div class="card">
        <div class="card-header">
            <h5>通知公告</h5>
            <span>...</span>
        </div>
        <div class="card-body">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="校内通知" name="first">
                    <div class="card-item">
                        <div class="card-item-h">
                            <div class="left">
                                <span class="active">公文</span>
                                <span>公告</span>
                                <span>学术</span>
                                <span>交流</span>
                            </div>
                            <div class="right">
                                <span>更多>></span>
                            </div>
                        </div>
                        <div class="card-item-body">
                            <ul>
                                <li v-for='(item,index) in contentList' :key='index'>
                                    <span></span>
                                    <p class="content">{{item.content}}</p>
                                    <p class="source">{{item.source}}</p>
                                    <p class="time">{{item.time}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="card-item-footer">
                            <a href="javascript:;">查看更多</a>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="综合新闻" name="second">综合新闻</el-tab-pane>
                <el-tab-pane label="学校新闻" name="third">学校新闻</el-tab-pane>
                <el-tab-pane label="院系论坛" name="fourth">院系论坛</el-tab-pane>
            </el-tabs>
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
        border-bottom: 1px solid #F6F6F6;
        ul{
            list-style: none;
            margin: 0;
            li{
                display:flex;
                display:-webkit-flex;
                justify-content: space-between;
                span{
                    background: #2A79C4;
                    height: 4px;
                    width:4px;
                    display: inline-block;
                    border-radius:4px;
                    margin:18px 5px 0 0;
                }
                p{
                    font-size: 14px;
                    line-height:36px;
                }
                .content{
                    width:65%;
                    display: inline-block;
                    white-space: nowrap; 
                    overflow: hidden;
                    text-overflow:ellipsis;
                    text-align: left;
                }
                .source{
                    width:20%;
                }
                .time{
                    width:13%;
                }
            }
        }
    }
    .card-item-footer{
        text-align: right;
        padding: 10px 0 0 0;
        a{
            text-decoration: none;
            cursor: pointer;
            font-size: 16px;
            color: #2A79C4;
        }
    }
}
</style>