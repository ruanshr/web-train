# vue-router
[官方地址](https://router.vuejs.org/zh/)

## 课前疑问
 - router 为什么要用Router
 - 实现一个router复杂吗？ 怎样实现一个router？
 - vue-router 能处理什么
 - vue-router相比较Router有什么特点
  
## Router 处理的是什么？
 - [URL 组成](./images/url.webp) （略讲）
 
  <img src="./images/url.jpg" alt="URL 组成" />
<font color="#f00">注： fragment 需要在query后面，否则this.$route.query 获取不到
</font>
  
   
## Vue-Router 基础知识 [见官网](https://router.vuejs.org/zh/) (选讲)
* 路由对象
```
declare type RouteConfig = {
  path: string;
  component?: Component;
  name?: string; // 命名路由
  components?: { [name: string]: Component }; // 命名视图组件
  redirect?: string | Location | Function;
  props?: boolean | Object | Function;
  alias?: string | Array<string>;
  children?: Array<RouteConfig>; // 嵌套路由
  beforeEnter?: (to: Route, from: Route, next: Function) => void;
  meta?: any;

  // 2.6.0+
  caseSensitive?: boolean; // 匹配规则是否大小写敏感？(默认值：false)
  pathToRegexpOptions?: Object; // 编译正则的选项
}
```
<font color="#f00">注： 这里没有exact字段（精准匹配， 但是router-link有这个字段）</font>
* 路由匹配 [实例](./router-params.md)
  + 动态路由匹配
  + 别名
  + 参数
* 路由模式 [说明](./mode.md)
  + [hash 具体实现参考hashChange](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/hashchange_event) 默认
  + [history 具体实现参考pushState](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)
  + abstract
* 嵌套路由 [见官网](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)
* 动态路由 addRoutes
* 勾子  
 
## Vue-Router 特色功能 
* 页面回退时位置记忆 
  ``` js
  type PositionDescriptor =
    { x: number, y: number } |
    { selector: string } |
    ?{}

  type scrollBehaviorHandler = (
    to: Route,
    from: Route,
    savedPosition?: { x: number, y: number }
  ) => PositionDescriptor | Promise<PositionDescriptor>
  ```
<font color="#f00">注：作用于document.body 通常我们的页面会设置id=ap高度100%，滚动在app里面滚动或者其他内容滚动，这样这个功能就不适用了</font>
* 路由动画 

## Vue-Router 高级场景用法
* 页面过度动画
  ```
  <transition
    enter-active-class="animated bounceInRight"
    leave-active-class="animated bounceOutLeft">
  ```
* 页面过度加loading
```vue
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
```

* 信息判断
```vue
router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {   
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
        next()
    }
  } else {
    if (to.path !== '/login') {
        next({ path: '/login' })
    }
    next()
  }
})
```

* 字典获取
```vue
router.beforeEach((to, from, next) => {
  if (to.path === 'detail') {
    const dict = store.getters.dict
    if (!dict) {
      store.dispatch('GetDict').then(data => {
        next({ ...to, replace: true }) 
      })
    } else {
        next()
    }
  }
  next()
})
```

* 保存位置
```vue
  const routerList = getHistoryList()
  const routeLength = getHistoryLength()
  const len = history.length
  const isBack = getIsBack()
  // 后退或者替换
  if (len <= routeLength) {
    // 后退 替换 和 前进或者后退后又点击其他
    if (routerList.length && isBack) {
      popLastHistoryItem()
      to.meta.isBack = true
      // 前进
    } else if (routerList.length && routerList.indexOf(from.name) === routerList.length - 1) {
      to.meta.isBack = false
      } else {
        addHistoryItem(from.name || '/')
        to.meta.isBack = false
      }
      setHistoryLength(len)
    } else {
      addHistoryItem(from.name || '/')
      setHistoryLength(len)
      to.meta.isBack = false
    }
    setIsBack(true)
    next()
  })

  router.afterEach((to, from) => {
    setTimeout(() => {
      const len = history.length
      setHistoryLength(len)
    }, 50)
  })
```

* 动态路由

## Vue-Router 可能存在的问题
* scrollBehavior 不生效（可能就因为你的滚动不是body）
* routes 里面的属性不能动态修改
* router 只能添加，不能删除
...
