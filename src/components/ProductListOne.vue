<template>
    <div id="product-list-one">
      <h2>Product List One</h2>
      <ul>
        <li v-for="(product, idx) in products" :key="idx">
            <span class="name">{{product.name}} </span>
            <span class="price">$${{product.price}}</span>
        </li>
      </ul>
      <ul>
        <p>Sale</p>
        <li v-for="(product, idx) in saleProducts" :key="idx">
            <span class="name">{{product.name}} </span>
            <span class="price">$${{product.price}}</span>

        </li>
      </ul>
      <br><br>
      <button v-on:click="reducePrice(4)">Reduce Price</button>
    </div>
  </template>
  
  <script>
  //Mapping actions and getters to components
  // run this command in terminal: npm install babel-preset-stage-2 --save-dev
  
  import { mapActions,mapGetters } from 'vuex';
  export default {
    computed:{
        products(){
            return this.$store.state.products;
        },
        // saleProducts(){
        //     var saleProducts = this.$store.state.products.map(
        //         product =>{
        //             return {
        //                 name:'**'+product.name+"**",
        //                 price: product.price / 2,
        //             }
        //         }
        //     );
        //     return saleProducts;
        // }
        // saleProducts(){
        //     return this.$store.getters.saleProducts;
        // }

        //mapping
        ...mapGetters({
            saleProducts:'saleProducts'
        })
    },
    methods:{
        // reducePrice:function(time){
        //     //Directly committing the mutation
        //     // this.$store.commit('reducePrice')

        //     //Dispatching action which will then commit the mutation (good practice)
        //     //this.$store.dispatch('reducePrice');
        //     this.$store.dispatch('reducePrice',time);
            

        // }
        ...mapActions({
            reducePrice:'reducePrice'
        })
    }

  }
  </script>
  
  <style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
  