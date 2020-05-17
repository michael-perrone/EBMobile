import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils';
import TimePicker from '../Customs/TimePicker';


function DayRow(props) {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: utils.width,
            marginTop: props.marginTop ? props.marginTop : 40
        }}>
            <Text style={styles.dayText}>{props.day}:</Text>
            <TimePicker getOpen={props.getOpen} open={"Open"} />
            <TimePicker getClose={props.getClose} open={"Close"} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {

    },
    dayText: {
        width: 70, fontSize: 28, marginTop: 6
    }
})

export default DayRow;

