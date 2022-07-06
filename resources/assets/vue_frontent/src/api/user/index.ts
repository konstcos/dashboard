import {appFetch} from "@/utilites/appFetch";
import {User as routes} from "@/api/routes";

export default {
    async login(email, password) {
        return await appFetch(routes.Login, {
              email: email,
              password: password,
        });
    },
    async getUser() {
        return await appFetch(routes.User);
    },
    async logout() {
        return await appFetch(routes.Logout);
    },
    async changePassword(oldPassword, newPassword) {
        return await appFetch(routes.PasswordChange, {
            old_password: oldPassword,
            new_password: newPassword
        })
    }
} as Api
