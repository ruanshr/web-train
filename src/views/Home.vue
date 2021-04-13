<template>
  <div class="home">
    <h2>首页</h2>
    <router-link to="/Page1">Page1</router-link> |
    <router-link to="/Page2">Page2</router-link> |
    <router-link to="/Page3">Page3</router-link> |
    <router-link to="/Page4">Page4</router-link> |
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  beforeCreate(){
    console.log('home beforeCreate')
  },
  created(){
    console.log('home created')
  },
  beforeMount() {
    console.log('home beforeMounted')
  },
  mounted(){
    console.log('home mounted')
  },
  beforeUpdate(){
    console.log('home beforeUpdate')
  },
  updated() {
    console.log('home updated')
  },
  activated() {
    console.log('home activated')
  },
  deactivated() {
    console.log('home deactivated')
  },
  beforeDestroy() {
    console.log('home beforeDestory')
  },
  destroyed() {
    console.log('home destory')
  }

}
</script>
