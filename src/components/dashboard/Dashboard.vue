<template>
  <div class="mt-15">
    <v-container>
      <div class="d-flex justify-space-between pt-4 mb-0">
        <div>
          <div class="text-h5">Hello, {{ user.firstNameValue }}</div>
          <div>Welcome to Awesome Shop, below is your profile details.</div>
          <v-simple-table class="my-5 bordered">
            <template>
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>{{ user.firstNameValue }}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{{ user.lastNameValue }}</td>
                </tr>
                <tr>
                  <td>Email Address</td>
                  <td>{{ user.emailValue }}</td>
                </tr>
                <tr>
                  <td>Contact Number</td>
                  <td>{{ user.numberValue }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="mb-5">You can also update your profile.</div>
           <router-link to="/update-profile" name="updateProfile" class="router-link">
          <v-btn color="primary" elevation="2"> Update </v-btn>
          </router-link>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    if (localStorage.currentUser) {
      let currentUser = localStorage.currentUser;
      this.user = JSON.parse(currentUser);
    }
  },
  methods: {
    logout() {
      this.$router.push({ name: "login" });
      this.$store.state.authenticated = false;
    },
  },
};
</script>

<style>
.bordered {
  border: 1px solid lightgrey;
}
</style>