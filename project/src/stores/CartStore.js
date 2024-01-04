import { defineStore } from "pinia";
import products from '../products.json'
export const useCartStore = defineStore('cartStore', {
    state: () => ({
        count: 0,
        products: products,
        cart: []

    }),
    getters: {
        getProductId: (state) => (productId) => {
            return state.products.find(product => product.id === productId);
        },
        totalSum: (state) => {
            return state.cart.reduce((sum, product) => sum + product.price, 0);
        },
        getCartItemCount: (state) => state.count

    },
    actions: {
        addToCart(productId) {
            if (this.getProductId(productId)) {

                this.cart.push(this.getProductId(productId));

                this.count++;

                console.log(this.cart);
                console.log("addToCart");
            } else {
                console.warn(`Product with ID ${productId} not found.`);
            }
        },
        getCart() {
            return this.cart;
        },
        removeFromCart(cartItemId) {
            const index = this.cart.findIndex(product => product.id === cartItemId);

            if (index !== -1) {
                this.cart.splice(index, 1);
                this.count--;
                console.log(this.cart);
                console.log("remove from cart");

            } else {
                console.warn(`Product with ID ${cartItemId} not found in the cart.`);
            }
        }

    }

})


