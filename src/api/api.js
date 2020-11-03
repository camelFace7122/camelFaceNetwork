import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        "API-KEY": "56ae4f9d-aa33-4257-bd1c-153e752c804b",
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
    authorizeByLogin: ({email, password, rememberMe = false, captcha}) => {
        return instance.post(`auth/login`, {
            email, password, rememberMe, captcha,
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
    },

    savePhoto: (photos) => {
        const formData = new FormData();
        formData.append("image", photos);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(response => {
            return response.data
        })
    },

    saveProfileEdit: (profile) => {
        return instance.put(`profile`, profile )
        .then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaUrl: () => {
        return instance.get('/security/get-captcha-url')
        .then(response => response.data);
    }
}
