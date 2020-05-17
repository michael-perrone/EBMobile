import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils';
import DayRow from './DayRow';


function AdminRegSix(props) {

    return (
        <View style={styles.mainView}>
            <Text style={styles.mainText}>Weekday Schedule:</Text>
            <DayRow getOpen={props.getMonOpen} getClose={props.getMonClose} day="Mon" />
            <DayRow getOpen={props.getTueOpen} getClose={props.getTueClose} day="Tue" />
            <DayRow getOpen={props.getWedOpen} getClose={props.getWedClose} day="Wed" />
            <DayRow getOpen={props.getThuOpen} getClose={props.getThuClose} day="Thu" />
            <DayRow getOpen={props.getFriOpen} getClose={props.getFriClose} day="Fri" />
        </View>
    )
}

const styles = StyleSheet.create({
    mainText: { fontSize: 24, marginTop: 20 },
    mainView: { display: 'flex', alignItems: 'center', width: utils.width }
})


export default AdminRegSix;