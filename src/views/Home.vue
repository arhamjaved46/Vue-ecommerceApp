<template>
  <div>
    <Slider />
    <v-container>
      <div class="mt-10 mb-10">
        <LatestCollections />
        <h2 class="mt-10 mb-10 text-center">Trending in Electronics</h2>
        <div class="d-flex flex-row flex-wrap">
          <ElectronicProducts
            v-for="items in electronicItems"
            :key="items.id"
            :items="items"
          />
        </div>
        <h2 class="mt-10 mb-10 text-center">Trending in Men's Cloths</h2>
        <div class="d-flex flex-row flex-wrap">
          <MensClothsProducts
            v-for="items in mensItems"
            :key="items.id"
            :items="items"
          />
        </div>
        <h2 class="mt-10 mb-10 text-center">Trending in Jewllery</h2>
        <div class="d-flex flex-row flex-wrap">
          <JewelleryProducts
            v-for="items in jewelleryItems"
            :key="items.id"
            :items="items"
          />
        </div>
        <h2 class="mt-10 mb-10 text-center">Trending in Women's Cloths</h2>
        <div class="d-flex flex-row flex-wrap">
          <WomensClothsProducts
            v-for="items in womensItems"
            :key="items.id"
            :items="items"
          />
        </div>
      </div>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Slider from "@/components/home/Slider.vue";
import LatestCollections from "@/components/home/LatestCollections.vue";
import ElectronicProducts from "@/components/home/ElectronicProducts.vue";
import MensClothsProducts from "@/components/home/MensClothsProducts.vue";
import JewelleryProducts from "@/components/home/JewelleryProducts.vue";
import WomensClothsProducts from "@/components/home/WomensClothsProducts.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "Home",
  components: {
    Slider,
    LatestCollections,
    ElectronicProducts,
    MensClothsProducts,
    JewelleryProducts,
    WomensClothsProducts,
    Footer,
  },
  mounted() {
    this.$store.dispatch("getElectronicItems");
    this.$store.dispatch("getMensItems");
    this.$store.dispatch("getWomensItems");
    this.$store.dispatch("getJewelleryItems");
  },
  computed: {
    electronicItems() {
      return this.$store.state.electronicItems.slice(0, 4);
    },
    mensItems() {
      return this.$store.state.mensItems.slice(0, 4);
    },
    jewelleryItems() {
      return this.$store.state.jewelleryItems.slice(0, 4);
    },
    womensItems() {
      return this.$store.state.womensItems.slice(0, 4);
    },
  },
};
</script>

<style>
</style>