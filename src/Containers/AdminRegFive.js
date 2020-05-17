import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils';
import DayRow from './DayRow';

function AdminRegFive(props) {

    return (
        <View style={styles.mainView}>
            <Text style={styles.mainText}>Weekend Schedule:</Text>
            <DayRow day="Sat" />
            <DayRow day="Sun" />
        </View>
    )
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 24, marginTop: 20
    },
    mainView: { display: 'flex', alignItems: 'center', width: utils.width }
})

export default AdminRegFive;
