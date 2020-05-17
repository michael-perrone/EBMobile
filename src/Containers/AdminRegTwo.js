import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../Components/RegLoginInput';
import { utils } from '../Utilities/Utils';


function AdminRegTwo(props) {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.mainText}>Business Location:</Text>
            <Input placeholder={"Business Street"} width={utils.width / 1.4} />
            <Input placeholder={"Business City"} width={utils.width / 1.4} />
            <Input placeholder={"Business State"} width={utils.width / 1.4} />
            <Input placeholder={"Business Zip"} width={utils.width / 1.4} />
        </View>
    )

}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 24
    },
    inputWidth: {
        width: 50//
    }
})


export default AdminRegTwo;