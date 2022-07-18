<template>
  <div>
    <v-row>
      <v-col cols="6">
        <h2>Проекты</h2>
      </v-col>
      <v-col cols="6" class="text-right">
        <v-btn
            size="small"
            icon
            @click="getProjects()"
            color="blue-darken-3"
        >
          <v-icon color="white">mdi-cached</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
          v-for="n in 4"
          :key="n"
          cols="4"
      >
        <v-card
            :title="`Project ${n}`"
            :subtitle="`работа, учеба, дом, подработка`"
            color="blue-darken-3"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
        ></v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import api from '@/api/projects';

export default defineComponent({
  name: 'List',
  data: () => {
    return {
      loading: false,
      page: 1,
    };
  },
  methods: {
    async getProjects() {
      this.loading = true;

      try {
        const result = await api.getProject(this.page);

        console.log('result', result)

        // if (result.status === 'success') {
        //
        // } else {
        //   this.errors.oldPassword = 'не правильный пароль'
        // }

      } catch (e) {
        // console.log('error', e)
      } finally {
        this.loading = false;
      }
    },
  },
  components: {},
  mounted() {
    this.getProjects();
  }
});
</script>

<style scoped>

</style>
