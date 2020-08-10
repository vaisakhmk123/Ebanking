export const signin =() => {
    return {
        type: 'SIGN_IN'
    }
}
export const signout = () => {
    return {
        type :'SIGN_OUT'
    }
}
export const applyloan =(loan) => {
    return {
        type:'APPLY_LOAN',
        payload: loan
    }
}
export const fetchUserRequest =() =>{
    return{
        type:'FETCH_USER_REQUEST'
    }
}
export const fetchUserSuccess =(users) =>{
    return {
        type:'FETCH_USER_SUCCESS',
        payload:users

    }
}
export const fetchUserFailure =(error) =>{
    return{
        type:'FETCH_USER_FAILURE',
        payload :error
    }
}

export const registerUser =() =>{
    return {
        type:'USER_REGISTRATION'
    }
}