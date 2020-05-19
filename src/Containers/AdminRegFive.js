import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils';
import DayRow from './DayRow';
import { Picker } from '@react-native-community/picker';

let times =
    ["12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM",
        "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM",
        "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
        "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM",
        "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
        "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM",
        "10:30 PM", "11:00 PM", "11:30 PM"]

function AdminRegFive(props) {




    return (
        <View style={styles.mainView}>
            <Text style={styles.mainText}>Weekend Schedule:</Text>
            <View style={styles.dayRow}>
                <Text style={styles.mainText2}>Sat:</Text>
                <Picker style={styles.pickerStyle} itemStyle={styles.itemStyle} onValueChange={(itemValue) => props.getSatOpen(itemValue)} selectedValue={props.satOpen}>
                    <Picker.Item label={"Open"} />
                    {times.map(time => {
                        return <Picker.Item key={time} label={time} value={time} />
                    })}
                </Picker>
                <Picker style={styles.pickerStyle} itemStyle={styles.itemStyle} onValueChange={(itemValue) => props.getSatClose(itemValue)} selectedValue={props.satClose}>
                    <Picker.Item label={"Close"} />
                    {times.map(time => {
                        return <Picker.Item key={time} label={time} value={time} />
                    })}
                </Picker>
            </View>
            <View style={styles.dayRow}>
                <Text style={styles.mainText2}>Sun:</Text>
                <Picker style={styles.pickerStyle} itemStyle={styles.itemStyle} onValueChange={(itemValue) => props.getSunOpen(itemValue)} selectedValue={props.sunOpen}>
                    <Picker.Item label={"Open"} />
                    {times.map(time => {
                        return <Picker.Item key={time} label={time} value={time} />
                    })}
                </Picker>
                <Picker style={styles.pickerStyle} itemStyle={styles.itemStyle} onValueChange={(itemValue) => props.getSunClose(itemValue)} selectedValue={props.sunClose}>
                    <Picker.Item label={"Close"} />
                    {times.map(time => {
                        return <Picker.Item key={time} label={time} value={time} />
                    })}
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 24, marginTop: 20
    },
    mainText2: {
        fontSize: 24,
        marginTop: 10
    },
    mainView: { display: 'flex', alignItems: 'center', width: utils.width },
    pickerStyle: {
        height: 30
    },
    itemStyle: {
        height: 50,
        width: 120
    },
    dayRow: {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: utils.width, marginTop: 30
    }

})

export default AdminRegFive;
