<template>
  <div>
    <Header title="地址管理"></Header>
    <van-address-list
        v-model="chosenAddressId"
        :list="list"  
        :disabled-list="disabledList"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
/>

  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import Header from '../../components/Header.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    components:{
        Header
    },
    setup(){
        const store = useStore()
        const router = useRouter()
        const data = reactive({
            list:[]
        })
        const onAdd = () =>{
            router.push({
                path:'/addressEdit',
                query:{
                    type:"add"
                }
            })
        }
        const onEdit = (item) =>{
            router.push({
                path:'/addressEdit',
                query:{
                    id:item.id,
                    type:"edit"
                }
            })
        }
        const init = ()=>{
            data.list = store.state.userAddress.map(item=>{
                return {
                    id:item.id,
                    name:item.name,
                    tel:item.tel,
                    address:`${item.province}
                    ${item.city}
                    ${item.county}${item.addressDetail}`,
                    isDefault:item.isDefault
                }
            })
        }
        onMounted(()=>{
            init()
        })
        return{
            ...toRefs(data),
            onEdit,
            onAdd,
        }
    }
}
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
/deep/ .van-switch--on {
  background-color: #ffc400;
}
</style>