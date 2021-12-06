<template>
  <div class="mt-15 pt-8">
    <v-container>
      <div class="text-h5 mb-10 text-center">Latest in Men's Cloths</div>
      <div class="d-flex flex-row flex-wrap">
        <MensClothsProducts
          v-for="items in mensItems"
          :key="items.id"
          :items="items"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import MensClothsProducts from "./MensClothsProducts.vue";

export default {
  name: "MensCloths",
  props: ["items"],
  components: {
    MensClothsProducts,
  },
  computed: {
    mensItems() {
      return this.$store.state.mensItems;
    },
  },
  mounted() {
    this.$store.dispatch("getMensItems");
  },
};
</script>

<style>
</style>