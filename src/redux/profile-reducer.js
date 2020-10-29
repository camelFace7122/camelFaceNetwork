import { stopSubmit } from 'redux-form';
import { profileAPI } from '../api/api'
import { showGlobalError } from './app-reducer';

const ADD_POST = 'profilePage/ADD_POST';
const SET_USER_PROFILE = 'profilePage/SET_USER_PROFILE';
const SET_USER_STATUS = 'profilePage/SET_USER_STATUS';
const DELETE_POST = 'profilePage/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profilePage/SAVE_PHOTO_SUCCESS';
const SET_PROFILE_UPDATE_STATUS = 'profilePage/SET_PROFILE_UPDATE_STATUS'

let initialState = {
    posts: [
        { id: 1, message: 'This is the main event of the evening!', likesCount: '0' },
        { id: 2, message: 'Wow, is it me?', likesCount: '15' },
        { id: 3, message: 'Catch me, if you can, man', likesCount: '329' },
    ],
    profile: null,
    profileUpdateStatus: 'none',
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 4, message: action.post, likesCount: 228 }]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId),
            }
        case SAVE_PHOTO_SUCCESS: 
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case SET_PROFILE_UPDATE_STATUS:
            return {
                ...state,
                profileUpdateStatus: action.profileUpdateStatus,
            }
        default:
            return state;
    }
}

export const addPost = (post) => {
    return {
        type: ADD_POST,
        post,
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId,
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status,
    }
}

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos,
    }
}

const setProfileUpdateStatus = (profileUpdateStatus) => {
    return {
        type: SET_PROFILE_UPDATE_STATUS,
        profileUpdateStatus,
    }
}

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId)

    dispatch(setUserProfile(data));
}

export const getUserStatusTC = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserStatus(userId);

    dispatch(setUserStatus(data))
}

export const updateUserStatusTC = (status) => async (dispatch) => {
    try {
        let data = await profileAPI.updateUserStatus(status);

        if (data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    } catch(error) {
        dispatch(showGlobalError(error.response.request.status));
        setTimeout(() => {
            dispatch(showGlobalError(null))
        }, 10000);
    }
}

export const savePhoto = (photos) => async (dispatch) => {
    let data = await profileAPI.savePhoto(photos);

    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
}

export const saveProfileEdit = (profileData) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let data = await profileAPI.saveProfileEdit(profileData);
    if (data.resultCode === 0) {
        await dispatch(getUserProfileThunkCreator(userId));
        dispatch(setProfileUpdateStatus('success'));
    } else {
        let messages = (data.messages.length > 0) ? data.messages[0] : 'Common Error';
        dispatch(stopSubmit('edit-profile', { _error: messages }));
        dispatch(setProfileUpdateStatus('error'));
    }
}

export default profileReducer;