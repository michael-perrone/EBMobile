import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils';

function ProgressBar(props) {
    return (
        <View width={props.width} height={props.height} style={styles.mainBar, { marginTop: props.marginTop ? props.marginTop : 0 }}>
            <View style={{ backgroundColor: utils.blue, width: props.width * props.progress - 4, height: props.height - 4 }}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainBar: {
        borderWidth: 2.0, borderColor: 'white'
    }
})

export default ProgressBar;