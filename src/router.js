import VueRouter from 'vue-router'

//导入account组件
import account from './main/account.vue'

//导入goodlist组件
import goodlist from './main/goodlist.vue'

//导入子路由组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

//创建路由
var router = new VueRouter({
    routes:[
        
    
    ],
})

//向外暴露router对象
export default router