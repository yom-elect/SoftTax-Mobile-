import * as actionTypes from '../actionConstants/actionConstants'

const INITIAL_STATE = {
    error :null,
    loading: false
}


const registerReducer = (state =INITIAL_STATE, action)=>{
    switch (action.type){
        case actionTypes.REGISTER_START:
            return {
                ...state,
                error:null,
                loading: true,
            }
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                error:null,
                loading:false,
            }
        case actionTypes.REGISTER_FAIL:
            return {
                ...state,
                error:action.error,
                loading: false,
            }
        default:
            return state
    }
}

export default registerReducer;