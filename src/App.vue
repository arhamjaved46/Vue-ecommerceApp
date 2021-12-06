<template>
  <v-app>
    <div
      v-show="
        $route.path === '/awesome-shop/create-an-account' ||
        $route.path === '/awesome-shop/login'
          ? false
          : true
      "
    >
      <Navbar />
    </div>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./views/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar,
  },
};
</script>
<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>