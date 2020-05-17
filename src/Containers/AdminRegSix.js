import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils';
import DayRow from './DayRow';


function AdminRegSix(props) {

    return (
        <View style={styles.mainView}>
            <Text style={styles.mainText}>Weekday Schedule:</Text>
            <DayRow day="Mon" />
            <DayRow day="Tue" />
            <DayRow day="Wed" />
            <DayRow day="Thu" />
            <DayRow day="Fri" />
        </View>
    )
}

const styles = StyleSheet.create({
    mainText: { fontSize: 24, marginTop: 20 },
    mainView: { display: 'flex', alignItems: 'center', width: utils.width }
})


export default AdminRegSix;