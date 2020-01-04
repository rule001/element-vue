<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-date"></i>民工管理</span>
                <management></management>
            </el-tab-pane>
            <el-tab-pane label="民工考勤">民工考勤</el-tab-pane>
            <el-tab-pane label="工资发放">工资发放</el-tab-pane>
            <el-tab-pane label="其它">其它</el-tab-pane>
        </el-tabs>
        <!-- <el-tabs v-model="activeName" @tab-click="handleClick" style="background:#fff;padding:0 20px">
            <el-tab-pane label="用户管理" name="first"><management></management></el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs> -->
    </div>
</template>
<script>
import management from '../../components/Worker/management'
export default {
    data(){
        return{
            activeName: 'first'
        }
    },
    components:{
        management
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style scoped lang="scss">

</style>