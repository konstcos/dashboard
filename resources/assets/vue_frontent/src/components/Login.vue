<template>
  <div class="login_form_block">
    <v-card
        class="login_form"
        title="Dashboard"
        subtitle="авторизуйтесь чтобы продолжить работу"
        color="grey-darken-3"
        width="400px"
    >
      <v-card-text>
        <v-text-field
            label="Email"
            v-model="email"
            variant="outlined"
            placeholder="Email"
            shaped
        ></v-text-field>

        <v-text-field
            label="Password"
            v-model="password"
            variant="outlined"
            placeholder="Password"
            type="password"
            shaped
        ></v-text-field>

        <div class="login_state">
          <div v-if="loginStateSlug === 'unknown_error'" class="server_error">Server error, please try again later.</div>
          <div v-else-if="loginStateSlug === 'wrong_login_data'" class="credentials_error">Wrong email or password</div>
          <div v-else-if="loginStateSlug === 'login_success'" class="success_login">Login success</div>
        </div>

        <v-btn
            :loading="loading"
            @click="makeLogin"
            type="flat"
            theme="dark"
        >
          Login
        </v-btn>
      </v-card-text>

    </v-card>
  </div>
</template>

<script>
import useAuthService from "@/services/AuthService";

export default {
  name: "Login",
  setup() {
    const {login} = useAuthService();
    return {login};
  },
  data() {
    return {
      loading: false,
      email: '',
      password: '',
      loginStateSlug: null
    };
  },
  methods: {
    async makeLogin() {
      this.loginStateSlug = null;
      this.loading = true;
      const result = await this.login(this.email, this.password);
      this.loginStateSlug = result.slug;
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">
.login_form_block {
  position: relative;
  height: 100vh;
  background: #7f8697;
}

.login_form {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.login_state {
  font-size: 14px;
  height: 35px;

  .server_error {
    color: #fbb2b2;
  }

  .credentials_error {
    color: #fbb2b2;
  }

  .success_login {
    color: #a6f1a6;
  }

}

</style>
