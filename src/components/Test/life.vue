<template>
    <div class="box">
        {{test}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            test:'123'
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