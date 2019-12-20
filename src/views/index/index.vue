<template>
  <div class="index-box">
      <el-row>
          <el-col :span="12">
            <el-card class="cardItem img1">
            </el-card>
          </el-col>
          <el-col :span="12">
              <el-card class="cardItem">
                  <el-row>
                    <el-col :span="12">
                      <div class="rili-box">
                          <div class="rili-top">
                              <img src="../../assets/rili.png" alt="">
                              <div class="text-box">
                                <h4>2019年12月26日</h4>
                                <p>农历腊月 初一</p>
                                <a href="javascript:;">第十六教学周</a>
                              </div>
                          </div>
                          <div class="rili-bottom">
                              <div class="title-box">
                                <h5>12月份 日程事件</h5>
                                <p><i class="el-icon-circle-plus-outline"></i>添加日程</p>
                              </div>
                              <div class="news-list">
                                  <ul>
                                    <li>
                                      <span></span>
                                      <p>【毕业季】我学与大连市，中科院微电子所三方共建电子系统</p>
                                    </li>
                                    <li>
                                      <span></span>
                                      <p>【毕业季】我学与大连市，中科院微电子所三方共建电子系统</p>
                                    </li>
                                    <li>
                                      <span></span>
                                      <p>【毕业季】我学与大连市，中科院微电子所三方共建电子系统</p>
                                    </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      我是日历
                    </el-col>
                  </el-row>
              </el-card>
          </el-col>
      </el-row>
  </div>
</template>
<script>
// import CountTo from 'vue-count-to'
  export default {
      data(){
          return{

          }
      },
      // components: {
      //    CountTo,
      // },
  }
</script>
<style lang="scss" scoped>
  .cardItem{
    margin: 0 10px;
    height: 300px;
  }
  // 轮播图
  .img1{
      background: url(../../assets/img1.png) no-repeat;
      background-size: 100%;
  }
  // 日历样式
  .rili-box{
    .rili-top{
      overflow: hidden;
      img{
        width:100px;
        margin:0 10px 0 0;
        display:inline-block;
        float: left;
      }
      .text-box{
          float:left;
          padding: 10px;
          text-align: left;
          h4{
            font-size:16px;
            font-weight: bold;
          }
          p{
            margin:8px 0;
          }
          a{
            background: #58A6CD;
            padding:5px 10px;
            border-radius: 20px;
            color: #fff;
          }
      }
    }
    .rili-bottom{
      text-align: left;
      margin: 10px 0 0 0;
      .title-box{
        line-height: 25px;
        overflow: hidden;
        margin: 0 0 10px 0;
        h5{
          font-size: 14px;
          font-weight: bold;
          float: left;
        }
        p{
          float:right;
          color: #999;
          font-size: 14px;
          i{
            margin: 0 5px 0 0;
          }
        }
      }
      .news-list{
        ul{
          list-style: none;
          margin: 0;
          li{
            overflow: hidden;
            span{
              background: red;
              height: 6px;
              width: 6px;
              display: inline-block;
              border-radius:6px;
              float: left;
              margin:6px 0 0 0;
            }
            p{
              float: left;
              line-
            }
          }
        }
      }
    }
  }
</style>
