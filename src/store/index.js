import { createStore } from "vuex";
import mutations from "./mutations"
export default createStore({
    state:{
        cartList:[],
        isDelete:true, //确定header组件 点击编辑的时候 底部组件的显示
        edit:true,
        orderList:[],
        userAddress:[
            {
                id: 1001,
                name: 'jason',
                tel: '15874859686',
                province: '江西省',
                city: '南昌市',
                county: '南昌县',
                addressDetail: '莲塘镇',
                isDefault: true,
                areaCode: '110101',
              },
              {
                id: 1002,
                name: 'allen',
                tel: '15874859685',
                province: '江西省',
                city: '南昌市',
                county: '新建区',
                addressDetail: '长堎镇',
                isDefault: false,
                areaCode: '110101',
              },
        ],
        orderListEnd:[]
    },
    mutations,
    actions:{}
})