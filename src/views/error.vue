<template>
  <div class="home">
    <h2>错误页</h2>
    <div @click="$router.back()">返回</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Error'
}
</script>
