### 路由模式

**例如 实现/detail/:id 和 /detail的拦截**

* hash
  > 利用url的fragment的改变而触发的事件进行页面无刷新操作
  <br/><br/>
  
  > 优点：支持范围广、操作简单

  > 缺点：原本的fragment功能不能用了（可以用scrollIntoView修复）


* history
  > H5 state 功能实现
  <br/><br/>
  
  > 优点：美观，可以进行对象数据传递（vue-router这块进行了数据覆盖，   
             不能进行对象传递）

  > 缺点：路由地址url变化，跳转需要绝对地址、需要服务器拦截（不然刷
              新页面会丢失）
* abstract
  > 内部缓存实现，小程序、weex才会用到，不进行具体描述
