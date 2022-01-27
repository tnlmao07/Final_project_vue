<template>
  <header id="header">
    <!--header-->
    <div class="header_top">
      <!--header_top-->
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="contactinfo">
              <ul class="nav nav-pills">
                <li>
                  <router-link to="#"
                    ><i class="fa fa-phone"></i> +2 95 01 88 821</router-link
                  >
                </li>
                <li>
                  <router-link to="#"
                    ><i class="fa fa-envelope"></i> info@domain.com</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="social-icons pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <router-link to="#"
                    ><i class="fa fa-facebook"></i
                  ></router-link>
                </li>
                <li>
                  <router-link to="#"
                    ><i class="fa fa-twitter"></i
                  ></router-link>
                </li>
                <li>
                  <router-link to="#"
                    ><i class="fa fa-linkedin"></i
                  ></router-link>
                </li>
                <li>
                  <router-link to="#"
                    ><i class="fa fa-dribbble"></i
                  ></router-link>
                </li>
                <li>
                  <router-link to="#"
                    ><i class="fa fa-google-plus"></i
                  ></router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header_top-->

    <div class="header-middle">
      <!--header-middle-->
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="logo pull-left">
              <a to="index.html"><img src="images/home/logo.png" alt="" /></a>
            </div>
            <div class="btn-group pull-right">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-default dropdown-toggle usa"
                  data-toggle="dropdown"
                >
                  USA
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li><router-link to="#">Canada</router-link></li>
                  <li><router-link to="#">UK</router-link></li>
                </ul>
              </div>

              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-default dropdown-toggle usa"
                  data-toggle="dropdown"
                >
                  DOLLAR
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li><router-link to="#">Canadian Dollar</router-link></li>
                  <li><router-link to="#">Pound</router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="shop-menu pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <router-link to="#"
                    ><i class="fa fa-user"></i> Account</router-link
                  >
                </li>
                <li>
                  <router-link to="#"
                    ><i class="fa fa-star"></i> Wishlist</router-link
                  >
                </li>
                <li>
                  <router-link to="checkout.html"
                    ><i class="fa fa-crosshairs"></i> Checkout</router-link
                  >
                </li>
                <li>
                  <router-link to="/cart"
                    ><i class="fa fa-shopping-cart"></i><sup id="a">{{numInCart}}</sup> Cart</router-link
                  >
                </li>
                <li>
                  <router-link to="/Login" v-if="!login"
                    ><i class="fa fa-lock"></i> Login</router-link
                  >
                </li>
                <li>
                  <router-link to="#" v-if="login"
                    >Welcome : {{ msg }}</router-link
                  >
                </li>
                <li>
                  <router-link to="/" v-if="login" @click.native="logout()"
                    >Logout</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-middle-->

    <div class="header-bottom">
      <!--header-bottom-->
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="mainmenu pull-left">
              <ul class="nav navbar-nav collapse navbar-collapse">
                <li><router-link to="/" class="active">Home</router-link></li>
                <li class="dropdown">
                  <router-link to="#"
                    >Shop<i class="fa fa-angle-down"></i
                  ></router-link>
                  <ul role="menu" class="sub-menu">
                    <li><router-link to="shop.html">Products</router-link></li>
                    <li>
                      <router-link to="product-details.html"
                        >Product Details</router-link
                      >
                    </li>
                    <li>
                      <router-link to="checkout.html">Checkout</router-link>
                    </li>
                    <li><router-link to="/cart">Cart</router-link></li>
                    <li>
                      <router-link to="/login" v-if="!login">Login</router-link>
                    </li>
                    <li>
                      <router-link to="#" v-if="login"
                        >Welcome : {{ msg }}</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/" v-if="login" @click.native="logout()"
                        >Logout</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a to="#">Blog<i class="fa fa-angle-down"></i></a>
                  <ul role="menu" class="sub-menu">
                    <li><router-link to="blog.html">Blog List</router-link></li>
                    <li>
                      <router-link to="blog-single.html"
                        >Blog Single</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li><a to="404.html">404</a></li>
                <li>
                  <router-link to="/contact">Contact Us </router-link>
                </li>
                <li>
                  <router-link to="/aboutus">About Us </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="search_box pull-right">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-bottom-->
  </header>
</template>

<script>
import axios from "axios";
import { getToken } from "../common/Jwttoken";
import store from "../store/store";
import * as type from "../store/types";
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: mapState({
    msg: (state) => state.uid,
    login: (state) => state.islogin,
    numInCart(){return this.inCart.length},
    inCart(){return this.$store.getters.inCart}
  }),

  data() {
    return { email: localStorage.getItem("uid") };
  },
  methods: {
    logout() {
      const token = getToken();
      const url = "http://127.0.0.1:8000/api/logout/";
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const data = token;
      console.log(config);
      //return axios.post(`${MAIN_URL}login`,data)
      axios.post(`${url}`, data, config).then((res) => {
        this.$router.push("/login");
        localStorage.clear();
        store.dispatch({
          type: type.Islogin,
          id: null,
          userId: null,
        });
        console.log(res.data.message);
      });
    },
    show() {
      if ("id_token" in localStorage) {
        store.dispatch({
          type: type.Islogin,
          id: getToken(),
          userId: localStorage.getItem("uid"),
        });
      }
    },
  },
  mounted: function mounted() {
    this.show();
  },
};
</script>

<style>
</style>