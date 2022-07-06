import {appFetch} from "@/utilites/appFetch";

export default {
    async login(email, password) {
        return await appFetch('login', {
              email: email,
              password: password,
        });
    },
    async getUser() {
        return await appFetch('user');
    },
    async logout() {
        return await appFetch('logout');
    },
    async changePassword(oldPassword, newPassword) {
        return await appFetch('password/change', {
            old_password: oldPassword,
            new_password: newPassword
        })
    }
} as Api
