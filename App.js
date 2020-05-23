import 'react-native-gesture-handler';
import LoginScreen from './src/Views/LoginScreen';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserRegisterScreen from './src/Views/RegisterScreens/UserRegisterScreen';
import EmployeeRegisterScreen from './src/Views/RegisterScreens/EmployeeRegisterScreen';
import AdminRegisterScreen from './src/Views/RegisterScreens/AdminRegisterScreen';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { getUserToken } from './src/Storage/Storage';


const Stack = createStackNavigator()

const App = (props) => {

  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(getUserToken())


  }, [])
  console.log(token)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
          <Stack.Screen name="UserRegister" options={{ headerShown: false }} component={UserRegisterScreen} />
          <Stack.Screen name="EmployeeRegister" options={{ headerShown: false }} component={EmployeeRegisterScreen} />
          <Stack.Screen name="AdminRegister" options={{ headerShown: false }} component={AdminRegisterScreen} />
        </Stack.Navigator>

      </NavigationContainer>

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    token: state.authReducer.userToken
  }
}


export default connect(mapStateToProps)(App);
