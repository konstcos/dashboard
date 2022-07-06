<template>
  <div class="change_password_component">
    <h2>Изменение пароля</h2>

    <v-row class="mt-2">
      <v-col cols="4">
        <VTextField
            v-model="oldPassword"
            :class="{error_message: errors.oldPassword.length > 0}"
            label="Old password"
            density="compact"
            variant="outlined"
            type="password"
            :error-messages="errors.oldPassword"
        ></VTextField>
      </v-col>
      <v-col cols="4">
        <VTextField
            theme="dark"
            v-model="newPassword"
            :class="{error_message: errors.newPassword.length > 0}"
            label="New password"
            density="compact"
            variant="outlined"
            type="password"
            :error-messages="errors.newPassword"
        ></VTextField>
      </v-col>
      <v-col cols="4">
        <VTextField
            theme="dark"
            v-model="confirmationNewPassword"
            :class="{error_message: errors.confirmationNewPassword.length > 0}"
            label="Password confirmation"
            density="compact"
            variant="outlined"
            type="password"
            :error-messages="errors.confirmationNewPassword"
        ></VTextField>
      </v-col>
    </v-row>
    <div v-if="successChange" class="success_message">
      Пароль успешно изменен
    </div>
    <VBtn
        @click="change"
        :loading="loading"
        color="blue-grey"
        density="compact"
    >
      Сохранить
    </VBtn>

  </div>
</template>

<script>
import api from '@/api/user';

export default {
  name: "ChangePassword",
  data: () => {
    return {
      loading: false,
      oldPassword: '',
      newPassword: '',
      confirmationNewPassword: '',
      errors: {
        oldPassword: '',
        newPassword: '',
        confirmationNewPassword: '',
      },
      successChange: false,
    };
  },
  methods: {
    async change() {
      // вывести все параметры с trim
      const oldPassword = this.oldPassword.trim();
      const newPassword = this.newPassword.trim();
      const confirmationNewPassword = this.confirmationNewPassword.trim()

      this.errors.oldPassword = ''
      this.errors.newPassword = '';
      this.errors.confirmationNewPassword = '';
      this.successChange = false;

      let abort = false;

      if (oldPassword === '') {
        this.errors.oldPassword = 'заполните поле'
        abort = true;
      }

      if (newPassword === '') {
        this.errors.newPassword = 'заполните поле'
        abort = true;
      }

      if (confirmationNewPassword === '') {
        this.errors.confirmationNewPassword = 'заполните поле'
        abort = true;
      }

      if (abort) {
        return false;
      }

      // проверить чтобы все пароли были заполненны (если пустое поле - выходим)
      if (this.newPassword !== this.confirmationNewPassword) {
        this.errors.confirmationNewPassword = 'пароль не соответствует введенному'
        return false;
      }


      this.loading = true;

      try {
        const result = await api.changePassword(this.oldPassword, this.newPassword);

        if (result.status === 'success') {
          this.oldPassword = '';
          this.newPassword = '';
          this.confirmationNewPassword = '';
          this.successChange= true;
          setInterval(() => {
            this.successChange= false;
          }, 3000)
        } else {
          this.errors.oldPassword = 'не правильный пароль'
        }

      } catch (e) {
        console.log('error', e)
      } finally {
        this.loading = false;
      }

    },
  },
}
</script>

<style lang="scss">

.change_password_component {
  background: #686868;
  padding: 15px 25px 15px;
  margin: 10px 15px;
  border-radius: 10px;
}

.error_message {
  .v-messages {
    color: #8d0404 !important;
  }
}

.success_message {
  color: #68f568;
  font-size: 12px;
  margin-bottom: 10px;
}

</style>
