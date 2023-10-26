<template>
  <div v-for="(item, index) in navList" :key="index">
    <nav-list-item :itemContent="item"></nav-list-item>
  </div>
</template>

<script>
import NavListItem from './NavListitem.vue'
export default {
    props:["navList"],
    components: {
      NavListItem
    }
}
</script>

<style>

</style>