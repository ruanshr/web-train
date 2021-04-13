<template>
  <div id="app">
    <!-- animate.css  -->
    <!--<transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">-->
    <!-- vue2-animate.css -->
    <!--<transition name="fade" enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">-->
    <transition name="slide-fade" :duration="{ enter: 80, leave: 80 }">
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.slide-fade-enter-active {
  transform: translateX(100%);
  opacity: 1;
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transform: translateX(-100%);
  opacity: 1;
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(0);
  opacity: 0;
}
</style>
