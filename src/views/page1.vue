<template>
  <div class="page-1">
    <h2>Page1</h2>
    <div @click="$router.back()">返回</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Page1',
  beforeCreate(){
    console.log('Page1 beforeCreate')
  },
  created(){
    console.log('Page1 created')
  },
  beforeMount() {
    console.log('Page1 beforeMounted')
  },
  mounted(){
    console.log('Page1 mounted')
  },
  beforeUpdate(){
    console.log('Page1 beforeUpdate')
  },
  updated() {
    console.log('Page1 updated')
  },
  activated() {
    console.log('Page1 activated')
  },
  deactivated() {
    console.log('Page1 deactivated')
  },
  beforeDestroy() {
    console.log('Page1 beforeDestory')
  },
  destroyed() {
    console.log('Page1 destory')
  }
}
</script>
