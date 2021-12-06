<template>
  <div>
    <v-container>
      <h2 class="text-center">Latest Collections</h2>
      <v-row class="mt-10">
        <v-col md="3" sm="6">
          <router-link
            to="/latest-collections/electronics"
            name="electronics"
            class="text-decoration-none"
          >
            <v-card class="card">
              <v-img
                src="@/assets/img/img5.jpg"
                height="250"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6"
                ><span class="link-color"> Electronics </span></v-card-title
              >
            </v-card>
          </router-link>
        </v-col>
        <v-col md="3" sm="6">
          <router-link
            to="/latest-collections/mens-cloths"
            name="menscloths"
            class="text-decoration-none"
          >
            <v-card class="card">
              <v-img
                src="@/assets/img/img6.jpg"
                height="250"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6"
                ><span class="link-color"> Men's Cloth</span>
              </v-card-title>
            </v-card>
          </router-link>
        </v-col>
        <v-col md="3" sm="6">
          <router-link
            to="/latest-collections/jewellery"
            name="jewellery"
            class="text-decoration-none"
          >
            <v-card class="card">
              <v-img
                src="@/assets/img/img7.jpg"
                height="250"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6"
                ><span class="link-color"> Jewellery </span></v-card-title
              >
            </v-card>
          </router-link>
        </v-col>
        <v-col md="3" sm="6">
          <router-link
            to="/latest-collections/womens-cloths"
            name="womenscloths"
            class="text-decoration-none"
          >
            <v-card class="card">
              <v-img
                src="@/assets/img/img8.jpg"
                height="250"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                <span class="link-color">Women's Cloth </span></v-card-title
              >
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LatestCollections",
};
</script>

<style>
.link-color {
  color: #000;
}
</style>