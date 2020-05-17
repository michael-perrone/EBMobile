import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function HelpButton(props) {
    return (
        <TouchableOpacity onPress={props.onClick} style={styles.helpButton}><Text style={styles.helpButtonText}>?</Text></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    helpButton: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2.0,
        position: 'absolute',
        bottom: 10,
        left: 10,
        display: 'flex',
        alignItems: 'center'
    },
    helpButtonText: {
        fontSize: 50
    }
})

export default HelpButton;