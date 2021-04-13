<template>
  <div class="page-3">
    <h2>Page3</h2>
    <div @click="$router.back()">返回</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Page3',
  beforeCreate(){
    console.log('Page3 beforeCreate')
  },
  created(){
    console.log('Page3 created')
  },
  beforeMount() {
    console.log('Page3 beforeMounted')
  },
  mounted(){
    console.log('Page3 mounted')
  },
  beforeUpdate(){
    console.log('Page3 beforeUpdate')
  },
  updated() {
    console.log('Page3 updated')
  },
  beforeDestroy() {
    console.log('Page3 beforeDestory')
  },
  destroyed() {
    console.log('Page3 destory')
  }
}
</script>
