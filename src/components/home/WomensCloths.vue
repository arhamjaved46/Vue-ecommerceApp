<template>
  <div class="mt-15 pt-8">
    <v-container>
      <div class="text-h5 mb-10 text-center">Latest in Women's Cloths</div>
      <div class="d-flex flex-row flex-wrap">
        <WomensClothsProducts
          v-for="items in womensItems"
          :key="items.id"
          :items="items"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import WomensClothsProducts from "./WomensClothsProducts.vue";

export default {
  name: "WomensCloths",
  props: ["items"],
  components: {
    WomensClothsProducts,
  },
  computed: {
    womensItems() {
      return this.$store.state.womensItems;
    },
  },
  mounted() {
    this.$store.dispatch("getWomensItems");
  },
};
</script>

<style>
</style>