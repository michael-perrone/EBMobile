import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils';
import DayRow from './DayRow';

function AdminRegFive(props) {
    return (
        <View style={styles.mainView}>
            <Text style={styles.mainText}>Weekend Schedule:</Text>
            <DayRow getOpen={props.getSatOpen} getClose={props.getSatClose} day="Sat" />
            <DayRow getOpen={props.getSunOpen} getClose={props.getSunClose} day="Sun" />
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
