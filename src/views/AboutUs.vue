<template>
  <div class="mt-15">
    <v-container>
      <div class="head text-center mt-5 mb-8 text-h4">About Awesome Shop</div>
      <v-card elevation="0" >
        <v-card-text style="color: #000">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
          velit pretium, lacinia odio at, aliquam nunc. Sed pellentesque viverra
          tellus, ut blandit augue imperdiet sed. Phasellus dapibus, lorem vitae
          placerat consectetur, ligula ligula eleifend sem, ac tincidunt nulla
          massa et quam. Morbi quis luctus massa. Cras ac turpis non nibh dictum
          efficitur ut nec nisl. Aliquam ullamcorper velit quis felis cursus,
          sit amet tempus mi gravida. Phasellus dictum, ex in fringilla
          volutpat, felis risus scelerisque ipsum, a blandit dui metus ac enim.
          Nulla pulvinar purus augue, vel vulputate mauris imperdiet iaculis.
          Etiam iaculis orci ex, at feugiat ligula dignissim quis. Morbi
          accumsan mattis vulputate. Sed eget imperdiet eros. Phasellus vitae
          consequat nisl, vitae feugiat lectus. Sed quis tortor viverra,
          consequat nunc sed, faucibus tellus. Suspendisse efficitur nisi
          sit amet tempus mi gravida. Phasellus dictum, ex in fringilla
          volutpat, felis risus scelerisque ipsum, a blandit dui metus ac enim.
          Nulla pulvinar purus augue, vel vulputate mauris imperdiet iaculis.
          Etiam iaculis orci ex, at feugiat ligula dignissim quis. Morbi
          accumsan mattis vulputate. Sed eget imperdiet eros. Phasellus vitae
          consequat nisl, vitae feugiat lectus. Sed quis tortor viverra,
          consequat nunc sed, faucibus tellus. Suspendisse efficitur nisi
        </v-card-text>
      </v-card>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer/Footer.vue";
export default {
  name: "AboutUs",
  components: {
    Footer
  }
};
</script>

<style>
.head {
  background-color: #f3f3f3;
  padding: 100px;
  border-radius: 10px;
}
</style>