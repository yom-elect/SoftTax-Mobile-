import * as actionTypes from '../actionConstants/actionConstants'
import { AsyncStorage } from '@react-native-community/async-storage'



export const authStart = ()=>{
    return {
        type: actionTypes.AUTH_START,
    }
}

export const authSuccess = (token)=>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        idToken: token,
    }
}

export const authFail = (error)=>{
    return {
        type:actionTypes.AUTH_FAIL,
        error: error,
    }
}

export const authLogout = () =>{
    AsyncStorage.removeItem('token')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const login = (email, password)=>{
    return async dispatch => {
        try{
        dispatch(authStart())
        const authData = {
            Username: email,
            Password: password
        }
        let url = "http://192.168.200.38/mobile/auth/Login"
        const response = await fetch(url,{
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body : JSON.stringify(authData)

        })
        if (!response.ok){
            const errorResData = await response.json()
            const errorId = errorResData.error.message
            let message = 'Something went wrong!'
            if(errorId=== 'EMAIL_NOT_FOUND'){
                message = 'This email could not be found!'
            }else if (errorId === 'INVALID_PASSWORD'){
                message = 'This password is not valid!'
            }
         throw new Error(message)
        }

        const resData = await response.json()
        dispatch(authSuccess(resData.Data))
        AsyncStorage.setItem('token' ,resData.Data)
        }catch (err) {
            dispatch(authFail(err))
        }
        
    }
}