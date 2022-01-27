<template>
  <section>
    <section id="cart_items">
      <div class="container">
        <div class="breadcrumbs">
          <ol class="breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li class="active">Shopping Cart</li>
          </ol>
        </div>
        <div class="table-responsive cart_info">
          <table class="table table-condensed">
            <thead>
              <tr class="cart_menu">
                <td class="image">Item</td>
                <td class="description">Product</td>
                <td class="price">Price</td>
                <td class="quantity">Quantity</td>
                <td class="total">Total</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item of details" :key="item.pid">
                <td class="cart_product">
                  <router-link to="#"
                    ><img :src="server +item.productimagename" alt="" width="120" height="100"
                  /></router-link>
                </td>
                <td class="cart_description">
                  <h4>
                    <router-link to="#">{{ item.productname }}</router-link>
                  </h4>
                  <!-- <p>{{ item.p_code }}</p> -->
                </td>
                <td class="cart_price">
                  <p>Rs. {{ item.price }}</p>
                </td>
                <td class="cart_quantity">
                  <div>
                    <button @click="addQty(item)">+</button>
                    <input
                      class="text-center"
                      type="text"
                      name="quantity"
                      :value="item.quantity"
                      autocomplete="off"
                      size="2"
                      readonly
                    />
                    <button @click="subQty(item)">-</button>
                  </div>
                </td>
                <td class="cart_total">
                  <p class="cart_total_price">
                    Rs. {{ item.price * item.quantity }}
                  </p>
                </td>
                <td class="cart_delete">
                  <button class="cart_quantity_delete" @click="delItem(item)">
                    <i class="fa fa-times"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td colspan="4"></td>
                <td colspan="2">
                  <table class="table table-condensed total-result">
                    <tr>
                      <td>Total</td>
                      <td>
                        <span>Rs. {{ total() }} </span>
                      </td>
                    </tr><br>
                    <tr>
                      <td colspan="1"></td>
                      <td>
                        <router-link to="/checkout" @click="checkout()" class="btn btn-warning"
                          >Checkout</router-link
                        >
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <!--/#cart_items-->

    <section id="do_action">
      <div class="container">
        <div class="heading">
          <h3>What would you like to do next?</h3>
          <p>
            Choose if you have a discount code or reward points you want to use
            or would like to estimate your delivery cost.
          </p>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="chose_area">
              <ul class="user_option">
                <li>
                  <input type="checkbox" />
                  <label>Use Coupon Code</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Use Gift Voucher</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Estimate Shipping & Taxes</label>
                </li>
              </ul>
              <ul class="user_info">
                <li class="single_field">
                  <label>Country:</label>
                  <select>
                    <option>United States</option>
                    <option>Bangladesh</option>
                    <option>UK</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Ucrane</option>
                    <option>Canada</option>
                    <option>Dubai</option>
                  </select>
                </li>
                <li class="single_field">
                  <label>Region / State:</label>
                  <select>
                    <option>Select</option>
                    <option>Dhaka</option>
                    <option>London</option>
                    <option>Delhi</option>
                    <option>Lahore</option>
                    <option>Alaska</option>
                    <option>Canada</option>
                    <option>Dubai</option>
                  </select>
                </li>
                <li class="single_field zip-field">
                  <label>Zip Code:</label>
                  <input type="text" />
                </li>
              </ul>
              <a class="btn btn-default update" href="">Get Quotes</a>
              <a class="btn btn-default check_out" href="">Continue</a>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="total_area">
              <ul>
                <li>Cart Sub Total <span>$59</span></li>
                <li>Eco Tax <span>$2</span></li>
                <li>Shipping Cost <span>Free</span></li>
                <li>Total <span>$61</span></li>
              </ul>
              <a class="btn btn-default update" href="">Update</a>
              <a class="btn btn-default check_out" href="">Check Out</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/#do_action-->
  </section>
</template>

<script>
import store from "../store/store";
import * as type from "../store/types";
export default {
  name: "Cart",
  data() {
    return {
      details: undefined,
      quantity: 1,
      server: "http://127.0.0.1:8000/uploads/",
      check:undefined
    };
  },
  methods: {
    addQty(item) {
      let i = this.details.indexOf(item);
      this.details[i].quantity = this.details[i].quantity + 1;
      let arr = JSON.stringify(this.details);
      localStorage.setItem("myCart", arr);
      let ro = JSON.parse(localStorage.getItem("myCart"));
        store.dispatch({
              type: type.Rorders,
              id: ro,
        });
      
    },
    subQty(item) {
      let i = this.details.indexOf(item);
      if (item.quantity > 1) {
        this.details[i].quantity = this.details[i].quantity - 1;
        let arr = JSON.stringify(this.details);
        localStorage.setItem("myCart", arr);
        let ro = JSON.parse(localStorage.getItem("myCart"));
        store.dispatch({
              type: type.Rorders,
              id: ro,
            });
        
      } else {
        let arr = JSON.stringify(this.details);
        localStorage.setItem("myCart", arr);
        let ro = JSON.parse(localStorage.getItem("myCart"));
        store.dispatch({
              type: type.Rorders,
              id: ro,
            });
      }
    },
    total() {
      const items = JSON.parse(localStorage.getItem("myCart"));
      let sum = 0;
      items.forEach((item) => {
        sum = sum + item.price * item.quantity;
      });
      return sum;
    },
    delItem(item) {
      let i = this.details.indexOf(item);
      this.details.splice(i, 1);
      let arr = JSON.stringify(this.details);
      localStorage.setItem("myCart", arr);
      let ro = JSON.parse(localStorage.getItem("myCart"))
      this.$store.dispatch("remItem", arr);
      store.dispatch({
              type: type.ROrders,
              id: ro,
            });
    },
    checkout() {
      this.check = JSON.parse(localStorage.getItem("myCart"));
      console.log(this.check);
      let arr = JSON.stringify(this.check);
      console.log(arr);
      localStorage.setItem("myCheckout", JSON.stringify(arr));
    },
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem("myCart"));
    console.log(this.details);
    this.total();
  },
};
</script>

<style>
</style>