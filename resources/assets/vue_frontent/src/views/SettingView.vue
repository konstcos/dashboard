<template>
  <v-container fluid>
    <h1>Настройки</h1>
    <v-row>
      <v-col>
        <ChangePassword />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChangePassword from "../components/ChangePassword";

export default {
  name: "SettingView",
  components: {
    ChangePassword,
  },
}
</script>

<style scoped>

</style>
