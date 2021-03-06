import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../Components/RegLoginInput';
import { utils } from '../Utilities/Utils';


function AdminRegThree(props) {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.mainText}>Admin Information:</Text>
            <Input onChangeText={props.getFullName} placeholder={"Full Name"} width={utils.width / 1.4} />
            <Input onChangeText={props.getEmail} placeholder={"Email"} width={utils.width / 1.4} />
            <Input onChangeText={props.getPassword} secureTextEntry={true} placeholder={"Password"} width={utils.width / 1.4} />
            <Input onChangeText={props.getPasswordConfirm} secureTextEntry={true} placeholder={"Confirm Password"} width={utils.width / 1.4} />

        </View>
    )
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 24
    },
})


export default AdminRegThree;