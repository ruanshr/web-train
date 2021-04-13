### 路由匹配

**例如 实现/detail/:id 和 /detail的拦截**

* 方式1
```
    {
      path: '/detail/:id',
      alias: '/detail',
      name: 'detail',
      component: Detail
    }
```

* 方式2
```
    {
      path: '/detail/:id?',
      alias: '/detail',
      name: 'detail',
      component: Detail
    }
```
* 方式3
```
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
```  
<font color="#f00">注： path的路径正则不是一个完整的正则匹配，对于负责匹配可能会有问题，建议复杂的可以使用别名</font>