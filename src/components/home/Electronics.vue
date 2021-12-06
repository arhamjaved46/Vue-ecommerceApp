<template>
  <div class="mt-15 pt-8">
    <v-container>
      <div class="text-h5 mb-10 text-center">Latest in Electronic Products</div>
      <div class="d-flex flex-row flex-wrap">
        <ElectronicProducts
          v-for="items in electronicItems"
          :key="items.id"
          :items="items"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import ElectronicProducts from "./ElectronicProducts.vue";

export default {
  name: "Electronics",
  props: ["items"],
  components: {
    ElectronicProducts,
  },
  computed: {
    electronicItems() {
      return this.$store.state.electronicItems;
    },
  },
  mounted() {
    this.$store.dispatch("getElectronicItems");
  },
};
</script>

<style>
</style>