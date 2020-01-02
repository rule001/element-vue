<template>
    <div>
        <el-card>
            <test></test>
        </el-card>
        <el-card>
            <life></life>
        </el-card>
    </div>
</template>
<script>
import test from '../../components/Test/test';
import life from '../../components/Test/life';
export default {
    data(){
        return{

        }
    },
    components:{
        test,
        life
    }
}
</script>