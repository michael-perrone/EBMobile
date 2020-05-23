import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import RegLoginInput from '../../Components/RegLoginInput';
import { utils } from '../../Utilities/Utils';
import RegisterButton from '../../Components/RegisterButton';
import BackButton from '../../Components/BackButton';
import axios from 'axios';
import { connect } from 'react-redux';
import { SET_USER_TOKEN } from '../../redux/authActions';
import { registerUser } from '../../redux/authActions';
import AsyncStorage from '@react-native-community/async-storage';
import { USER_LOGOUT } from '../../redux/types';
import { getUserToken, removeToken } from '../../Storage/Storage';


function UserRegisterScreen(props) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    goBack = () => {
        props.navigation.goBack();
    }

    getFullName = (fullName) => {
        setFullName(fullName)
    }

    getEmail = (email) => {
        setEmail(email)
    }

    getPassword = (pass) => {
        setPassword(pass)
    }

    getConfirmPass = (confirmPass) => {
        setConfirmPassword(confirmPass)
    }

    getPhoneNumber = (phoneNumber) => {
        setPhoneNumber(phoneNumber)
    }


    test = async () => {
        console.log(props.user)
        console.log(props.userToken)
        let token = await AsyncStorage.getItem('token');
        console.log(token)
    }

    logout = () => {
        props.logout();
        removeToken('token')
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.mainView}>
                <BackButton onPress={goBack} />
                <RegLoginInput onChangeText={getFullName} placeholder={"Full Name"} />
                <RegLoginInput onChangeText={getEmail} placeholder={"Email"} />
                <RegLoginInput onChangeText={getPassword} placeholder={"Password"} secureTextEntry={true} />
                <RegLoginInput onChangeText={getConfirmPass} placeholder={"Confirm Password"} secureTextEntry={true} />
                <RegLoginInput onChangeText={getPhoneNumber} placeholder={"Phone Number"} />
                <RegisterButton onPress={() => props.registerUser(fullName, email, password, phoneNumber)}>Register User</RegisterButton>
                <RegisterButton onPress={test}>Test</RegisterButton>
                <RegisterButton onPress={logout}>Logout</RegisterButton>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    mainView: {
        height: utils.height,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: utils.pink
    }
})

function mapStateToProps(state) {
    return {
        user: state.authReducer.user,
        userToken: state.authReducer.userToken
    }
}

const dispatchProps = (dispatch) => {
    return {
        registerUser: (fullName, email, password, phoneNumber) => dispatch(registerUser(fullName, email, password, phoneNumber)),
        logout: () => dispatch({ type: USER_LOGOUT })
    }
}

export default connect(mapStateToProps, dispatchProps)(UserRegisterScreen);