<template>
  <div class="mt-15">
    <v-container>
      <div class="head text-center mt-5 mb-8 text-h4">Our Return Policy</div>
      <v-card elevation="0" class="mt-10">
        <v-card-text style="color: #000">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
          velit pretium, lacinia odio at, aliquam nunc. Sed pellentesque viverra
          tellus, ut blandit augue imperdiet sed. Phasellus dapibus, lorem vitae
          placerat consectetur, ligula ligula eleifend sem, ac tincidunt nulla
          massa et quam. Morbi quis luctus massa. Cras ac turpis non nibh dictum
          efficitur ut nec nisl. Aliquam ullamcorper velit quis felis cursus,
          sit amet tempus mi gravida. Phasellus dictum, ex in fringilla
          volutpat, felis risus scelerisque ip8m, a blandit dui metus ac enim.
          Nulla pulvinar purus augue, vel vulputate mauris imperdiet iaculis.
          Etiam iaculis orci ex, at feugiat ligula dignissim quis. Morbi
          accumsan mattis vulputate. Sed eget imperdiet eros. Phasellus vitae
          consequat nisl, vitae feugiat lectus. Sed quis tortor viverra,
          consequat nunc sed, faucibus tellus. Suspendisse efficitur nisi
          sapien, sed scelerisque mi fermentum sed. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Donec
          egestas mauris a pharetra consequat. Vestibulum quis metus non nulla
          pharetra suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut eget augue nec erat luctus interdum. Proin venenatis lectus
          vel massa tempor imperdiet. Quisque scelerisque arcu id nulla cursus
          lacinia. Morbi convallis ultricies massa id rutrum. Proin eu rhoncus
          elit. Praesent sit amet aliquam ipsum. Aenean feugiat sem eu
          scelerisque laoreet. Aenean dolor tortor, varius id pulvinar ac,
          placerat at purus. Morbi blandit lectus ex, id euismod nibh maximus
          eget. Vivamus pretium enim nec nisi gravida semper. Fusce dictum, diam
          et ullamcorper congue, tortor nisi venenatis eros, nec luctus metus
        </v-card-text>
      </v-card>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer/Footer.vue";
export default {
  name: "ReturnPolicy",
  components: {
    Footer,
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