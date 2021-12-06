<template>
  <div>
    <v-carousel
      cycle
      height="530"
      hide-delimiter-background
      show-arrows-on-hover
      hide-delimiters
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>

    export default {
    name: "Slider",
    data() {
        return {
        items: [
            {
            src: require("@/assets/img/img4.png"),
            },
            {
            src: require("@/assets/img/img2.png"),
            },
            {
            src: require("@/assets/img/img1.png"),
            },
        ]
        };
    },
    };

</script>

<style>
</style>