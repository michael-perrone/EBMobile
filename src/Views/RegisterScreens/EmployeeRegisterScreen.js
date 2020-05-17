import React from 'react';
import { View, Dimensions, Text, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RegLoginInput from '../../Components/RegLoginInput';
import { utils } from '../../Utilities/Utils';
import RegisterButton from '../../Components/RegisterButton';
import BackButton from '../../Components/BackButton';



function EmployeeRegisterScreen(props) {
    console.log('hi')
    goBack = () => {
        console.log('hi')
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
                <RegLoginInput placeholder={"Employer Name"} />
                <RegisterButton onPress={goBack}>Register Employee</RegisterButton>
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