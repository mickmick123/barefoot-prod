import React, { useState, useEffect } from 'react';
import RouteName from './RouteName';
import { ColorPicker, CustomSidebarMenu, AppHeader } from '../components';
import { Colors } from '../utils';
import { DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { useSelector } from "react-redux";
import { Style } from '../styles';

import { TabNavigator } from '../routes';
import {
  OrganizerScreen, NotificationScreen, TrendingScreen, SearchScreenset,
  SearchScreen, BuyTicketScreen,
  PaymentScreen,
  TicketScreen,
  ReviewsScreen,
  HelpScreen,
  FAQScreen,
  Scanner,
  Bookmarks,
  Chatscreen,
  PaymentSuccessFully,
  SettingsScreen
} from '../screens';
import { useTranslation } from "react-i18next";

const SideNavigator = (props) => {
  const { t } = useTranslation();
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors
  };
  const HeaderArray = {
    headerShown: true,
    headerTintColor: Colors.theme_backgound,
    headerShadowVisible: false,
    headerStyle: Style.headerStyle,
    headerStyle: Style.headerTitleStyle,
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
    <Drawer.Navigator theme={colorValue} drawerContent={(props) => <CustomSidebarMenu {...props} />} screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: Colors.white_text_color,
      }
    }}
    >
      <Stack.Screen name={RouteName.HOME_SCREEN} component={TabNavigator} />
      <Drawer.Screen
        name={RouteName.ORGAIZER_SCREEN} component={OrganizerScreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Organizer_Text")} />,
          ...HeaderArray,
          headerRight: (props) => <ColorPicker {...props} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.NOTIFICATION_SCREEN} component={NotificationScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Notification_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.TRENDING_SCREEN} component={TrendingScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Trending_Text")} />,
          headerRight: (props) => <SearchScreenset />,
        }}
      />
      <Drawer.Screen
        name={RouteName.SEARCH_SCREEN} component={SearchScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Search_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.CHAT_SCREEN} component={Chatscreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Chat_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.BUY_TICKET_SCREEN} component={BuyTicketScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Buy_Ticket_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.PAYMENT_SCREEN} component={PaymentScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Payment_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.TICKET_SCREEN} component={TicketScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Ticket_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.REVIEWS_SCREEN} component={ReviewsScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Reviews_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.HELP_SCREEN} component={HelpScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Help_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.FAQ_SCREEN} component={FAQScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("FAQ_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.SCAN_SCREEN} component={Scanner}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Scan_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.BOOKMARK_TAB} component={Bookmarks}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Bookmark_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.PAYMENT_SUCCESSFULL} component={PaymentSuccessFully}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Payment_SuccessFul")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.SETTING_SCREEN} component={SettingsScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Setting_Text")} />,
        }}
      />
    </Drawer.Navigator>
  );
}
export default SideNavigator;