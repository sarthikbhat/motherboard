import {
    GET_USER_LIST,
    USER_LOG_IN,
    USER_LOG_OUT
} from './actionTypes'

export const getUserList = () => {
    return {
        type: GET_USER_LIST
    }
}

export const userLogIn = (userID) => {
    return {
        type: USER_LOG_IN,
        userID:userID
    }
}

export const userLogOut = () => {
    return {
        type: USER_LOG_OUT
    }
}