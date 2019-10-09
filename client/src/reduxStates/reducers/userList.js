import {
    GET_USER_LIST, USER_LOG_IN,USER_LOG_OUT
} from '../actions/actionTypes'

const initState = {
    isLoggedIn:false,
    user:null,
    // userList:null
}

const defaultReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USER_LIST:
            return {
                ...state,
                userList: [{ name: "Sanjay", surname: "Nayak" }, { name: "Samip", surname: "Kalyani" }]
            }
        case USER_LOG_IN:
            return{
                ...state,
                isLoggedIn:true,
                user:action.userID
            }
        case USER_LOG_OUT:
            return{
                ...state,
                isLoggedIn:false,
                user:null
            }
        default :
            return state;
    }
}

export default defaultReducer
