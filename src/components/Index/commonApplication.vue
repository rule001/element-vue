<template>
    <div class="card">
        <div class="card-header">
            <h5>常见应用</h5>
            <span>...</span>
        </div>
        <div class="card-body">
            <div class="card-item" v-for='(item) in contentList' :key='item.index'>
                <span class="item"><i class="el-icon-document-copy"></i>{{item.name}}</span>
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
                {name:'注册系统注册系统的操作'},
                {name:'注册系统注册系统的操作'},
                {name:'注册系统注册系统的操作'},
                {name:'注册系统注册系统的操作'},
                {name:'注册系统注册系统的操作'},
                {name:'注册系统注册系统的操作'},
                {name:'注册系统注册系统的操作'},
                {name:'注册系统注册系统的操作'},
                {name:'注册系统注册系统的操作'},
                {name:'注册系统注册系统的操作'},
                {name:'注册系统注册系统的操作'},
                {name:'注册系统注册系统的操作'},
                {name:'注册系统注册系统的操作'},
                {name:'注册系统注册系统的操作'},
               
                
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
    span{
        line-height:35px;
        display: inline-block;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow:ellipsis;
        width: 25%;
        float: left;
        i{
            margin: 0 10px 0 0;
        }
    }
}
</style>