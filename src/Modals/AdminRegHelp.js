import React from 'react';
import { Modal, Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { utils } from '../Utilities/Utils';


function AdminRegHelp(props) {

    const DATA = [{ id: '1', title: "Step 1: Enter Business Name", information: "Please enter the name of your business. Please type out full business name and check that spelling is accurate." },
    { id: '2', title: "Step 2: Enter Business Type", information: "Enter the type of business that you are registering. If the type of business you own is not listed within the drop-down menu. Please selector 'Other'" },
    { id: '3', title: "Step 3: Enter Business Location", information: "Enter the location of which your business resides. This information is for customers who seek the address of your business. It will also let customers view your business based on location." },
    { id: '4', title: "Step 4: Enter Admin Information", information: "Enter an email and password combination that you have access to. This email and password will be your credentials to log into your admin account in the future." },
    { id: '5', title: "Step 5: Enter Business Information", information: "Enter the phone number and website that people can reach your business at. The website is optional and is okay to leave blank if your business does not have one." },
    { id: '6', title: "Step 6: Enter Weekend Schedule", information: "Enter the OPEN and CLOSE date of your business on each weekend day. Use the drop-down menu to select applicable times. If your business is closed on a certain day. Scroll down one time to find the 'Closed' option." },
    { id: '7', title: "Step 7: Enter Weeekday Schedule", information: "Enter the OPEN and CLOSE date of your business on each weekday. Use the drop-down menu to select applicable times. If your business is closed on a certain day. Scroll down one time to find the 'Closed' option." },
    { id: "8", title: "Step 8: Enter Booking Area", information: "Enter the area which your business will need to be booked for appointments. For example: a massage parlor takes appointments in an individual room, a tattoo studio may conduct appointments in individual rooms or chairs, and a medical office would book out individual offices." },
    { id: "9", title: "Step 9: Enter Booking Area Number", information: "Enter the number of items which you listed above. For example, if your massage parlor has 8 rooms to take appointments in. Scroll down to 8 in the drop-down menu. If your wax center has 6 rooms to take appointments in, choose 6." }
    ]

    return (
        <Modal style={styles.modal} visible={props.visible} animationType={"fade"}>
            <View style={styles.modalView}>
                <View style={styles.topView}>
                    <Text style={styles.helpText}>Admin Register Help</Text>
                    <TouchableOpacity onPress={props.closeModal} style={styles.cancelButton}><Text style={styles.x}>X</Text></TouchableOpacity>
                </View>
                <FlatList style={{ backgroundColor: utils.pink }} data={DATA} renderItem={({ item }) => (
                    <View style={styles.itemView}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemText}>{item.information}</Text>
                    </View>
                )} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalView: {
        display: 'flex',
        width: utils.width,
        height: utils.height
    },
    topView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: utils.width > 400 ? 75 : 50,
        marginBottom: 30,
    },
    cancelButton: {
        display: 'flex',
        alignItems: 'center',
        borderWidth: 2.0,
        borderColor: 'black',
        height: 40,
        width: 40,
        borderRadius: 30,
    },
    helpText: {
        fontSize: 30,
        color: 'black'
    },
    x: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    itemView: {
        borderBottomWidth: 2.0,
        borderBottomColor: 'gray'
    },
    itemTitle: {
        width: utils.width,
        textAlign: 'center',
        fontSize: 22,
        marginBottom: 14,
        marginTop: 12
    },
    itemText: {
        paddingLeft: 10,
        paddingRight: 8,
        paddingBottom: 16,
        fontSize: 16
    }
})



export default AdminRegHelp;