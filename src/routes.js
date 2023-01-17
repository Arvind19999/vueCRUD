import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
import AddResto from './components/AddResto.vue'
import UpdateResto from './components/UpdateResto.vue'
import { createWebHistory,createRouter } from 'vue-router'


const routes=[
    {
        name:'HomePage',
        path :'/',
        component:HomePage
    },
    {
        name:'SignUp',
        path:'/sign-up',
        component:SignUp
    },
    {
        name:'LoginPage',
        path:'/log-in',
        component:LoginPage
    },
    {
        name:'AddResto',
        path:'/add-resto',
        component:AddResto
    },
    {
        name:'UpdateResto',
        path:'/update-resto/:id',
        component:UpdateResto
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes

})

export default router