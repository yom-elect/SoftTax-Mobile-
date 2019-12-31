import * as actionTypes from '../actionConstants/actionConstants'

const INITIAL_STATE = {
    error :null,
    loading: false,
    userData : null,
}


const searchReducer = (state =INITIAL_STATE, action)=>{
    //console.log(action.error)
    switch (action.type){
        case actionTypes.SEARCH_START:
            return {
                ...state,
                error:null,
                loading: true,
            }
        case actionTypes.SEARCH_SUCCESS:
            return {
                ...state,
                error:null,
                loading:false,
                userData : action.userInfo
            }
        case actionTypes.SEARCH_FAIL:
            return {
                ...state,
                error:action.error,
                loading: false,
            }
        default:
            return state
    }
}

export default searchReducer;