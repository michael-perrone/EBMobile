import React from 'react';
import { TextInput } from 'react-native';
import { utils } from '../Utilities/Utils';


const RegLoginInput = (props) => {
    return (
        <TextInput onChangeText={text => props.onChangeText(text)} secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} placeholderTextColor={"black"} style={{
            fontSize: 24,
            paddingLeft: 8,
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 3.0,
            borderRadius: 5,
            height: utils.width / 9, marginTop: props.marginTop ? props.marginTop : 20, width: props.width ? props.width : utils.width / 1.2
        }} />
    )
}



export default RegLoginInput;