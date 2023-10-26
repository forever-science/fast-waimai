<template>
  <div class="footer">
    <div class="item">
        <router-link active-class="nav-color"
          class="nav-item" to="/home">
          <van-icon name="wap-home-o" />
          首页
        </router-link>
    </div>
    <div class="item">
        <router-link active-class="nav-color" class="nav-item" to="/cart"><van-icon name="cart-o" />购物车</router-link>
    </div>
    <div class="item">
        <router-link active-class="nav-color" class="nav-item" to="/order"><van-icon name="coupon-o" />订单</router-link>
    </div>
    <div class="item">
        <router-link active-class="nav-color" class="nav-item" to="/mine"><van-icon name="contact-o" />我的</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.footer{
  display: flex;
  background-color: #fff;
  border-top: 0.5px solid #eee;
  font-size: 12px;
  .item{
    flex: 1;
    .nav-color{
      color: #ffc400;
    }
    .nav-item{
      display: flex;
      flex-flow: column;
      align-items: center;
    }
  }
}


</style>