<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <v-card height="auto" max-width="270" elevation="0" class="py-5 px-2 mx-auto">
      <router-link 
        :to="{ name: 'productdetail', params: { id: items.id } }"
        class="text-decoration-none"  
      >
      <v-img :src="items.image" height="250" contain></v-img>
      <v-card-subtitle>{{ items.category }}</v-card-subtitle>

      <v-card-text style="color: #000">
        {{ items.title }}
      </v-card-text>
      </router-link>
      <v-row class="ml-4 mb-3">
        <v-rating
          :value="items.rating.rate"
          dense
          half-increments
          readonly
          size="18"
        ></v-rating>
        <span class="ml-2 text-p">{{ items.rating.count }}</span>
      </v-row>

      <v-row class="ml-4 mr-4 mt-4 mb-5">
        <v-btn color="primary" outlined @click="addToCart()">Add to cart</v-btn>
        <v-spacer></v-spacer>
        <span class="font-weight-medium text-p">${{ items.price }}</span>
      </v-row>
    </v-card>
    
  </div>
</template>

<script>
export default {
  name: "WomensClothsProducts",
  props: ["items","id"],

  methods: {
    addToCart() {
      this.$store.dispatch("addItemToCart", {
        item: this.items,
        quantity: 1,
      });
    },
  },
};
</script>

<style>
</style>