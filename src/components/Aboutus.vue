<template>
<div>
    
    <div v-for="item in data" v-bind:key="item.id" >
        <div>
            <h3>{{item.name}}</h3>
        </div>
        <div v-html="item.description">
            
        </div>
    </div>
</div>
    
</template>

<script>
import { CMS } from "../common/Service";

export default {
  name: "Aboutus",
  data(){
    return {
      data:undefined
    }
  },
  async mounted() {
    CMS().then((res) => {
      if (res) {
        console.log(res.data.cms);
        this.data=res.data.cms;
      } else {
        alert("Something wrong!");
      }
    });
  },
};
</script>

<style>
</style>