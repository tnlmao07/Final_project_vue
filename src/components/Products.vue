<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <Sidebar />

          <div class="col-sm-9 padding-right">
            <div class="features_items">
              <!--features_items-->
              <h2 class="title text-center">Features Items</h2>
              <div class="col-sm-4" v-for="pro of productData" :key="pro.id">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <router-link :to="`/productdeatils/${pro.id}`">
                        <img
                          class="card-img-top"
                          :src="server + pro.image_name"
                          width="250"
                          height="250"
                          alt="card image"
                        />
                      </router-link>
                      <h2>{{pro.price}}</h2>
                      <p>{{pro.name}}</p>
                      <a @click="
                          addtocart(
                            pro.id,
                            pro.quantity,
                            pro.name,
                            pro.image_name,
                            pro.price
                          )
                        " href="#" class="btn btn-default add-to-cart"
                        ><i class="fa fa-shopping-cart"></i>Add to cart</a
                      >
                    </div>
                   
                  </div>
                  
                </div>
              </div>
             
              
            </div>
          </div>

          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import { CategoryProduct } from "../common/Service.js";
import Sidebar from "../components/includes/Sidebar.vue";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);
export default {
  name: "Products",
  components: {
    Sidebar,
  },
  data() {
    return {
      productData: undefined,
      param: undefined,
      server: "http://127.0.0.1:8000/uploads/",
      data:undefined
    };
  },
  methods:{
       addtocart(id, quantity, name, image_name, price) {
      // alert(id);
      if (localStorage.getItem("myCart") != undefined) {
        let arr = JSON.parse(localStorage.getItem("myCart"));
        let obj = {
          pid: id,
          quantity: 1,
          productname: name,
          price: price,
          productimagename: image_name,
        };
        arr.push(obj);
        localStorage.setItem("myCart", JSON.stringify(arr));
        this.$store.dispatch("addToCart", arr);
		this.$swal("Added successfully", "", "success");
      } else {
        let arr = [];
        let obj = {
          pid: id,
          quantity: 1,
          productname: name,
          price: price,
          productimagename: image_name,
        };
        arr.push(obj);
        localStorage.setItem("myCart", JSON.stringify(arr));
        this.$store.dispatch("addToCart", arr);
		this.$swal("Added successfully", "", "success");
      }
    },
  },
  mounted(){
    CategoryProduct(this.param).then((res) => {
      console.log(res.data.categoryProducts);
      this.productData = res.data.categoryProducts;
    });
  },
  watch: {
    $route(to) {
      this.param = to.params.id;
      console.log(this.param);
      CategoryProduct(this.param).then((res) => {
        this.productData = res.data.categoryProducts;
        console.log(res.data.categoryProducts);
        // window.location.reload();
      });
    },
  },
  created() {
    this.param = this.$route.params.id;
  },
};
</script>

<style>
</style>