<template>
  <div class="cartDetail">
    <div class="content">
      <van-checkbox-group v-model="checked" @change="groupChange">
        <div v-for="(item,index) in store.state.cartList">
          <ListItem :item="item" :handleChange="handleChange" :showCheckBox="true"></ListItem>
        </div>
      </van-checkbox-group>
    </div>  
    <van-submit-bar 
    button-color="#ffc400" 
    :price="allPrice" 
    button-text="结算" 
    @submit="onSubmit" class="submit-all"
    v-if="store.state.isDelete"
    >
      <van-checkbox v-model="submitChecked" checked-color="#ffc400" @click="choseAll">全选</van-checkbox>
    </van-submit-bar>
    <div class="buy" v-else>
      <div class="left">
        <van-checkbox 
        v-model="submitChecked" 
        checked-color="#ffc400" 
        @click="choseAll"
        >全选</van-checkbox>
      </div>
      <div class="delete" @click="handleDelete">删除</div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import ListItem from '@/components/ListItem.vue';
import { useRouter } from 'vue-router';
import { Toast } from 'vant';
import type from 'postcss-pxtorem/lib/type';

export default {
  components:{
    ListItem
  },
  props:["changeShow"],
  setup(){
    const store = useStore()
    const router = useRouter()
    const data = reactive({
      checked:[],
      submitChecked:true
    })
    const handleChange = (value,detail) => {
      store.state.cartList.map((item) => {
        if(item.id === detail.name){
          item.num = value
        }
      }) 
    }
    const init = ()=> {
      data.checked = store.state.cartList.map(item=>item.id)
    }
    const showCheckBox = ()=>{}    
    onMounted(() => {
      init()
    })
    const onSubmit = () =>{
      if(data.checked.length){
        store.commit('pay',updateData())
        router.push({
          path:"/createOrder",
          query:{
            list:data.checked
          }
        })
      }else{
        Toast.fail('请选择！！!')
      }
    }
    const choseAll = () =>{
      if(data.checked.length != store.state.cartList.length){
        init()
      }else{
        data.checked = []
      }
    }
    const groupChange = (result) =>{
      if(result.length === store.state.cartList.length){
        data.submitChecked = true
      }else{
        data.submitChecked = false
      }
      data.checked = result
    }
    const allPrice = computed(()=>{
      let countList = store.state.cartList.filter(item=>{
        return data.checked.includes(item.id)
      })
      let sum = 0
      countList.forEach(item => {
        sum += item.num * item.price
      });
      return sum * 100
    })
    const updateData = (type)=>{
      return store.state.cartList.filter(item=>{
        return type === "delete"
         ? !data.checked.includes(item.id)
         :data.checked.includes(item.id)
      })
    }
    const handleDelete = () =>{
      if(data.checked.length){
        store.commit("delete",updateData("delete"))
        data.checked = []
        if(!store.state.cartList.length){
          props.changeShow()
          store.commit('edit',)
        }
      }else{
        Toast.fail("请选择要删除的商品")
      }
    }
    return{
      ...toRefs(data),
      store,
      handleChange,
      onSubmit,
      choseAll,
      groupChange,
      allPrice,
      showCheckBox
    }
  }
}
</script>

<style lang="less" scoped>
  .cartDetail {
    font-size: 14px;
    flex: 1;
    position: relative;
    overflow-y: auto;
    padding: 20px 20px 55px;
    .submit-all {
      position: fixed;
      bottom: 30px;
    }

    .buy {
      position: fixed;
      bottom: 48px;
      right: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      background-color: #fff;
      border-radius: 10px;
      height: 50px;
      align-items: center;
      padding: 0 16px;
      box-sizing: border-box;
      .left {
        display: flex;
        align-items: center;
      }
      .delete {
        color: #fff;
        background-color: #ffc400;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 600;
        width: 110px;
        height: 40px;
        text-align: center;
        line-height: 40px;
      }
    }

    .content {
      padding: 10px;
      background-color: #fff;
      border-radius: 10px;
    }
  }
</style>