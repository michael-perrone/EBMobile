import React, { useState } from 'react';
import { View } from 'react-native';
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

function AdminRegisterScreen(props) {

    const [progress, setProgress] = useState(0.02);
    const [regOneShowing, setRegOneShowing] = useState(true);
    const [regTwoShowing, setRegTwoShowing] = useState(false);
    const [regThreeShowing, setRegThreeShowing] = useState(false);
    const [regFourShowing, setRegFourShowing] = useState(false);
    const [regFiveShowing, setRegFiveShowing] = useState(false);
    const [regSixShowing, setRegSixShowing] = useState(false);
    const [regSevenShowing, setRegSevenShowing] = useState(false)


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
    }


    return (
        <View style={styles.mainView}>
            <View style={{ display: 'flex', flexDirection: 'row', width: utils.width, justifyContent: 'space-between', marginTop: 25 }}>
                <BackButton marginTop={0.1} onPress={backHit} />
                <ProgressBar marginTop={10} height={40} width={200} progress={progress} />
                <View style={styles.secondView}></View>
            </View>
            {regOneShowing && <AdminRegOne />}
            {regTwoShowing && <AdminRegTwo />}
            {regThreeShowing && <AdminRegThree />}
            {regFourShowing && <AdminRegFour />}
            {regFiveShowing && <AdminRegFive />}
            {regSixShowing && <AdminRegSix />}
            {regSevenShowing && <AdminRegSeven />}
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
    secondView: {
        height: 50,
        width: 50
    }
})


export default AdminRegisterScreen;