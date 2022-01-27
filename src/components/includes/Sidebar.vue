<template>
  <div class="col-sm-3">
    <div class="left-sidebar">
      <h2>Category</h2>
      <div class="panel-group category-products" id="accordian">
        <!--category-productsr-->
        <div
          class="panel panel-default"
          v-for="item in categories"
          v-bind:key="item.id"
        >
          <div class="panel-heading">
            <h4 class="panel-title">
              <router-link :to="`/category/${item.id}`">{{
                item.name
              }}</router-link>
            </h4>
          </div>
        </div>
      </div>
      <!--/category-products-->

      <div class="shipping text-center">
        <!--shipping-->
        <img src="images/home/shipping.jpg" alt="" />
      </div>
      <!--/shipping-->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);
import { Category } from "../../common/Service";
import { mapState } from "vuex";
export default {
  name: "Sidebar",
  data() {
    return {
      categories: undefined,
    };
  },
  computed: mapState({
    msg: (state) => state.uid,
    login: (state) => state.islogin,
  }),
  async mounted() {
    Category().then((res) => {
      if (res) {
        this.categories = res.data.category;
      } else {
        alert("Something wrong!");
      }
    });
  },
};
</script>
<style>
</style>