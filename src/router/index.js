import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Main from '../components/Main.vue'
import Contact from '../components/Contact.vue'
import Login from '../components/Login.vue'
import Checkout from '../components/Checkout.vue';
import ProductDetails from '../components/ProductDetails.vue';
import Cart from '../components/Cart.vue';
import Aboutus from '../components/Aboutus.vue';
import Products from '../components/Products.vue';
export default new Router({
    routes:[
        {
            path:'/',
            name:'Main',
            component:Main
        },
        {
            path:'/contact',
            name:'Contact',
            component:Contact
        },
        {
            path:'/login',
            name:'Login',
            component:Login
        },
        {
            path:'/Checkout',
            name:'Checkout',
            component:Checkout
        },
        {
            path:'/cart',
            name:'Cart',
            component:Cart
        },
        {
            path:'/productdetails',
            name:'ProductDetails',
            component:ProductDetails
        },
        {
            path:'/aboutus',
            name:'Aboutus',
            component:Aboutus
        },
        {
            path:'/category/:id',
            name:'Products',
            component:Products
        },

    ]
})