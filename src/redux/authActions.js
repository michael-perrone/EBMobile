import { START_EMPLOYEE_REGISTER, START_ADMIN_REGISTER, START_USER_REGISTER, USER_REGISTER_FAILURE, USER_REGISTER_SUCCESS, EMPLOYEE_REGISTER_FAILURE, EMPLOYEE_REGISTER_SUCCESS, ADMIN_REGISTER_FAILURE, ADMIN_REGISTER_SUCCESS } from './types';
import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import Axios from 'axios';


export function registerUser(fullName, email, password, phoneNumber) {
    return async (dispatch) => {
        dispatch({ type: START_USER_REGISTER });
        Axios.post('http://localhost:4000/api/usersSignup', { fullName, email, createPassword: password, phoneNumber }).then(
            response => {
                if (response.status === 200) {
                    AsyncStorage.setItem('token', response.data.token)
                    dispatch({ type: USER_REGISTER_SUCCESS, payload: { userToken: response.data.token, user: decode(response.data.token) } })
                }
            }
        ).catch(error => {
            console.log(error)
            dispatch({ type: USER_REGISTER_FAILURE, payload: { error: error } })
        })
    }
}

function startUserRegister() {
    return {
        type: START_USER_REGISTER
    }
}

function startEmployeeRegister() {
    return {
        type: START_EMPLOYEE_REGISTER
    }
}

function startAdminRegister() {
    return {
        type: START_ADMIN_REGISTER
    }
}

async function userRegisterSuccess(token) {
    await AsyncStorage.setItem('token', token)
    return {
        type: USER_REGISTER_SUCCESS
    }
}

function userRegisterFailure(error) {
    console.log(error)
    return {
        type: USER_REGISTER_FAILURE,
        payload: {
            error
        }
    }
}

async function employeeRegisterSuccess(token) {
    await AsyncStorage.setItem('employeeToken', token);
    let employeeToken = token;
    let employee = decode(token);
    return {
        type: EMPLOYEE_REGISTER_SUCCESS,
        payload: {
            employee, employeeToken
        }
    }
}

function employeeRegisterFailure(error) {
    return {
        type: EMPLOYEE_REGISTER_FAILURE,
        payload: {
            error
        }
    }
}

async function adminRegisterSuccess(token) {
    await AsyncStorage.setItem('adminToken', token);
    let adminToken = token;
    let admin = decode(token);
    return {
        type: ADMIN_REGISTER_SUCCESS,
        payload: {
            admin, adminToken
        }
    }
}

function adminRegisterFailure(error) {
    return {
        type: ADMIN_REGISTER_FAILURE,
        payload: {
            error
        }
    }
}
