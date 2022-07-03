import api from '@/api/user'
import useUser from "@/entitis/UserEntity";
const {setToken, fillUserData, clearAllUserData} = useUser();


export default function useAuthService() {
    const login = async (email: string, password: string) => {
        try {
            const loginResult = await api.login(email, password);

            if(loginResult.status !== 'success') {
                return {
                    status: 'fail',
                    slug: 'wrong_login_data',
                    message: 'Wrong login data',
                }
            }

            // процесс авторизации
            const getUserResult = await loginProcessing(loginResult.token)

            if (! getUserResult) {
                logout();
            }

            return {
                status: 'success',
                slug: 'login_success',
                message: 'Login success'
            }

        } catch (e) {
            return {
                status: 'fail',
                slug: 'unknown_error',
                message: 'Unknown error'
            }
        }
    };

    const logout = () => {
        // очистка локалстореджа
        localStorage.clear()
        // отправка запроса на сервер на разлогин
        api.logout()
        // очистка данных пользователя
        clearAllUserData()
    }

    const checkLogin = async () => {
        // выборка токена из локалстореджа
        const userToken = localStorage.getItem('auth_token');
        if (userToken) {
            const getUserResult = await loginProcessing(userToken)
            if (! getUserResult) {
                logout();
            }
        }
        return false;
    }

    const loginProcessing = async (token: string) => {
        // сохранение в локалсторедже
        localStorage.setItem('auth_token', token);
        // сохранение токена в модели
        setToken(token)
        // воборка данных пользователя с сервера
        try {
            const userResult = await api.getUser();

            if (userResult.status !== 'success') {
                return false;
            }

            // заполняем модель пользователя
            fillUserData(userResult.user)

            return true;

        } catch (e) {
            return false;
        }
    }

    return {
        login,
        logout,
        checkLogin,
    }
}
