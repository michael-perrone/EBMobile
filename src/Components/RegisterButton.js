import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils';

function RegisterButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.regButton}>
            <Text style={styles.regButtonText}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    regButton: { height: 60, marginTop: 30, backgroundColor: utils.gray, borderColor: 'white', borderWidth: 2.0 },
    regButtonText: { width: 310, marginTop: 5, fontSize: 28, color: 'black', textAlign: 'center', fontFamily: 'ChalkboardSE-Bold' }
})

export default RegisterButton;