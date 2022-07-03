<template>
  <v-container fluid>
    <v-row dense>
      <v-col

          v-for="n in 4"
          :key="n"
          cols="4"
      >
        <v-card
            :title="`Project ${n}`"
            :subtitle="`Subtitle for Content ${n}`"
            color="blue-darken-3"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'HomeView',

  components: {},
});
</script>
