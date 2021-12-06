<template>
  <div>
    <v-container class="mt-15 pt-10">
      <v-row>
        <v-col sm="6" md="6" class="text-center">
          <v-card elevation="0" class="mx-auto">
            <v-card-text class="text-h5" style="color: #000">
              {{ items.title }}
            </v-card-text>
            <div class="img-size">
              <v-img :src="items.image" height="250" contain></v-img>
            </div>
            <v-card-subtitle>Category : {{ items.category }}</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col sm="6" md="6">
          <v-card elevation="0">
              <v-card-text class="text-h5">Description</v-card-text>
            <v-card-text class="text-p" style="color: #000">
              {{ items.description }}
            </v-card-text>
            <v-row class="ml-4 mb-3 mt-1">
              <v-rating
                :value="items.rating.rate"
                dense
                half-increments
                readonly
                size="18"
              ></v-rating>
              <span class="ml-2 text-p">{{ items.rating.count }}</span>
            </v-row>

              <v-row class="ml-4 mr-4 mt-4 mb-5 mt-10">
                <v-btn color="primary" outlined @click="addToCart()"
                  >Add to cart</v-btn
                >
                <span class="font-weight-medium text-h6 ml-5"
                  >${{ items.price }}</span
                >
              </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["id"],
  mounted() {
    this.$store.dispatch("getItem", this.id);
  },

  computed: {
    items() {
      return this.$store.state.item;
    },
  },

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