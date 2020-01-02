<template>
    <div>
        <el-card>
            <test></test>
        </el-card>
        <el-card>
            <life></life>
        </el-card>
         <el-card>
            <demo></demo>
        </el-card>
    </div>
</template>
<script>
import test from '../../components/Test/test';
import life from '../../components/Test/life';
import demo from '../../components/Test/demo';
export default {
    data(){
        return{

        }
    },
    components:{
        test,
        life,
        demo
    }
}
</script>