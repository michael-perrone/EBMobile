import { AsyncStorage } from "@react-native-community/async-storage";

export async function getUserToken() {
    try {
        let token = await AsyncStorage.getItem('token');
        return token;
    }
    catch (error) {
        console.log(error)
    }
}

export async function getEmployeeToken() {
    return await AsyncStorage.getItem('employeeToken');
}

export async function getAdminToken() {
    return await AsyncStorage.getItem('adminToken');
}

export async function setUserToken(token) {
    await AsyncStorage.setItem('token', token);
}

export async function setEmployeeToken(token) {
    await AsyncStorage.setItem('employeeToken', token);
}

export async function setAdminToken(token) {
    await AsyncStorage.setItem('adminToken', token);
}

export async function removeToken(name) {
    await AsyncStorage.removeItem(name);
}