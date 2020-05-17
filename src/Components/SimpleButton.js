import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils';

const SimpleButton = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.mainButton, { marginTop: props.marginTop }}>
            <Text style={styles.textInButton}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textInButton: { color: 'black', fontSize: 26, fontWeight: 'bold', fontFamily: 'Kailasa', marginTop: utils.height / 90, textAlign: 'center' },
    mainButton: { width: utils.width / 3, height: utils.width / 8, borderWidth: 2, borderColor: 'black', textAlign: 'center', borderRadius: 4, backgroundColor: 'white' }
})

export default SimpleButton;