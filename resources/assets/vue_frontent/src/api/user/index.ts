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
} as Api
