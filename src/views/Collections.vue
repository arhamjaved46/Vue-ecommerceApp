<template>
  <div class="mt-15">
    <v-container>
      <div class="bg-img mt-5 mb-5"></div>
      <div class="d-flex flex-row flex-wrap">
        <AllCollections
          v-for="items in allItems"
          :key="items.id"
          :items="items"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import AllCollections from "@/components/collections/AllCollections.vue";
export default {
  name: "Collections",
  components: {
    AllCollections
  },
  computed: {
    allItems() {
      return this.$store.state.allItems;
    },
  },
  mounted() {
    this.$store.dispatch("getAllItems");
  },
};
</script>

<style>
.bg-img {
  background-image: url("../assets/img/img3.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  width: 100%;
  border-radius: 10px;
}
</style>