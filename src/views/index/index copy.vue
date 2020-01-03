<template>
  <div class="index-box">
    <el-card class="card-box">
        <!-- cardList -->
        <el-row class="infoCrads">
            <el-col :span="6">
                <div class="cardItem">
                  <div class="cardItem_txt">
                      <count-to
                        class="cardItem_p0 color-green2"
                        :startVal="startVal"
                        :endVal="profit"
                        :duration="2000"
                      ></count-to>
                      <p class="cardItem_p1">total</p>
                  </div>
                  <div class="cardItem_icon">
                      <i class="el-icon-user color-green1"></i>
                  </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="cardItem">
                  <div class="cardItem_txt">
                       <count-to
                        class="cardItem_p0 color-green2"
                        :startVal="startVal"
                        :endVal="profit"
                        :duration="2000"
                      ></count-to>
                      <p class="cardItem_p1">total</p>
                  </div>
                  <div class="cardItem_icon">
                      <i class="el-icon-s-comment color-blue"></i>
                  </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="cardItem">
                  <div class="cardItem_txt">
                      <count-to
                        class="cardItem_p0 color-green2"
                        :startVal="startVal"
                        :endVal="profit"
                        :duration="2000"
                      ></count-to>
                      <p class="cardItem_p1">total</p>
                  </div>
                  <div class="cardItem_icon">
                     <i class="el-icon-shopping-cart-2 color-red"></i>
                  </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="cardItem">
                  <div class="cardItem_txt">
                       <count-to
                        class="cardItem_p0 color-green2"
                        :startVal="startVal"
                        :endVal="profit"
                        :duration="2000"
                      ></count-to>
                      <p class="cardItem_p1">total</p>
                  </div>
                  <div class="cardItem_icon">
                      <i class="el-icon-wallet color-green2"></i>
                  </div>
                </div>
            </el-col>
        </el-row>
    </el-card>
  </div>
</template>
<script>
import CountTo from 'vue-count-to'
  export default {
      data(){

      },
      components: {
         CountTo,
      },
  }
</script>
<style lang="scss" scoped>
$mgTop: 30px;
@mixin shadow {
  box-shadow: 0 0 10px #e2e2e2;
}
.color-green1 {
  color: #40c9c6 !important;
}
.color-blue {
  color: #36a3f7 !important;
}
.color-red {
  color: #f4516c !important;
}
.color-green2 {
  color: #34bfa3 !important;
}
.dashbord {
  background-color: #f0f3f4;
}
.infoCrads {
  margin: 0 -20px 0 -20px;
  .el-col {
    padding: 0 20px;
    .cardItem {
      height: 108px;
      background: #fff;
    }
  }
}
.cardItem {
  color: #666;
  @include shadow();
  .cardItem_txt {
    float: left;
    margin: 26px 0 0 20px;
    .cardItem_p0 {
      font-size: 20px;
      font-weight: bold;
    }
    .cardItem_p1 {
      font-size: 16px;
    }
  }
  .cardItem_icon {
    float: right;
    margin: 24px 20px 0 0;
    i {
      font-size: 55px;
    }
  }
}
.lCharts {
  background: #fff;
  margin-top: $mgTop;
  padding: 30px 0;
  @include shadow();
}
.barCharts {
  background: #fff;
  margin-top: $mgTop;
  padding: 30px 0;
  @include shadow();
}
.pieCharts {
  background: #fff;
  padding: 20px 0;
  @include shadow();
}
.tableChart {
  margin-top: $mgTop;
}
</style>
