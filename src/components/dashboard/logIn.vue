<template>
  <v-card class="mx-auto py-3 card-login" max-width="400" elevation="2" outlined>
    <v-container style="width: 350px">
      <span class="text-h5 mb-4">Awesome Shop</span>
      <div class="text-p">Log In</div>
      <v-row class="my-0">
        <v-col>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              label="Email"
              type="email"
              v-model="email"
              required
            ></v-text-field>

            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              class="mb-3"
            ></v-text-field>
            <v-btn block color="primary" @click.prevent="logIn"> Login </v-btn>
          </v-form>

          <p class="text-center mb-0">
            New User?
            <router-link
              to="/awesome-shop/create-an-account"
              name="create-an-account"
            >
              Create an account</router-link
            >
          </p>
          <v-btn class="my-0 mx-auto d-block" text>
            <router-link to="/" name="home" class="router-link"
              ><span class="link-color"> Back to Home </span>
            </router-link>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      valid: true,
      email: "",
      password: "",
      newUser: [],
    };
  },

  methods: {
    logIn() {
      if (this.email && this.password !== "") {
        this.newUser = JSON.parse(localStorage.getItem("users"));
        this.currentUser = this.newUser.find((e) => {
          return e.emailValue == this.email && e.passwordValue == this.password;
        });
        if (this.currentUser) {
          localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
          this.$router.push({ name: "dashboard" });
          window.location.reload();
        } else {
          this.$alert("Your account doesn't exist.");
        }
      } else {
        this.$alert("Email and password are required.");
      }
    },
  },
};
</script>

<style>
.card-login {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>