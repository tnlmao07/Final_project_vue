import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        uid:"",
        islogin:"",
        inCart:JSON.parse(localStorage.getItem('myCart'))?JSON.parse(localStorage.getItem('myCart')):[]
    },
    getters:{
        inCart: state=>state.inCart
    },
    mutations:{
        mylogin(state,payload){
            return state.islogin = payload.id,state.uid = payload.userId
        },
        ADD_TO_CART(state,id){state.inCart.push(id)},
    },
    actions:{
        islogin(context,payload){
            context.commit('mylogin',payload)
        },
        addToCart(context,id){context.commit('ADD_TO_CART',id)}
    },
})
