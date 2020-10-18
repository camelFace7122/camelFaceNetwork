import { usersAPI } from '../api/api';
import {followUnfollowSwitcher} from '../utils/reducerHelpers'

const UNFOLLOW = 'usersPage/UNFOLLOW';
const FOLLOW = 'usersPage/FOLLOW';
const SET_USERS = 'usersPage/SET_USERS';
const SET_CURRENT_PAGE = 'usersPage/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'usersPage/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'usersPage/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'usersPage/TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    fake: 10,
};

const usersReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: followUnfollowSwitcher(state.users, action.userId, 'id', {followed: true}),
            }

        case UNFOLLOW:
            return {
                ...state,
                users: followUnfollowSwitcher(state.users, action.userId, 'id', {followed: false}),
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId),
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId })

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount - 6700));
    dispatch(toggleIsFetching(false));
}

export const changePageThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(toggleIsFetching(false));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}

export const unfollowThunkCreator = (userId) => async (dispatch) => {

    await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}

export const followThunkCreator = (userId) => async (dispatch) => {

    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export default usersReducer;
