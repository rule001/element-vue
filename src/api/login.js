import $axios from './index'
export function login(data){
    const url='./login'
    return $axios.post(url,data)
}