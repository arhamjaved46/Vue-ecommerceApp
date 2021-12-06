<template>
  <div class="mt-15 pt-5">
    <v-container class="mb-5">
      <v-row>
        <v-col md="8" sm="12">
          <v-card class="cart-item" elevation="2" outlined>
            <v-container>
              <div class="d-flex justify-space-between" v-if="countItems != 0">
                <div class="text-h5 px-5 py-5">
                  My Shopping Cart ({{ countItems }})
                </div>
                <v-btn text color="primary" class="text-p mx-5 mt-5" @click.prevent="clearCartItems()">Clear all</v-btn>
              </div>
              <div class="text-center" v-else>
                <div class="text-h6 px-5 py-5 text--secondary">Your shopping cart is empty</div>
              </div>
              <v-card
                class="my-3"
                outlined
                v-for="items in cart"
                :key="items.item.id"
                elevation="2"
              >
                <v-list-item>
                  <v-list-item-avatar tile height="120" width="120">
                    <v-img :src="items.item.image"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content class="mx-3 my-3">
                    <v-list-item-title class="text-h6 ml-4">
                      ${{ items.item.price }} x {{ items.quantity }}
                    </v-list-item-title>
                    <v-list-item-subtitle
                      ><span class="text-h6 ml-4 pb-5"
                        >{{ items.item.title }}
                      </span></v-list-item-subtitle
                    >

                    <v-card-actions>
                      <v-btn color="red" text @click.prevent="removeItemFromCart(items.item)"> Remove </v-btn>
                    </v-card-actions>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-container>
          </v-card>
        </v-col>
        <v-col md="4" sm="12">
          <v-card class="cart-total" elevation="2" outlined>
            <v-container>
              <v-card-title> Summary </v-card-title>
              <hr />
              <div class="d-flex justify-space-between">
                <div class="text-p px-4 py-3">Total Items</div>
                <div class="text-p px-4 py-3">{{ countItems }}</div>
              </div>
              <div class="d-flex justify-space-between">
                <div class="text-p px-4 py-3">Shipping Charges</div>
                <div class="text-p px-4 py-3">$0</div>
              </div>
              <div class="d-flex justify-space-between">
                <div class="text-p px-4 py-3">Discount</div>
                <div class="text-p px-4 py-3">$0</div>
              </div>
              <hr />
              <div class="d-flex justify-space-between">
                <div class="text-h6 px-4 py-3">Total Amount</div>
                <div class="text-h6 px-4 py-3">${{ cartTotalPrice }}</div>
              </div>
              <v-btn block color="primary" class="my-2" @click.prevent="checkOut"> Check Out </v-btn>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer/Footer.vue";
export default {
  name: "Cart",
  components: {
    Footer,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    countItems() {
      return this.$store.getters.countItems;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    removeItemFromCart(item) {
      this.$store.dispatch('removeItemFromCart', item);
    },
    clearCartItems() {
      this.$store.dispatch('clearCartItems');
    },
    checkOut() {
      if (localStorage.currentUser) {
      let currentUser = localStorage.currentUser;
      this.user = JSON.parse(currentUser);
      this.$alert(" Thanks " + this.user.firstNameValue + " for shopping! ");
    }
    }
  }
};
</script>

<style scoped>

.cart-item {
  height: 600px;
  overflow: scroll;
  overflow-x: hidden;
}

.cart-total {
  min-height: 360px;
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 10px;
}
</style>