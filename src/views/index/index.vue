<template>
  <div class="index-box">
      <el-row>
          <el-col :span="12">
            <!-- <div class="cardItem"> -->
                <lunbo></lunbo>
            <!-- </div>  -->
          </el-col>
          <el-col :span="12">
              <div class="cardItem">
                  <date></date>
              </div>
          </el-col>
           <!-- <el-col :span="12">
              <div class="cardItem">
                  <date></date>
              </div>
          </el-col> -->
          <el-col :span="12">
              <div class="cardItem">
                  <inform></inform>
              </div>
          </el-col>
          <el-col :span="12">
              <div class="cardItem">
                  <!-- 常见应用 -->
                  <commonApplication></commonApplication>
              </div>
          </el-col>
          <el-col :span="12">
              <div class="cardItem">
                  <!-- 系统集成 -->
                  <systemIntegration></systemIntegration>
              </div>
          </el-col>
      </el-row>
  </div>
</template>
<script>
import lunbo from '../../components/Index/lunbo';
import date from '../../components/Index/date'
import inform from '../../components/Index/inform';
import commonApplication from '../../components/Index/commonApplication';
import systemIntegration from '../../components/Index/systemIntegration'
export default {
    data(){
        return{
          
        }
    },
    components: {
        lunbo,
        date,
        inform,
        commonApplication,
        systemIntegration
    },
}
</script>
<style lang="scss" scoped>
  .cardItem{
    margin:10px;
    background: #fff;
    border-radius: 10px;
    box-shadow:0 2px 12px 0 rgba(0,0,0,.1)
  }
</style>
