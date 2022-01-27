import axios from 'axios';
import {MAIN_URL} from '@/common/Url';


 export function userLogin(data)
 {
        return axios.post(`${MAIN_URL}login`,data)
 }
 export function userRegister(data)
 {
     return axios.post(`${MAIN_URL}register`,data)
 }
   
export function userContact(data)
{
    return axios.post(`${MAIN_URL}contactus`,data)
}

export function Category()
{
    return axios.get(`${MAIN_URL}category`)
}
export function Product()
{
    return axios.get(`${MAIN_URL}product`)
}
export function CMS()
{
    return axios.get(`${MAIN_URL}cms`)
}
export function CategoryProduct(id)
{
    return axios.get(`${MAIN_URL}categories/${id}`)
}
export function coupons()
{
    return axios.get(`${MAIN_URL}coupons`)
}
export function userOrders(data)
{
    return axios.post(`${MAIN_URL}order`,data)
}
export function userAddress(data)
{
    return axios.post(`${MAIN_URL}address`,data)
}

export default {userLogin,userRegister,userContact,Category,Product,CMS,CategoryProduct,coupons,userOrders,userAddress};