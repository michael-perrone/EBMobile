import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils';
import DayRow from './DayRow';
import { Picker } from '@react-native-community/picker';
import { times } from '../Constants/Times';

function AdminRegSix(props) {

    return (
        <View style={styles.mainView}>
            <Text style={styles.mainText}>Weekday Schedule:</Text>
            <View style={styles.dayRow}>
                <Text style={styles.mainText2}>Mon:</Text>
                <Picker style={styles.pickerStyle} itemStyle={styles.itemStyle} onValueChange={(itemValue) => props.getMonOpen(itemValue)} selectedValue={props.monOpen}>
                    <Picker.Item label={"Open"} />
                    {times.map(time => {
                        return <Picker.Item key={time} label={time} value={time} />
                    })}
                </Picker>
                <Picker style={styles.pickerStyle} itemStyle={styles.itemStyle} onValueChange={(itemValue) => props.getMonClose(itemValue)} selectedValue={props.monClose}>
                    <Picker.Item label={"Close"} />
                    {times.map(time => {
                        return <Picker.Item key={time} label={time} value={time} />
                    })}
                </Picker>
            </View>
            <View style={styles.dayRow}>
                <Text style={styles.mainText2}>Tue:</Text>
                <Picker style={styles.pickerStyle} itemStyle={styles.itemStyle} onValueChange={(itemValue) => props.getTueOpen(itemValue)} selectedValue={props.tueOpen}>
                    <Picker.Item label={"Open"} />
                    {times.map(time => {
                        return <Picker.Item key={time} label={time} value={time} />
                    })}
                </Picker>
                <Picker style={styles.pickerStyle} itemStyle={styles.itemStyle} onValueChange={(itemValue) => props.getTueClose(itemValue)} selectedValue={props.tueClose}>
                    <Picker.Item label={"Close"} />
                    {times.map(time => {
                        return <Picker.Item key={time} label={time} value={time} />
                    })}
                </Picker>
            </View>
            <View style={styles.dayRow}>
                <Text style={styles.mainText2}>Wed:</Text>
                <Picker style={styles.pickerStyle} itemStyle={styles.itemStyle} onValueChange={(itemValue) => props.getWedOpen(itemValue)} selectedValue={props.wedOpen}>
                    <Picker.Item label={"Open"} />
                    {times.map(time => {
                        return <Picker.Item key={time} label={time} value={time} />
                    })}
                </Picker>
                <Picker style={styles.pickerStyle} itemStyle={styles.itemStyle} onValueChange={(itemValue) => props.getWedClose(itemValue)} selectedValue={props.wedClose}>
                    <Picker.Item label={"Close"} />
                    {times.map(time => {
                        return <Picker.Item key={time} label={time} value={time} />
                    })}
                </Picker>
            </View>
            <View style={styles.dayRow}>
                <Text style={styles.mainText2}>Thu:</Text>
                <Picker style={styles.pickerStyle} itemStyle={styles.itemStyle} onValueChange={(itemValue) => props.getThuOpen(itemValue)} selectedValue={props.thuOpen}>
                    <Picker.Item label={"Open"} />
                    {times.map(time => {
                        return <Picker.Item key={time} label={time} value={time} />
                    })}
                </Picker>
                <Picker style={styles.pickerStyle} itemStyle={styles.itemStyle} onValueChange={(itemValue) => props.getThuClose(itemValue)} selectedValue={props.thuClose}>
                    <Picker.Item label={"Close"} />
                    {times.map(time => {
                        return <Picker.Item key={time} label={time} value={time} />
                    })}
                </Picker>
            </View>
            <View style={styles.dayRow}>
                <Text style={styles.mainText2}>Fri:</Text>
                <Picker style={styles.pickerStyle} itemStyle={styles.itemStyle} onValueChange={(itemValue) => props.getFriOpen(itemValue)} selectedValue={props.friOpen}>
                    <Picker.Item label={"Open"} />
                    {times.map(time => {
                        return <Picker.Item key={time} label={time} value={time} />
                    })}
                </Picker>
                <Picker style={styles.pickerStyle} itemStyle={styles.itemStyle} onValueChange={(itemValue) => props.getFriClose(itemValue)} selectedValue={props.friClose}>
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

export default AdminRegSix;
