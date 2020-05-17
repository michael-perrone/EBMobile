import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import RegLoginInput from '../../Components/RegLoginInput';
import { utils } from '../../Utilities/Utils';
import RegisterButton from '../../Components/RegisterButton';
import BackButton from '../../Components/BackButton';

function UserRegisterScreen(props) {


    goBack = () => {
        props.navigation.goBack();
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.mainView}>
                <BackButton onPress={goBack} />
                <RegLoginInput placeholder={"Full Name"} />
                <RegLoginInput placeholder={"Email"} />
                <RegLoginInput placeholder={"Password"} secureTextEntry={true} />
                <RegLoginInput placeholder={"Confirm Password"} secureTextEntry={true} />
                <RegLoginInput placeholder={"Phone Number"} />
                <RegisterButton>Register User</RegisterButton>
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

export default UserRegisterScreen;