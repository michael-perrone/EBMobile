import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';


function BackButton(props) {
    return (
        <TouchableOpacity style={styles.backButton, { marginTop: props.marginTop ? props.marginTop : 30 }} onPress={props.onPress}>
            <Image source={require('./chill2.png')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backButton: { height: 70, width: 70, alignSelf: 'flex-start', marginLeft: 20 }
})

export default BackButton;