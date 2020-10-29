import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth,
            }
        case GET_CAPTCHA_URL:
            debugger;
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

const getCaptchaUrl = (captchaUrl) => ({
    type: GET_CAPTCHA_URL,
    payload: { captchaUrl },
})

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login }, isAuth, });

export const getAuthUserDataThunkCreator = () => async (dispatch) => {
    let data = await authAPI.getAuthUserData();

    if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

}

export const authorizeByLogin = (formData) => async (dispatch) => {
    let data = await authAPI.authorizeByLogin(formData);
    if (data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator());
    } else {
        if (data.resultCode === 10) {
            let captchaUrl = await securityAPI.getCaptchaUrl()
            .then((data) => {
                return data.url;                
            });
            dispatch(getCaptchaUrl(captchaUrl)); 
        }
        let messages = (data.messages.length > 0) ? data.messages[0] : 'Common Error';
        dispatch(stopSubmit('login', { _error: messages }));
    }
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
        
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
