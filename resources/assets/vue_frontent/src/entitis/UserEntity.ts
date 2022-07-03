import {reactive, toRefs} from "vue"

interface userDataType {
    id: number,
    token: null | string,
    logged: boolean,
    name: string,
    email: string,
    isConfirmed: boolean,
    createdAt: string,
    updatedAt: string,
}

interface userStateType {
    user: userDataType,
}

const state = reactive({
   user: {
       id: 0,
       token: null,
       logged: false,
       name: "",
       email: "",
       isConfirmed: true,
       createdAt: "",
       updatedAt: "",
   }
} as userStateType);

export default function useUser() {
    const setToken = (token: string) => {
        state.user.token = token;
        return true;
    }
    const getToken = () => {
        return state.user.token;
    }
    const clearToken = () => {
        state.user.token = null;
        return true;
    }
    const fillUserData = (info: any) => {
        state.user.id = info.id;
        state.user.email = info.email;
        state.user.name = info.name;
        state.user.createdAt = info.created_at;
        state.user.updatedAt = info.updated_at;
        state.user.logged = true;
    }
    const isLogged = () => {
        return state.user.logged
    }
    const getUserData = () => {
        return {
            id: state.user.id,
            email: state.user.email,
            name: state.user.name,
            createdAt: state.user.createdAt,
            updatedAt: state.user.updatedAt,
        }
    }
    const clearAllUserData = () => {
        state.user.id = 0;
        state.user.token = null;
        state.user.logged = false;
        state.user.name = "";
        state.user.email = "";
        state.user.isConfirmed = true;
        state.user.createdAt = "";
        state.user.updatedAt = "";
    }

    return {
        setToken,
        getToken,
        clearToken,
        fillUserData,
        getUserData,
        isLogged,
        clearAllUserData,
    }
}
