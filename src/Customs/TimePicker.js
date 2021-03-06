import React from 'react';
import { StyleSheet } from 'react-native';
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

function TimePicker(props) {

    const [selectedValue, setSelectedValue] = React.useState(props.open === "Close" ? "Close" : "Open")


    getValue = (itemValue) => {
        console.log(props)
        setSelectedValue(itemValue)
    }
    console.log(props)

    return (
        <Picker onValueChange={(itemValue) => getValue(itemValue)} selectedValue={selectedValue} style={styles.pickerStyle} itemStyle={styles.itemStyle}>
            {props.open && <Picker.Item label={props.open} value=""></Picker.Item>}
            <Picker.Item label={"Closed"} />
            {times.map((time, index) => {
                return (
                    <Picker.Item key={time + props.id + index} label={time} value={time}></Picker.Item>
                )
            })}
        </Picker>
    )
}

const styles = StyleSheet.create({
    pickerStyle: {
        height: 30
    },
    itemStyle: {
        height: 50,
        width: 120
    }
})

export default TimePicker;