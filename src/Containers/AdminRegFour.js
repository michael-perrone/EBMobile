import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../Components/RegLoginInput';
import { utils } from '../Utilities/Utils';


function AdminRegTwo(props) {
    return (
        <View>
            <Text style={styles.mainText}>Business Information:</Text>
            <Input placeholder={"Business Phone"} onChangeText={props.getPhoneNumber} width={utils.width / 1.4} />
            <Input placeholder={"Business Website"} onChangeText={props.getWebsite} width={utils.width / 1.4} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 24
    }
})


export default AdminRegTwo;