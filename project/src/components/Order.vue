<template>
    <div v-if="ordersCount">
      <h1>YOUR ORDERS</h1>
      <div>
        <div v-for="(order, orderIndex) in orders" :key="orderIndex" class="order-container">
          <div v-for="(item, itemIndex) in order" :key="itemIndex" class="order-item">
            <img :src="item.image" :alt="item.name" class="order-item-image">
            <div class="order-item-details">
              <p>{{ item.name }}</p>
              <p>Price: {{ item.price }} €</p>
            </div>
          </div>
          <div class="total-price-container">
            <p>Total Order Price: {{ calculateTotalOrderPrice(order) }} €</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no-orders">
      <p>No orders!</p>
    </div>
  </template>

  <script>
  import { useCartStore } from "../stores/CartStore";
  
  export default {
    data() {
      return {
        cartStore: useCartStore(),
      };
    },
    computed: {
      orders() {
        return this.cartStore.getOrders;
      },
      ordersCount() {
        return this.cartStore.getOrderItemCount;
      }
    },
    methods: {
      calculateTotalOrderPrice(order) {
        let totalOrderPrice = 0; //lepsie let ako const kedze tato hodnota sa moze menit pocas cyklu
        for (const item of order) { //lepsie pouzit of kedze vieme ze indexy su cele cisla a prepokladame ze objednavky su pole
          totalOrderPrice += item.price;
        }
        return totalOrderPrice;
      },
    },
  }; 
  </script>
  
<style scoped>

.no-orders{
  margin-top: 20px;
  font-weight: bold;
}
.order-container {
  max-width: 1400px; 
  margin: 0 auto; 
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
}

.order-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.order-item-image {
  width: 60px;
  height: auto;
  margin-right: 10px;
}

.total-price-container {
  text-align: right; 
  margin-top: 10px;
}
</style>