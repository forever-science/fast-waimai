<template>
  <div class="login">
    <Header title="登录"></Header>
    <div class="img">快送</div>
    <van-form @submit="onSubmit">
        <van-field
            v-model="username"
            name="user"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        >
        </van-field>
        <van-field
            v-model="password"
            type="password"
            name="pass"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        >

        </van-field>
        <div style="margin: 16px;">
            <van-button
                round
                block
                type="info"
                native-type="submit"
                color="#ffc400"
            >登录
            </van-button>
            <van-button           
                round
                block
                type="info"
                color="#ffc400"
                class="register"
                @click="toRegister"
            >去注册
            </van-button>
        </div>
    </van-form>
  </div>

</template>

<script>
import Header from '../../components/Header.vue'
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { Toast } from 'vant'

export default {
    components:{
        Header
    },
    setup(){
        const router = useRouter()
        const data = reactive({
            username:"",
            password:""
        })
        const toRegister = ()=>{
            router.push("/register")
        }
        const onSubmit = (value)=>{
            console.log(value);
            if(!localStorage.userInfo){
                Toast('账号未注册')
                return
            }else{
                let userInfo = JSON.parse(localStorage.userInfo)
                if(userInfo['user'] === value['user']){
                    if(userInfo['pass'] === value['pass']){
                        Toast('登录成功')
                        localStorage.setItem('isLogin','login')
                        router.push('/home') 
                    }else{
                        Toast('密码错误')
                    }
                }else{
                    Toast('账户不存在')
                }
            }
        }
        return{
            ...toRefs(data),
            toRegister,
            onSubmit
        }
    }
}
</script>

<style lang="less" scoped>
.login {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
  }
}
</style>