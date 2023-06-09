import IUser from "../type/user"

export const doLogout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const setUser = (user: IUser) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}
export const setToken = (token: string) => {
    return {
        type: 'SET_TOKEN',
        payload: token
    }
}