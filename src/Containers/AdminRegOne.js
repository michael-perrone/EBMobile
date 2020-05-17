import React from 'react';
import RegLoginInput from '../Components/RegLoginInput';

import { View, Text, Picker, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils'

function AdminRegOne() {
    return (
        <View style={styles.mainView}>
            <Text style={styles.mainText}>Name of Business:</Text>
            <RegLoginInput width={utils.width / 1.4} marginTop={25} placeholder={"Name of Business"} />
            <Text style={styles.mainText}>Type of Business:</Text>
            <Picker selectedValue="1" style={styles.pickerWidth} itemStyle={styles.pickerHeight}>
                <Picker.Item label="Wax Center" value="Wax Center" />
                <Picker.Item label="Beauty Center" value="Beauty Center" />
                <Picker.Item label="Fitness Center" value="Fitness Center" />
                <Picker.Item label="Medical Office" value="Medical Office" />
                <Picker.Item label="Restaurant" value="Restaurant" />
                <Picker.Item label="Hair Salon" value="Hair Salon" />
                <Picker.Item label="Tanning Salon" value="Tanning Salon" />
                <Picker.Item label="Barber Shop" value="Barber Shop" />
                <Picker.Item label="Tattoo Studio" value="Tattoo Studio" />
                <Picker.Item label="Tennis Club" value="Tennis Club" />
                <Picker.Item label="Other" value="Other" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 24,
        marginTop: utils.height / 20
    },
    pickerWidth: {
        width: utils.width / 1.3
    },
    pickerHeight: {
        height: 120
    }
})

export default AdminRegOne;