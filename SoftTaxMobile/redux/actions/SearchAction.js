import * as actionTypes from '../actionConstants/actionConstants'


export const srcStart = ()=>{
    return {
        type: actionTypes.SEARCH_START,
    }
}

export const srcSuccess = (userData)=>{
    return {
        type:actionTypes.SEARCH_SUCCESS,
        userInfo: userData
    }
}

export const srcFail = (error)=>{
    return {
        type:actionTypes.SEARCH_FAIL,
        error: error,
    }
}


export const searchTaxPayer = (fields) =>{
    return async dispatch =>{
        try{
             dispatch(srcStart())
        
        //      let url = ''
        //     if  (type ==='Individual'){
        //          url = "http://192.168.200.38/mobile/auth/RegisterIndividualTaxPayer"
        //     }else {
        //         url = "http://192.168.200.38/mobile/auth/RegisterCorporateTaxPayer" 
        //     }
            
        //     const response = await fetch(url,{
        //      method: 'POST',
        //      headers: {
        //          'Content-Type': 'application/json'
        //      },
        //      body : JSON.stringify(taxPayerData)

        // })
        // if (!response.ok){
        //     const errorResData = await response.json()
        //     const errorId = errorResData.error.message
        //     let message = 'Something went wrong!'
        //     if(errorId=== 'EMAIL_NOT_FOUND'){
        //         message = 'This email could not be found!'
        //     }else if (errorId === 'INVALID_PASSWORD'){
        //         message = 'This password is not valid!'
        //     }
        //  throw new Error(message)
        // }
        // console.log('got here')
        // const resData = await response.json()
        const Data = {
            name : 'ADE OLOYEDE',
            stateRegNumber : 'EKSG/IRS/9293/SN955',
        }
        
        dispatch(srcSuccess(Data))
        }catch (err) {
           let error = 'see your life'
            dispatch(srcFail(error))
        }
    }

}