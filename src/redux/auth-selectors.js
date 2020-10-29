export const getIsAuth = (state) => {
    return state.auth.isAuth;
}

export const getCaptcha = (state) => {
    return state.auth.captchaUrl;
}

export const getLogin = (state) => {
    return state.auth.login;
}

export const getUserId = (state) => {
    return state.auth.userId;
}

export const getUserPhoto = (state) => {
    if (state.profilePage.profile) {
        return state.profilePage.profile.photos.small;
    } 
    return null;
} 