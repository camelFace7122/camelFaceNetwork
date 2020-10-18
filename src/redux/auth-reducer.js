import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth,
            }
        default:
            return state;
    }
}

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
