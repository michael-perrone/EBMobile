import React from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import RegLoginInput from '../Components/RegLoginInput';
import SimpleButton from '../Components/SimpleButton';
import FrontButton from '../Components/FrontButton';
import { utils } from '../Utilities/Utils';

const LoginScreen = (props) => {

    navigateTo = (whereTo) => () => {
        props.navigation.navigate(whereTo)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.mainView}>
                <Text style={styles.text}>Everyone Books</Text>
                <RegLoginInput marginTop={40} placeholder={"Email"} />
                <RegLoginInput placeholder={"Password"} secureTextEntry={true} />
                <SimpleButton marginTop={35}>Login</SimpleButton>
                <View style={styles.buttonContainer}>
                    <FrontButton onPress={navigateTo("UserRegister")}>Register As User</FrontButton>
                    <FrontButton onPress={navigateTo("EmployeeRegister")}>Register As Employee</FrontButton>
                    <FrontButton onPress={navigateTo("AdminRegister")}>Register As Admin</FrontButton>
                </View>
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
    },
    text: {
        textAlign: 'center',
        fontFamily: 'ChalkboardSE-Bold',
        fontSize: utils.width / 9.2,
        marginTop: utils.height / 30
    },
    buttonContainer: {
        height: utils.width / 1.4,
        marginTop: utils.height / 10,
        display: 'flex',
        justifyContent: 'space-around'
    }

})
export default LoginScreen;
