import { profileAPI } from '../api/api'

const ADD_POST = 'profilePage/ADD_POST';
const SET_USER_PROFILE = 'profilePage/SET_USER_PROFILE';
const SET_USER_STATUS = 'profilePage/SET_USER_STATUS';
const DELETE_POST = 'profilePage/DELETE_POST';

let initialState = {
    posts: [
        { id: 1, message: 'This is the main event of the evening!', likesCount: '0' },
        { id: 2, message: 'Wow, is it me?', likesCount: '15' },
        { id: 3, message: 'Catch me, if you can, man', likesCount: '329' },
    ],
    profile: null,
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
        default:
            return state;
    }
}

export let addPost = (post) => {
    return {
        type: ADD_POST,
        post,
    }
}

export let deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId,
    }
}

export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}

export let setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status,
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
    let data = await profileAPI.updateUserStatus(status);
    
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export default profileReducer;