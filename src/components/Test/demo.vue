<template>
    <div class="box">
        <div v-bind:class="{active:isActive,'text-danger':hasError}">111</div>
        <div v-if="Math.random() > 0.5">
        Now you see me
        </div>
        <div v-else>
        Now you don't
        </div>
        <div>
            <span v-text="message"></span>
            <span>姓名：{{message}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isActive:true,
            hasError:false,
            message:'哈哈'
        }
    },
    beforeCreate(){
        console.log('before钩子事件');
        console.log(this.$data);
        console.log(this.$el)   
    },
    created(){
        console.log('created钩子事件');
        console.log(this.$data);
        console.log(this.$el) 
    }
}
</script>
<style lang="scss" scoped>
    .box{
        text-align: left;
    }
</style>