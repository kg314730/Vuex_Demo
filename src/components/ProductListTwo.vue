<template>
    <div id="product-list-two">
      <h2>Product List Two</h2>
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
    </div>
  </template>
  
  <script>
  
  export default {
    computed:{
        products(){
            return this.$store.state.products;
        },
        //getters
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
        saleProducts(){
            return this.$store.getters.saleProducts;
        }
    }
  }
  </script>
  
  <style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
  