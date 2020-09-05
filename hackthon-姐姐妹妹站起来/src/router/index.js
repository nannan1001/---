// import Vue from 'vue'
import Vue from 'vue/dist/vue.common'
import Router from 'vue-router'
//  HelloWorldimport from '@/components/HelloWorld'
import Home from "@/components/Home";

import ProjectDetail from "@/components/project/ProjectDetail";


import Login from "@/components/login/Login";
import Findpassword from "@/components/login/Findpassword";
import Register_d from "@/components/login/Register_d";
import NoRedictDonateCard from "@/components/noRedictDonation/NoRedictDonateCard";


import Maincontrol from "@/components/Personal/Maincontrol";
import Love from "@/components/Personal/Love";
import History from "@/components/Personal/History";
import Personalcenter from "@/components/Personal/Personalcenter";

import Label from "@/components/noRedictDonation/Label"
import Label2 from "@/components/noRedictDonation/Label2"
import Label3 from "@/components/noRedictDonation/Label3"
import Label4 from "@/components/noRedictDonation/Label4"

import person from "@/components/noRedictDonation/person"

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../components/Home')
    },
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/projectList/projectDetail/:pro_id/',
      name: '项目详情',
      component: ProjectDetail,
      children: []
    },
    //{
      //path: '/Maincontrol/label',
      //name: '性挑逗',
      //component: Label
    //},

    
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/login/Findpassword',
      name: '重置密码',
      component: Findpassword,
    },
    {
      path: '/login/Register_d',
      name: '捐赠方注册',
      component: Register_d,
    },
    {
      path: '/Maincontrol/:user_id/',
      name: "个人中心",
      component: Maincontrol,
      children: [
        {
          path: '/Maincontrol/:user_id/',
          component: Personalcenter
        },
        {
          path: '/Maincontrol/love/:user_id/',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'Love',
          component: Love
        },
        {
          path: '/Maincontrol/history/:user_id/',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'History',
          component: History
        },
        {
          path: '/Maincontrol/personalcenter/:user_id/',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'Personalcenter',
          component: Personalcenter
        },
        {
          path: '/Maincontrol/noRedictDonate/:user_id/',
          name: 'NoRedictDonate',
          component: NoRedictDonateCard
        },
        {
          path: '/Maincontrol/label1/:user_id/',
          name: '性挑逗',
          component: Label
        },
        {
          path: '/Maincontrol/label2/:user_id/',
          name: '性贿赂',
          component: Label2
        },
        {
          path: '/Maincontrol/label3/:user_id/',
          name: '性胁迫',
          component: Label3
        },
        {
          path: '/Maincontrol/label4/:user_id/',
          name: '性迫害',
          component: Label4
        },
        {
          path: '/Maincontrol/person/:user_id/',
          name: '个人中心',
          component: person
        }

      ]
    }

  ]
})
