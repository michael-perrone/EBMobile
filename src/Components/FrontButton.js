import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils';

const FrontButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: { backgroundColor: utils.gray, borderWidth: 3.0, borderColor: 'white', height: utils.width / 7 },
    buttonText: { textAlign: 'center', fontFamily: utils.font, marginTop: utils.width / 80, fontWeight: 'bold', height: utils.width / 9, width: utils.width / 1.2, fontSize: 26, color: 'black' }
})

export default FrontButton;