import { START_EMPLOYEE_REGISTER, START_ADMIN_REGISTER, USER_LOGOUT, START_USER_REGISTER, USER_REGISTER_FAILURE, USER_REGISTER_SUCCESS, EMPLOYEE_REGISTER_FAILURE, EMPLOYEE_REGISTER_SUCCESS, ADMIN_REGISTER_FAILURE, ADMIN_REGISTER_SUCCESS } from '../types';
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from 'jwt-decode';


function getInitialState() {
    let token = "hello";
    let user = "bye"
    return {
        token,
        user,
        error: "",
        loading: false
    }

}

export function authReducer(state = getInitialState(), action) {
    switch (action.type) {
        case START_USER_REGISTER:
            return {
                ...state,
                loading: true
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                userToken: action.payload.userToken
            }
        case USER_REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        case USER_LOGOUT:
            console.log('HELLO')
            return {
                ...state,
                user: "",
                userToken: ''
            }
        default: return state;
    }
}