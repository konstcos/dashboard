<template>
  <v-container fluid>
    <List></List>
  </v-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import List from "@/components/Projects/List.vue";

export default defineComponent({
  name: 'HomeView',

  components: {
    List
  },
});
</script>
