import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        "API-KEY": "76654ab4-13c6-418e-b77e-6191b76d0efc",
    },
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow: (id) => {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    unfollow: (id) => {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
}

export const authAPI = {
    getAuthUserData: () => {
        return instance.get(`auth/me`).then(response => response.data);
    },
    authorizeByLogin: ({email, password, rememberMe = false}) => {
        return instance.post(`auth/login`, {
            email, password, rememberMe,
        }).then(response => response.data);
    },
    logout: () => {
        return instance.delete(`auth/login`).then(response => response.data);
    }
}

export const profileAPI = { 
    getUserProfile: (id) => {
        return instance.get(`profile/${id}`).then(response => response.data);
    },
    getUserStatus: (userId) => {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data
        });
    },
    updateUserStatus: (status) => {
        return instance.put(`profile/status/`, {
            status: status,
        }).then(response => response.data)
    }
}
