
const initialState = {
    loading:false,
    users:[{
        name:'Test'
    }],
    err:''
}

const userReducer =(state =initialState ,action) =>{
    switch (action.type){
        case 'FETCH_USER_REQUEST':
           return{ ...state,
            loading:true
           }
        case 'FETCH_USER_SUCCESS' :
            return {
                loading:false,
                users:action.payload,
                err:''
            }
        case 'FETCH_USER_FAILURE' :
            return{
                loading:false,
                users:[],
                err:action.payload
            }
        default:
            return state
    }
}
export default userReducer;