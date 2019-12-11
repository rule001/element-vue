import { Message } from "element-ui"
import {login} from '@/api/login'
const state={
    token:'',
    userName:'',
    roles:[],
    introduce:''
}
const mutations={
    SET_TOKEN(state,val){
        state.token=val
        localStorage.setItem('token',val)
    }
}
const actions={
    _login({commit},formData){
        console.log('000')
        return new Promise((resolve,reject)=>{
            login(formData)
            .then(res=>{
                if(res.state==1){
                    commit('SET_TOKEN',res.data.token)
                }else{
                    Message.error(res.data.msg);
                }
                resolve(res)
            })
            .catch(error=>{
                reject(error)
            })
        })
    }
}
export default{
    state,
    mutations,
    actions
}
