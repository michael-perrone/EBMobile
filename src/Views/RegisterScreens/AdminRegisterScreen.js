import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BackButton from '../../Components/BackButton';
import { utils } from '../../Utilities/Utils';
import ProgressBar from '../../Customs/ProgressBar';
import AdminRegOne from '../../Containers/AdminRegOne';
import AdminRegTwo from '../../Containers/AdminRegTwo';
import SimpleButton from '../../Components/SimpleButton';
import AdminRegThree from '../../Containers/AdminRegThree';
import AdminRegFour from '../../Containers/AdminRegFour';
import AdminRegFive from '../../Containers/AdminRegFive';
import AdminRegSix from '../../Containers/AdminRegSix';
import AdminRegSeven from '../../Containers/AdminRegSeven';
import HelpButton from '../../Components/HelpButton';
import AdminRegHelp from '../../Modals/AdminRegHelp';

function AdminRegisterScreen(props) {

    const [progress, setProgress] = useState(0.02);
    const [regOneShowing, setRegOneShowing] = useState(true);
    const [regTwoShowing, setRegTwoShowing] = useState(false);
    const [regThreeShowing, setRegThreeShowing] = useState(false);
    const [regFourShowing, setRegFourShowing] = useState(false);
    const [regFiveShowing, setRegFiveShowing] = useState(false);
    const [regSixShowing, setRegSixShowing] = useState(false);
    const [regSevenShowing, setRegSevenShowing] = useState(false);
    const [visible, setVisible] = useState(false);
    const [nameBusiness, setNameBusiness] = useState("");
    const [typeBusiness, setTypeBusiness] = useState("");
    const [businessStreet, setBusinessStreet] = useState("");
    const [businessCity, setBusinessCity] = useState("");
    const [businessState, setBusinessState] = useState("");
    const [businessZip, setBusinessZip] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [website, setWebsite] = useState("");
    const [sunOpen, setSunOpen] = useState("");
    const [sunClose, setSunClose] = useState("");
    const [satOpen, setSatOpen] = useState("");
    const [satClose, setSatClose] = useState("");
    const [monOpen, setMonOpen] = useState("");
    const [monClose, setMonClose] = useState("");
    const [tueOpen, setTueOpen] = useState("");
    const [tueClose, setTueClose] = useState("");
    const [wedOpen, setWedOpen] = useState("");
    const [wedClose, setWedClose] = useState("");
    const [thuOpen, setThuOpen] = useState("");
    const [thuClose, setThuClose] = useState("");
    const [friClose, setFriClose] = useState("");
    const [friOpen, setFriOpen] = useState("");
    const [bookingColumnType, setBookingColumnType] = useState("");
    const [bookingColumnNumber, setBookingColumnNumber] = useState("");

    finish = () => {
        console.log(nameBusiness, "Name Business");
        console.log(typeBusiness, "Type Business");
        console.log(monOpen, "Mon Open");
        console.log(monClose, "Mon CLose");
        console.log(tueOpen, "tue Open");
        console.log(tueClose, "tue CLose")
        console.log(wedOpen, "wed Open");
        console.log(wedClose, "wed CLose");
        console.log(thuOpen, "thu Open");
        console.log(thuClose, "thu CLose");
        console.log(friOpen, "fri Open");
        console.log(friClose, "fri CLose");
        console.log(satOpen, "sat Open");
        console.log(satClose, "sat CLose");
        console.log(sunOpen, "sun Open");
        console.log(sunClose, "sun CLose");
        console.log(businessStreet, "business Street");
        console.log(businessState, "business State");
        console.log(businessZip, "business Zip");
        console.log(businessCity, "business City");
        console.log(bookingColumnType, "Booking Column Type");
        console.log(bookingColumnNumber, "Booking Column number");
        console.log(email, "email");
        console.log(password, "password")
        console.log(passwordConfirm, "passwordConfirm")
        console.log(fullName, "fullName")
        console.log(website, "website");
        console.log(phoneNumber, "phone number")
    }

    getNameBusiness = (text) => {
        setNameBusiness(text);
    }

    getTypeBusiness = (type) => {
        setTypeBusiness(type);
    }

    getBusinessStreet = (street) => {
        setBusinessStreet(street);
    }

    getBusinessCity = (city) => {
        setBusinessCity(city);
    }

    getBusinessState = (state) => {
        setBusinessState(state);
    }

    getBusinessZip = (zip) => {
        setBusinessZip(zip);
    }

    getEmail = email => {
        setEmail(email);
    }

    getPassword = password => {
        setPassword(password);
    }

    getFullName = fullName => {
        setFullName(fullName);
    }

    getPasswordConfirm = passConfirm => {
        setPasswordConfirm(passConfirm);
    }

    getPhoneNumber = phoneNumber => {
        setPhoneNumber(phoneNumber)
    }

    getWebsite = website => {
        setWebsite(website)
    }

    getSatOpen = satOpen => {
        setSatOpen(satOpen)
    }

    getSatClose = satClose => {
        setSatClose(satClose)
    }

    getSunOpen = sunOpen => {
        setSunOpen(sunOpen)
    }

    getSunClose = sunClose => {
        setSunClose(sunClose)
    }

    getMonOpen = monOpen => {
        setMonOpen(monOpen)
    }

    getMonClose = monClose => {
        setMonClose(monClose)
    }

    getTueOpen = tueOpen => {
        setTueOpen(tueOpen)
    }

    getTueClose = tueClose => {
        setTueClose(tueClose)
    }

    getWedOpen = wedOpen => {
        setWedOpen(wedOpen)
    }

    getWedClose = wedClose => {
        setWedClose(wedClose)
    }

    getThuOpen = thuOpen => {
        setThuOpen(thuOpen)
    }

    getThuClose = thuClose => {
        setThuClose(thuClose)
    }

    getFriOpen = friOpen => {
        setFriOpen(friOpen)
    }

    getFriClose = friClose => {
        setFriClose(friClose)
    }

    getBookingColumnType = bookingColumnType => {
        setBookingColumnType(bookingColumnType)
    }

    getBookingColumnNumber = bookingColumnNumber => {
        setBookingColumnNumber(bookingColumnNumber)
    }

    nextHit = () => {
        if (regOneShowing) {
            change(0.16, setRegOneShowing, setRegTwoShowing);
        } else if (regTwoShowing) {
            change(0.32, setRegTwoShowing, setRegThreeShowing);
        } else if (regThreeShowing) {
            change(0.48, setRegThreeShowing, setRegFourShowing);
        } else if (regFourShowing) {
            change(0.64, setRegFourShowing, setRegFiveShowing);
        } else if (regFiveShowing) {
            change(0.8, setRegFiveShowing, setRegSixShowing);
        } else if (regSixShowing) {
            change(0.93, setRegSixShowing, setRegSevenShowing);
        }
        else if (regSevenShowing) {
            finish()
        }
    }

    backHit = () => {
        if (regOneShowing) {
            props.navigation.goBack();
        }
        else if (regTwoShowing) {
            change(0.02, setRegTwoShowing, setRegOneShowing);
        }
        else if (regThreeShowing) {
            change(0.16, setRegThreeShowing, setRegTwoShowing);
        }
        else if (regFourShowing) {
            change(0.32, setRegFourShowing, setRegThreeShowing);
        }
        else if (regFiveShowing) {
            change(0.48, setRegFiveShowing, setRegFourShowing);
        }
        else if (regSixShowing) {
            change(0.64, setRegSixShowing, setRegFiveShowing);
        }
        else if (regSevenShowing) {
            change(0.8, setRegSevenShowing, setRegSixShowing);
        }
    }

    change = (progressNumber, noLongerShowing, nowShowing) => {
        setProgress(progressNumber);
        noLongerShowing(false)
        nowShowing(true)
        console.log(utils.height)
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.topBar}>
                <BackButton marginTop={0.1} onPress={backHit} />
                <ProgressBar marginTop={10} height={40} width={200} progress={progress} />
                <View style={styles.secondView}></View>
            </View>
            {regOneShowing && <AdminRegOne getTypeBusiness={getTypeBusiness} getNameBusiness={getNameBusiness} />}
            {regTwoShowing && <AdminRegTwo getBusinessStreet={getBusinessStreet} getBusinessCity={getBusinessCity} getBusinessState={getBusinessState} getBusinessZip={getBusinessZip} />}
            {regThreeShowing && <AdminRegThree getEmail={getEmail} getPassword={getPassword} getFullName={getFullName} getPasswordConfirm={getPasswordConfirm} />}
            {regFourShowing && <AdminRegFour getWebsite={getWebsite} getPhoneNumber={getPhoneNumber} />}
            {regFiveShowing && <AdminRegFive getSatOpen={getSatOpen} getSatClose={getSatClose} getSunOpen={getSunOpen} getSunClose={getSunClose} />}
            {regSixShowing && <AdminRegSix getMonOpen={getMonOpen} getMonClose={getMonClose} getTuOpen={getTueOpen} getTueClose={getTueClose} getWedOpen={getWedOpen} getWedClose={getWedClose} getThuOpen={getThuOpen} getThuClose={getThuClose} getFriOpen={getFriOpen} getFriClose={getFriClose} />}
            {regSevenShowing && <AdminRegSeven getBookingColumnType={getBookingColumnType} getBookingColumnNumber={getBookingColumnNumber} />}
            <HelpButton onClick={() => setVisible(true)} />
            <AdminRegHelp closeModal={() => setVisible(false)} visible={visible} />
            <SimpleButton onPress={nextHit} marginTop={regSixShowing ? 50 : 100}>{!regSevenShowing ? "Next" : "Finish"}</SimpleButton>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        height: utils.height,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: utils.pink
    },
    topBar: {
        display: 'flex', flexDirection: 'row', width: utils.width, justifyContent: 'space-between', marginTop: utils.width > 400 ? 50 : 30
    },
    secondView: {
        height: 50,
        width: 50
    }
})


export default AdminRegisterScreen;