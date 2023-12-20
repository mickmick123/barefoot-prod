import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteName from './RouteName';
import { useSelector } from "react-redux";
import { Colors } from '../utils';

const Stack = createNativeStackNavigator();

import SideNavigator from './SideNavigator';
import {
  LoginScreen, RegisterScreen, OtpVeryfiveScreen,
  SplashScreen, RegistrationSuccessful,
  Swiperscreen, ForgotPassword, EventsDetails, TranslationScreen
} from '../screens';

const RootNavigator = props => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors
  };
  const [colorValue, setColorValue] = useState(MyTheme)
  useEffect(() => {
    if (Colors.length != 0 && colorrdata != "") {
      Colors.theme_backgound = colorrdata;
      const MyThemeNew = {
        ...DefaultTheme,
        Colors: Colors
      };
      setColorValue(MyThemeNew)
    }

  }, [colorrdata, Colors])
  return (
    <NavigationContainer theme={colorValue}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />

        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />

        <Stack.Screen name={RouteName.REGISTER_SCREEN} component={RegisterScreen} />

        <Stack.Screen name={RouteName.HOME_SCREEN} component={SideNavigator} />

        <Stack.Screen name={RouteName.REGIATRAION_SUCCESSFULL} component={RegistrationSuccessful} />
        <Stack.Screen name={RouteName.TRANSLATION_SCREEN} component={TranslationScreen} />

        <Stack.Screen name={RouteName.OTP_VERYFY_SCREEN} component={OtpVeryfiveScreen} />

        <Stack.Screen name={RouteName.SWIPER_SCREEN} component={Swiperscreen} />
        <Stack.Screen name={RouteName.FORGET_PASSWORD} options={{
          headerShown: true,
          title: 'Forget Password',
          headerTintColor: colorrdata,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: colorrdata,
            fontSize: 17,
            fontSize: 20,
            marginLeft: 17,
            fontWeight: '700'
          },
        }} component={ForgotPassword} />
        <Stack.Screen name={RouteName.EVENTS_DETAILS_SCREEN} component={EventsDetails} />
        {/* <Stack.Screen name={RouteName.PAYMENT_SUCCESSFULL} component={PaytmSuccessFully} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;