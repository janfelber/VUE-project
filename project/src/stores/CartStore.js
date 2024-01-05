import { defineStore } from "pinia";
import products from '../products.json'
export const useCartStore = defineStore('cartStore', {
    state: () => ({
        count: 0,
        ordersCount: 0,
        products: products,
        cart: [],
        orders: []


    }),
    getters: {
        getProductId: (state) => (productId) => {
            return state.products.find(product => product.id === productId);
        },
        totalSum: (state) => {
            return state.cart.reduce((sum, product) => sum + product.price, 0);
        },
        getCartItemCount: (state) => state.count,
        getOrderItemCount: (state) => state.ordersCount,
        getCart() {
            return this.cart;
        },
        getOrders() {
            return this.orders;
        }
        

    },
    actions: {
        addToCart(productId) {
            if (this.getProductId(productId)) {

                this.cart.push(this.getProductId(productId));

                this.count++;

                console.log(this.cart);
            } else {
                console.warn(`Product with ID ${productId} not found.`);
            }
        },

        removeFromCart(cartItemId) {
            const index = this.cart.findIndex(product => product.id === cartItemId);

            if (index !== -1) {
                this.cart.splice(index, 1);
                this.count--;

                console.log(this.cart);

            } else {
                console.warn(`Product with ID ${cartItemId} not found in the cart.`);
            }
        },
        addToOrders() {
            this.orders.push(this.cart)

            this.ordersCount++;

            this.cart = []
            this.count = 0

            console.log(this.orders)

        }

    }

})


