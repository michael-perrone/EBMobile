import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils';
import DayRow from './DayRow';
import { Picker } from '@react-native-community/picker';
import { times } from '../Constants/Times';

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
