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
        }

    },
    actions: {
        addToCart(productId) {
            console.log("addToCart");

            if (this.getProductId(productId)) {

                this.cart.push(this.getProductId(productId));

                this.count++;

                console.log(this.cart);
            } else {
                console.warn(`Product with ID ${productId} not found.`);
            }
        }
    }

})


