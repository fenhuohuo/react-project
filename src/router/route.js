import { lazy } from "react"

import Login from "../view/Login/index.js"

import Not from "../view/NotFound/index.js"

import Table from "../view/TableDriver/index.js"

import Equipment from "../view/Equipment/index.js"


//路由搭建
export const Routes=[
    {
        path:'/',
        // redirect:"/tabledriver"
    },
    {
        path:'/login',
        name:"login",
        element:lazy(()=>Login),
        meta:{
            title:"Login"
        }
    },
    {
        path:"/tabledriver",
        name:"tabledriver",
        element:lazy(()=>Table),
        meta:{
            title:"Table Driver"
        }
    },
    {
        path:"/Equipment",
        name:"equipment",
        element:lazy(()=>Equipment),
        meta:{
            title:"Equipment"
        }
    },
    {
        path:'/404',
        name:"404",
        element:lazy(()=>Not),
        meta:{
            title:"404"
        }
    }
]