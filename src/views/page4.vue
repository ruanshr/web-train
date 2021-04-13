<template>
  <div class="page-4">
    <h2>Page4</h2>
    <div @click="$router.back()">返回</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Page4',
  beforeCreate(){
    console.log('Page4 beforeCreate')
  },
  created(){
    console.log('Page4 created')
  },
  beforeMount() {
    console.log('Page4 beforeMounted')
  },
  mounted(){
    console.log('Page4 mounted')
  },
  beforeUpdate(){
    console.log('Page4 beforeUpdate')
  },
  updated() {
    console.log('Page4 updated')
  },
  beforeDestroy() {
    console.log('Page4 beforeDestory')
  },
  destroyed() {
    console.log('Page4 destory')
  }
}
</script>
