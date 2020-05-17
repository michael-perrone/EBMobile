import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils';


const RegLoginInput = (props) => {
    return (
        <TextInput secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} placeholderTextColor={"black"} style={styles.input, { marginTop: props.marginTop ? props.marginTop : 20, width: props.width ? props.width : utils.width / 1.2, }} />
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 24,
        paddingLeft: 8,
        backgroundColor: 'white',
        borderColor: 'rgb(50,50,50)',
        borderWidth: 3.0,
        borderRadius: 5,
        height: utils.width / 9
    }
})

export default RegLoginInput;