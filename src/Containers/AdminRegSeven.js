import React from 'react';
import { Text, View, Picker, StyleSheet } from 'react-native';
import Input from '../Components/RegLoginInput';
import { utils } from '../Utilities/Utils';


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 20,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

function AdminRegSeven(props) {

    const [selectedValue, setSelectedValue] = React.useState("Num");

    changeValue = (itemValue) => {
        setSelectedValue(itemValue)
        props.getBookingColumnNumber(itemValue)
    }


    return (
        <View style={styles.view}>
            <Text style={styles.text}>Booking Area:</Text>
            <Input onChangeText={props.getBookingColumnType} width={utils.width / 1.45} placeholder={"Booking Area"} />
            <Text style={styles.text2}>Number Booking Areas:</Text>
            <Picker onValueChange={itemValue => changeValue(itemValue)} style={styles.picker} itemStyle={styles.pickerItemStyle} selectedValue={selectedValue}>
                <Picker.Item label="Num" />
                {nums.map(num => <Picker.Item label={num.toString()} value={num.toString()} />)}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        fontSize: 24, marginTop: 30
    },
    text2: {
        fontSize: 24, marginTop: 70
    },
    picker: {
        marginTop: 30, height: 50, width: 50
    },
    pickerItemStyle: { height: 50, width: 50 }
})

export default AdminRegSeven;