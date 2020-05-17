import React from 'react';
import { TouchableOpacity, Image } from 'react-native';


function BackButton(props) {
    return (
        <TouchableOpacity style={{ marginTop: props.marginTop ? props.marginTop : 30, height: 70, width: 70, alignSelf: 'flex-start', marginLeft: 20 }} onPress={props.onPress}>
            <Image source={require('./chill2.png')} />
        </TouchableOpacity>
    )
}



export default BackButton;