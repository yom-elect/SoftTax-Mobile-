import * as actionTypes from '../actionConstants/actionConstants'
import { AsyncStorage } from 'react-native'



export const regStart = ()=>{
    return {
        type: actionTypes.REGISTER_START,
    }
}

export const regSuccess = (token)=>{
    return {
        type:actionTypes.REGISTER_SUCCESS,
    }
}

export const regFail = (error)=>{
    return {
        type:actionTypes.REGISTER_FAIL,
        error: error,
    }
}

export const registerTaxPayer = (taxPayerData, type) =>{
    return async dispatch =>{
        try{
             dispatch(regStart())

             let url = ''
            if  (type ==='Individual'){
                 url = "http://192.168.200.38/mobile/auth/RegisterIndividualTaxPayer"
            }else {
                url = "http://192.168.200.38/mobile/auth/RegisterCorporateTaxPayer" 
            }
            
            const response = await fetch(url,{
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body : JSON.stringify(taxPayerData)

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
        console.log('got here')
        const resData = await response.json()
        dispatch(regSuccess())
        }catch (err) {
            dispatch(regFail(err))
        }
    }

}