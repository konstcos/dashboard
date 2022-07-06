
interface Api {
    login: (email: string, password: string) => Promise<any>,
    getUser: () => Promise<any>,
    logout: () => Promise<any>,
    changePassword: (oldPassword: string, newPassword: string) => Promise<any>,
}
