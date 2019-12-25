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
          <el-col :span="12">
              <div class="cardItem">
                  <!-- 办事大厅 -->
                  <officeHall></officeHall>
              </div>
          </el-col>
          <el-col :span="12">
              <div class="cardItem">
                  <!-- 数据分析 -->
                  <dataAnalysis></dataAnalysis>
              </div>
          </el-col>
          <el-col :span="12">
              <div class="cardItem">
                  <!-- 资源中心 -->
                  <resource></resource>
              </div>
              <div class="cardItem">
                  <!-- 活动中心 -->
                  <active></active>
              </div>
          </el-col>
          <el-col :span="12">
              <div class="cardItem">
                  <!-- 活动中心 -->
                  <exchange></exchange>
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
import systemIntegration from '../../components/Index/systemIntegration';
import officeHall from '../../components/Index/officeHall';
import dataAnalysis from '../../components/Index/dataAnalysis';
import resource from '../../components/Index/resource';
import active from '../../components/Index/active';
import exchange from '../../components/Index/exchange';
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
        systemIntegration,
        officeHall,
        dataAnalysis,
        resource,
        active,
        exchange
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
