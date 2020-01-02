<template>
    <div class="box">
        <!-- v-bind -->
        <span v-bind:title="message">
            鼠标悬停查看此处动态绑定的提示信息！
        </span>
        <!-- v-if -->
        <p v-if='seen'>我出现了</p>
        <!-- v-for -->
        <ol>
            <li v-for="(todo) in todos" :key='todo.index'>
                {{todo.text}}
            </li>
        </ol>
        <!-- v-on -->
        <p>{{data}}</p>
        <button v-on:click="reverseMessage">反转消息</button>
        <!-- v-modal -->
        <p>{{data}}</p>
        <input v-model="data">
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:'页面加载于'+new Date().toLocaleString(),
            seen:true,
            todos: [
                { text: '学习 JavaScript' },
                { text: '学习 Vue' },
                { text: '整个牛项目' }
            ],
            data:'hello vue.js'
        }
    },
    methods:{
        reverseMessage:function(){
            this.data=this.data.split('').reverse().join('')
        }
    }
}
</script>
<style lang="scss" scoped>
    .box{
        text-align: left;
    }
</style>