<template>
  <div class="mt-15 pt-8">
    <v-container>
      <div class="text-h5 mb-10 text-center">Latest in Jewellery Products</div>
      <div class="d-flex flex-row flex-wrap">
        <JewelleryProducts
          v-for="items in jewelleryItems"
          :key="items.id"
          :items="items"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import JewelleryProducts from "./JewelleryProducts.vue";

export default {
  name: "Jewellery",
  props: ["items"],
  components: {
    JewelleryProducts,
  },
  computed: {
    jewelleryItems() {
      return this.$store.state.jewelleryItems;
    },
  },
  mounted() {
    this.$store.dispatch("getJewelleryItems");
  },
};
</script>

<style>
</style>