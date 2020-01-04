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
import lunbo from '../../components/Campus/lunbo';
import date from '../../components/Campus/date'
import inform from '../../components/Campus/inform';
import commonApplication from '../../components/Campus/commonApplication';
import systemIntegration from '../../components/Campus/systemIntegration';
import officeHall from '../../components/Campus/officeHall';
import dataAnalysis from '../../components/Campus/dataAnalysis';
import resource from '../../components/Campus/resource';
import active from '../../components/Campus/active';
import exchange from '../../components/Campus/exchange';
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
