
import { Toast } from "vant";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:() => import('../view/home/Home.vue')
        },
        {
            path:'/home',
            component:() => import('../view/home/Home.vue')
        },
        {
            path:'/cart',
            component:() => import('../view/cart/Cart.vue'),
            meta:{
                isAuth:true
            }
        },
        {
            path:'/mine',
            component:() => import('../view/mine/Mine.vue'),
            meta:{
                isAuth:true
            }
        },
        {
            path:'/order',
            component:() => import('../view/order/Order.vue'),
            meta:{
                isAuth:true
            }
        },
        {
            path:'/store',
            component:() => import('../view/store/index.vue')
        },
        {
            path:'/createOrder',
            component:() => import('../view/createOrder'),
            meta:{
                isAuth:true
            }
        },
        {
            path:'/address',
            component:() => import('../view/address'),
            meta:{
                isAuth:true
            }
        },
        {
            path:'/addressEdit',
            component:() => import('../view/addressEdit'),
            meta:{
                isAuth:true
            }
        },
        {
            path:'/userinfoedit',
            component:() => import('../view/userinfoedit'),
            meta:{
                isAuth:true
            }
        },
        {
            path:'/login',
            component:() => import('../view/login')
        },
        {
            path:'/register',
            component:() => import('../view/register')
        },
        
    ]
})
router.beforeEach((to,from,next) => {
    if(to.meta.isAuth){
        //一会登录以后 会在localstorage里面 存储一个标识
        if(localStorage.isLogin === 'login'){
            next()
        }else{
            next('/login')
            Toast('请先去登录')
        }
    }else{
        next()
    }
})

export default router