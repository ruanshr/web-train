<template>
  <div class="page-2">
    <h2>Page2</h2>
    <div @click="$router.back()">返回</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Page2',
  beforeCreate(){
    console.log('Page2 beforeCreate')
  },
  created(){
    console.log('Page2 created')
  },
  beforeMount() {
    console.log('Page2 beforeMounted')
  },
  mounted(){
    console.log('Page2 mounted')
  },
  beforeUpdate(){
    console.log('Page2 beforeUpdate')
  },
  activated() {
    console.log('Page2 activated')
  },
  deactivated() {
    console.log('Page2 deactivated')
  },
  updated() {
    console.log('Page2 updated')
  },
  beforeDestroy() {
    console.log('Page2 beforeDestory')
  },
  destroyed() {
    console.log('Page2 destory')
  }
}
</script>
