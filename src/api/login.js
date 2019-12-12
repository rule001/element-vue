import $axios from './index'
export function login(data){
    const url='./login'
    return $axios.post(url,data)
}
export function getInfo() {
    const url = '/getInfo'
    console.log('7777')
    return $axios.get(url)
}