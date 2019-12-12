<template>
    <div class="login">
        <div class="loginBox">
            <h2 class="loginH2">
                <strong>智慧工地信息服务平台</strong>
            </h2>
            <div class="loginCon">
                <div class="titleDiv">
                    <!-- <h3>立即登录</h3> -->
                    <p>请输入你的账号和密码</p>
                    <!-- <i class="el-icon-user"></i> -->
                </div>
                <el-form ref="form" :model="form" :rules="rules">
                    <el-form-item>
                        <el-input 
                            placeholder="请输入账号"
                            prefix-icon="el-icon-user"
                            v-model="form.user"
                        >
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input
                            placeholder="请输入密码"
                            prefix-icon="el-icon-lock"
                            v-model="form.password"
                        >
                        </el-input>
                    </el-form-item>
                    <el-button class="loginBtn" @click="onSubmit('form')">立即登录</el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                user:'admin',
                password:'123456'
            },
            rules: {
                user: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度为11个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'change' }
                ]
            }
        }
    },
    methods:{
        onSubmit(){
            this.$store
            .dispatch('_login',this.form)
            .then(res=>{
                if(!res.data.success){
                    // this.refresh()
                }else{
                    console.log(this.$router)
                    this.$router.push('/page1')
                }
            })
            // console.log(this.form);
        }
    }
}
</script>
<style scoped lang="scss">
.login{
    height: 100%;
    width:100%;
    background: url(../../assets/bg.png) no-repeat center center;
    background-size: 100% 100%;
    overflow: hidden;
}
.loginBox{
    height: 455px;
    width: 550px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    margin-top: -287px;
}
.loginCon{
    margin-top: 30px;
    background: #fff;
    border-radius: 4px;
    padding:20px 100px;
    .titleDiv{
        padding: 0 28px;
        background: #fff;
        position: relative;
        border-radius: 4px;
    }
    p{
        font-size: 16px;
        color: #999;
        padding-top: 12px;
    }
}
.loginBtn{
    width: 100%;
    background: #19b9e7;
    color: #fff;
    margin: 50px 0 0 0; 
}
</style>