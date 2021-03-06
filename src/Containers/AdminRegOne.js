import React from 'react';
import RegLoginInput from '../Components/RegLoginInput';
import { Picker } from '@react-native-community/picker';
import { View, Text, StyleSheet } from 'react-native';
import { utils } from '../Utilities/Utils'

function AdminRegOne(props) {
    const [typeSelected, setTypeSelected] = React.useState("1")

    getValue = (itemValue) => {
        props.getTypeBusiness(itemValue);
        setTypeSelected(itemValue);
    }

    return (
        <View style={styles.mainView}>
            <Text style={styles.mainText}>Name of Business:</Text>
            <RegLoginInput onChangeText={props.getNameBusiness} width={utils.width / 1.4} marginTop={25} placeholder={"Name of Business"} />
            <Text style={styles.mainText}>Type of Business:</Text>
            <Picker onValueChange={getValue} selectedValue={typeSelected} style={styles.pickerWidth} itemStyle={styles.pickerHeight}>
                <Picker.Item label="Wax Center" value="Wax Center" />
                <Picker.Item label="Beauty Center" value="Beauty Center" />
                <Picker.Item label="Fitness Center" value="Fitness Center" />
                <Picker.Item label="Medical Office" value="Medical Office" />
                <Picker.Item label="Restaurant" value="Restaurant" />
                <Picker.Item label="Hair Salon" value="Hair Salon" />
                <Picker.Item label="Tanning Salon" value="Tanning Salon" />
                <Picker.Item label="Barber Shop" value="Barber Shop" />
                <Picker.Item label="Tattoo Studio" value="Tattoo Studio" />
                <Picker.Item label="Tennis Club" value="Tennis Club" />
                <Picker.Item label="Other" value="Other" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 24,
        marginTop: utils.height / 20
    },
    pickerWidth: {
        width: utils.width / 1.3
    },
    pickerHeight: {
        height: 120
    }
})

export default AdminRegOne;