<template>
    <div class="img-box">
        <el-carousel :interval="5000" arrow="always" class="cardItem">
            <el-carousel-item v-for="(item,index) in imgList" :key="index">
            <img :src='item' alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
import lunbo1 from '../../assets/lunbo1.jpg'
import lunbo2 from '../../assets/lunbo2.jpg'
import lunbo3 from '../../assets/lunbo3.jpg'
export default {
    data(){
        return{
            imgList:[lunbo1,lunbo2,lunbo3]
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .img-box{
        height:300px;
        margin: 10px;
        border-radius:10px;
        box-shadow:0 2px 12px 0 rgba(0,0,0,.1)
    }
   .el-carousel__item img{
    height:100%;
    width: 100%;
    border-radius:10px;
  }
</style>