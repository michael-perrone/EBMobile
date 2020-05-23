import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import RegLoginInput from '../../Components/RegLoginInput';
import { utils } from '../../Utilities/Utils';
import RegisterButton from '../../Components/RegisterButton';
import BackButton from '../../Components/BackButton';



function EmployeeRegisterScreen(props) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    goBack = () => {
        props.navigation.goBack()
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

    registerEmployer = () => {
        const data = { fullName, email, createPassword: password }
        axios.post('http://localhost:8080/api/employeeSignup', data).then(
            response => {
                if (response.status === 200) {
                    props.userLogin(response.data.token)
                }
            }
        )
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.mainView}>
                <BackButton onPress={goBack} />
                <RegLoginInput onTextChange={getFullName} placeholder={"Full Name"} />
                <RegLoginInput onTextChange={getEmail} placeholder={"Email"} />
                <RegLoginInput onTextChange={getPassword} placeholder={"Password"} secureTextEntry={true} />
                <RegLoginInput onTextChange={getConfirmPass} placeholder={"Confirm Password"} secureTextEntry={true} />
                <RegisterButton onPress={registerEmployer}>Register Employee</RegisterButton>
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

export default EmployeeRegisterScreen;