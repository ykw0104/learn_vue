1. 页面向服务器请求时需要的token可以在axios的拦截器里设置
2. 页面跳转需要验证是否登录了可以在路由的拦截器里设置

3. json-bigint处理ID长度过大引起的转换不准确, 不让axios默认用JSON.parse处理,使用axios的transformResponse
   自定义json-bigint处理
