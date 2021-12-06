<template>
  <div>
    <v-card class="mx-auto py-3 my-10" max-width="400" elevation="2" outlined>
      <v-container style="width: 350px">
        <span class="text-h5 my-4">Awesome Shop</span>
        <div class="text-p">Create an account</div>
        <v-row class="my-0">
          <v-col>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                label="First Name"
                type="text"
                v-model="firstName"
                :rules="firstNameRules"
                required
              ></v-text-field>

              <v-text-field
                label="Last Name"
                type="text"
                v-model="lastName"
                :rules="lastNameRules"
                required
              ></v-text-field>

              <v-text-field
                label="Contact"
                type="number"
                v-model="contact"
                :rules="numberRules"
                required
              ></v-text-field>

              <v-text-field
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>

              <v-text-field
                label="Password"
                type="password"
                v-model="password"
                :rules="passwordRules"
                required
              ></v-text-field>

              <v-text-field
                label="Confirm Password"
                type="password"
                v-model="confirmPassword"
                :rules="passwordRules"
                required
              ></v-text-field>

              <v-checkbox
                label="Agree to terms and conditions"
                v-model="agreeToTerms"
                required
              ></v-checkbox>

              <v-btn
                class="mb-0"
                color="primary"
                block
                @click.prevent="handleSubmit"
              >
                Sign up
              </v-btn>
              <p class="text-center my-0">
                Already have an account?
                <router-link to="/awesome-shop/login" name="login"
                  >LOG IN</router-link
                >
              </p>
            </v-form>
            <v-btn class="my-0 mx-auto d-block" text>
              <router-link to="/" name="home" class="router-link"
                ><span class="link-color"> Back to Home </span>
              </router-link>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import {
  emailRegex,
  firstNameRegex,
  lastNameRegex,
  numberRegex,
  passwordRegex,
} from "@/validation/validations.js";

export default {
  name: "UserRegistration",
  data() {
    return {
      agreeToTerms: false,
      valid: true,
      emailRules: emailRegex,
      firstNameRules: firstNameRegex,
      lastNameRules: lastNameRegex,
      passwordRules: passwordRegex,
      confirmPasswordRules: passwordRegex,
      numberRules: numberRegex,

      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      password: "",
      confirmPassword: "",
      newUser: [],
      checkbox: false,
    };
  },
  created() {
    this.newUser = JSON.parse(localStorage.getItem("users") || "[]");
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        var user = {
          firstNameValue: this.firstName,
          lastNameValue: this.lastName,
          emailValue: this.email,
          passwordValue: this.password,
          confirmPasswordValue: this.password,
          numberValue: this.contact,
        };

        if (this.password === this.confirmPassword) {
          this.newUser.push(user);
          localStorage.setItem("users", JSON.stringify(this.newUser));
          this.$refs.form.reset();
          this.$alert("Your account has been created successfully.");
          this.$router.push({ name: "login" });
        } else {
          this.$alert("Please make sure your passwords match.");
        }
      } else {
        this.$alert("Can't create a new account.");
      }
    },
  },
};
</script>
