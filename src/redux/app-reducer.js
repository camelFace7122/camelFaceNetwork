import { getAuthUserDataThunkCreator } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';
const SHOW_GLOBAL_ERROR = 'app/SHOW_GLOBAL_ERROR';

let initialState = {
    initialized: false,
    globalError: null,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        case SHOW_GLOBAL_ERROR: 
            return {
                ...state,
                globalError: action.globalError,
            }
        default: 
            return state;
    }

}  

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch) => {
    await dispatch(getAuthUserDataThunkCreator());
    dispatch(initializedSuccess());
}

export const showGlobalError = (globalError) => ({type: SHOW_GLOBAL_ERROR, globalError});

export default appReducer;