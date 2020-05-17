import 'react-native-gesture-handler';
import LoginScreen from './src/Views/LoginScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserRegisterScreen from './src/Views/RegisterScreens/UserRegisterScreen';
import EmployeeRegisterScreen from './src/Views/RegisterScreens/EmployeeRegisterScreen';
import AdminRegisterScreen from './src/Views/RegisterScreens/AdminRegisterScreen';
import { StatusBar, View } from 'react-native';


const Stack = createStackNavigator()

const App = () => {
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


export default App;
