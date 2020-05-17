import React from 'react';
import { View, Text } from 'react-native';
import Input from '../Components/RegLoginInput';
import { utils } from '../Utilities/Utils';


function AdminRegThree(props) {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.mainText}>Admin Information:</Text>
            <Input secureTextEntry={true} placeholder={"Full Name"} width={utils.width / 1.4} />
            <Input secureTextEntry={true} placeholder={"Email"} width={utils.width / 1.4} />
            <Input secureTextEntry={true} placeholder={"Password"} width={utils.width / 1.4} />
            <Input secureTextEntry={true} placeholder={"Confirm Password"} width={utils.width / 1.4} />

        </View>
    )
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 24
    },
})


export default AdminRegThree;