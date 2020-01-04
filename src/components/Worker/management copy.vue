<template>
    <div class="box">
        <div class="btnBox">
            <el-button type="primary" class="btn">民工维护</el-button>
            <el-button type="success" class="btn">批量导入</el-button>
            <el-button type="info" class="btn">批量导出</el-button>
        </div>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="date"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    }
}
</script>
<style scoped lang="scss">
    .box{
        text-align: left;
        .btnBox{
            padding:0 0 10px 0;
            .btn{
                margin:0 10px 0 0;
            }
        }
    }
</style>