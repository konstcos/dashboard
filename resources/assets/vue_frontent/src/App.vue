<template>
  <v-app>
    <div v-if="isLogged()">
      <v-app-bar color="blue-darken-4" density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Dashboard</v-app-bar-title>

      </v-app-bar>
      <v-navigation-drawer v-if="drawer" permanent theme="dark">

        <v-list
            density="compact"
            nav
        >
          <v-list-item to="/" prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item to="/setting" prepend-icon="mdi-cog-outline" title="Settings" value="setting"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn :loading="loading" block @click="makeLogout()">
              Logout
            </v-btn>
          </div>
        </template>

      </v-navigation-drawer>
      <v-main>
        <router-view/>
      </v-main>
    </div>
    <div v-else>
      <Login></Login>
    </div>
  </v-app>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Login from '../src/components/Login.vue'
import useUser from "@/entitis/UserEntity";
import useAuthService from "@/services/AuthService";

export default defineComponent({
  name: 'App',
  setup() {
    const {isLogged} = useUser();
    const {checkLogin, logout} = useAuthService();
    return {isLogged, checkLogin, logout};
  },
  components: {
    Login
  },
  data() {
    return {
      drawer: true,
      loading: false,
    }
  },
  methods: {
    async makeLogout() {
      this.loading = true;
      await this.logout();
      this.loading = false;
    }
  },
  mounted() {
    this.checkLogin()
  }
})
</script>

<style lang="scss">


</style>
