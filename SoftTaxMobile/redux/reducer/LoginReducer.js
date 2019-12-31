import * as actionTypes from '../actionConstants/actionConstants'

const INITIAL_STATE = {
    isSignedIn: false,
    token: null,
    error: null,
    loading: false,
}

const loginReducer = (state= INITIAL_STATE, action)=>{
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                error:null,
                loading: true,
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.idToken,
                error:null,
                loading:false,
                isSignedIn:true,
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error:action.error,
                loading: false,
            }
        case actionTypes.AUTH_LOGOUT:
            return INITIAL_STATE;
        default:
            return state
    }
}

export default loginReducer;