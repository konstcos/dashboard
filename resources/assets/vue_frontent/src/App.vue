<template>
  <v-app>
    <div v-if="login">
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
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block @click="login = false">
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
                  label="Name"
                  v-model="first"
                  variant="outlined"
                  placeholder="Name"
                  shaped
              ></v-text-field>

              <v-text-field
                  label="Password"
                  v-model="first"
                  variant="outlined"
                  placeholder="Password"
                  type="password"
                  shaped
              ></v-text-field>

              <v-btn @click="login = true" type="flat" theme="dark">
                Login
              </v-btn>
            </v-card-text>

          </v-card>
        </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',

  data() {
    return {
      drawer: true,
      login: false,
    }
  },
})
</script>

<style lang="scss">
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

</style>
