<template>
  <div>
    <v-app-bar elevation="2" fixed class="navbar">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>

      <v-toolbar-title class="pl-0"><b>Awesome Shop</b></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" text>
          <router-link to="/" name="home" class="router-link"
            ><span class="link-color"> Home </span>
          </router-link>
        </v-btn>
        <v-btn to="collections" text>
          <router-link to="/collections" name="collections" class="router-link">
            <span class="link-color">Collections</span>
          </router-link></v-btn
        >
        <v-btn to="return-policy" text>
          <router-link
            to="/return-policy"
            name="return-policy"
            class="router-link"
            ><span class="link-color">Return Policy</span>
          </router-link></v-btn
        >
        <v-btn to="about-us" text
          ><router-link to="/about-us" name="about-us" class="router-link">
            <span class="link-color">About Us</span>
          </router-link></v-btn
        >
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn title="Search" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn title="Cart" to="/cart" class="cart" icon>
          <router-link to="/cart" name="cart" class="router-link">
            <v-icon color="grey darken-2">mdi-shopping</v-icon>
            <div class="cart-count">{{ countItems }}</div>
          </router-link>
        </v-btn>

        <v-btn title="Account" to="login" icon v-if="!user">
          <router-link to="/awesome-shop/login" name="login" class="router-link">
            <v-icon color="grey darken-2">mdi-account-circle</v-icon>
          </router-link>
        </v-btn>

        <v-btn title="Dashboard" to="dashboard" icon v-if="user">
          <router-link to="/dashboard" name="login" class="router-link">
            <v-icon color="grey darken-2">mdi-view-dashboard</v-icon>
          </router-link>
        </v-btn>

        <v-btn title="logout" @click.prevent="logout" text v-if="user">
          <router-link to="/awesome-shop/login" name="login" class="router-link">
            <v-icon color="grey darken-2">mdi-logout</v-icon>
          </router-link>
        </v-btn>

      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item-group v-model="drawer">
          <v-list-item>
            <router-link to="/" name="home" class="router-link"
              ><span class="link-color"> Home </span>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link
              to="/collections"
              name="collections"
              class="router-link"
            >
              <span class="link-color">Collections</span>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link
              to="/return-policy"
              name="return-policy"
              class="router-link"
              ><span class="link-color">Return Policy</span>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/about-us" name="about-us" class="router-link">
              <span class="link-color">About Us</span>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      drawer: false,
      user: ""
    };
  },
  mounted() {
    if(localStorage.currentUser) {
      let activeUser = localStorage.currentUser;
      this.user = JSON.parse(activeUser);
    }
  },
  computed: {
    countItems() {
      return this.$store.getters.countItems;
    },
  },
  methods: {
    logout() {
      localStorage.removeItem('currentUser');
      this.$router.push("/awesome-shop/login");
      window.location.reload();
    }
  }
};
</script>

<style>
.navbar {
  position: relative;
}
.router-link {
  text-decoration: none;
}

.link-color {
  color: #333;
}

.cart {
  position: relative;
}
.cart-count {
  height: 17px;
  width: 17px;
  background: #333;
  position: absolute;
  border-radius: 100%;
  color: #fff;
  text-align: center;
  font-size: 10px;
  top: 0;
  right: 5px;
  padding: 0.5px;
}
</style>