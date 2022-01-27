<template>
  <section id="form">
    <!--form-->
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-sm-offset-1">
          <div class="login-form">
            <!--login form-->
            <h2>Login to your account</h2>
            <form @submit.prevent="postLogin()">
              <input type="email" placeholder="Email Address" v-model="email" />
              <input
                type="password"
                placeholder="Password"
                v-model="password"
              />

              <span>
                <input type="checkbox" class="checkbox" />
                Keep me signed in
              </span>
              <button type="submit" class="btn btn-default">Login</button>
            </form>
          </div>
          <!--/login form-->
        </div>
        <div class="col-sm-1">
          <h2 class="or">OR</h2>
        </div>
        <div class="col-sm-4">
          <div class="signup-form">
            <!--sign up form-->
            <h2>New User Signup!</h2>
            <form @submit.prevent="postRegister()">
              <input type="text" placeholder="Name" v-model="name_res" />
              <input
                type="email"
                placeholder="Email Address"
                v-model="email_res"
              />
              <input
                type="password"
                placeholder="Password"
                v-model="password_res"
              />
              <input
                type="password"
                placeholder="Password"
                v-model="cpassword_res"
              />
              <button type="submit" class="btn btn-default">Signup</button>
            </form>
          </div>
          <!--/sign up form-->
        </div>
      </div>
    </div>
  </section>
  <!--/form-->
</template>

<script>
import Vue from "vue";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
import store from "../store/store";
import * as type from "../store/types";
import { userLogin } from "@/common/Service";
import { userRegister } from "@/common/Service";
import { saveToken } from "@/common/Jwttoken";
import { mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      name_res: null,
      email_res: null,
      password_res: null,
      cpassword_res: null,
    };
  },
  computed: mapState({
    msg: (state) => state.uid,
    login: (state) => state.islogin,
  }),
  methods: {
    postLogin() {
      let formData = { email: this.email, password: this.password };
      userLogin(formData)
        .then((res) => {
          if (res) {
            console.log(res);
            saveToken(res.data.token);
            localStorage.setItem("uid", res.data.email);
            store.dispatch({
              type: type.Islogin,
              id: res.data.token,
              userId: res.data.email,
            });
            //console.log(res.data);
            this.$router.push("/");
		this.$swal(res.data.message);
          }
        })
        .catch((error) => {
		this.$swal("Invalid Credentials"+error);
        });
    },
    postRegister() {
      if (this.password_res == this.cpassword_res) {
        let formData = {
          name: this.name_res,
          email: this.email_res,
          password: this.password_res,
          password_confirmation: this.cpassword_res,
        };
        userRegister(formData)
          .then((res) => {
            if (res) {
              //console.log(res.data);
              this.$router.push("/login");
              let r=this.$swal("User Added. Please Login!");
              if(r){
                location.reload();
              }
            } 
          })
          .catch((error) => {
		this.$swal("Invalid input "+error);
          });
      } else {
        alert("password not match.. confirm password!");
      }
    },
  },
};
</script>

<style>
</style>