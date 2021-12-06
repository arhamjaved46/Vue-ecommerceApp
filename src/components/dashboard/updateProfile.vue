<template>
  <div class="mt-15 pt-8">
    <v-container class="mt-5 px-10 py-8 wrap">
      <div class="text-center text-h5 mb-5">Update Profile</div>
      <v-text-field
        v-model="firstName"
        label="First name"
        required
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        label="Last name"
        required
      ></v-text-field>
      <v-text-field v-model="email" label="Email" required></v-text-field>
      <v-text-field v-model="number" label="Contact" required></v-text-field>
      <v-text-field v-model="password" label="Password" required></v-text-field>
      <div class="text-center">
        <v-btn @click="updateProfile()" color="primary">
          Update</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "updateProfile",
  data() {
    return {
      valid: true,
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
    };
  },
  created() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.firstName = this.currentUser.firstNameValue;
    this.lastName = this.currentUser.lastNameValue;
    this.email = this.currentUser.emailValue;
    this.password = this.currentUser.passwordValue;
    this.number = this.currentUser.numberValue;
  },
  methods: {
    updateProfile() {
      this.users = JSON.parse(localStorage.getItem("users"));
      this.index = this.users.findIndex((x) => x.email == this.e);
      this.users[this.index] = {
        emailValue: this.email,
        firstNameValue: this.firstName,
        lastNameValue: this.lastName,
        passwordValue: this.password,
        confirmPasswordValue: this.password,
        numberValue: this.number,
      };
      localStorage.setItem("users", JSON.stringify(this.users));
      localStorage.setItem(
        "currentUser",
        JSON.stringify(this.users[this.index])
      );
      this.$alert(
        "Your account has been successfully updated"
      );
      this.$router.push("/awesome-shop/login");
    },
  },
};
</script>

<style>
.wrap {
  width: 400px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  margin: auto;
}
</style>