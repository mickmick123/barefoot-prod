import React from 'react';
import {View, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeTab,
  Event,
  EventsAround,
  AddEventsScreen,
  Profile,
} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Style} from '../styles';
import {
  ColorPicker,
  CustomSidebarMenu,
  AppHeader,
  HeaderLeftMenuIcon,
  NotificatioandSearchIcon,
  VectorIcon,
} from '../components';
import RouteName from '../routes/RouteName';
import {Colors, SH, SF} from '../utils';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderArray = {
  headerShown: true,
  headerTintColor: Colors.theme_backgound,
  headerShadowVisible: false,
  headerStyle: Style.headerStyle,
  // headerStyle: Style.headerTitleStyle,
};

function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 0}}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScsreenTabAll"
      drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen
        name="HomeScsreenTabAll"
        options={{headerShown: false}}
        component={HomeScsreenTabAll}
      />
    </Drawer.Navigator>
  );
}
function Root() {
  StatusBar.setBackgroundColor(Colors.white_text_color);
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Homese"
        component={HomeScsreenTabAll}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;

function HomeTabScreenStack(props) {
  const {navigation} = props;
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          ...HeaderArray,
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Home_Text')} />
          ),
          headerLeft: () => <HeaderLeftMenuIcon {...props} />,
          headerRight: () => (
            <NotificatioandSearchIcon
              onPress={() => navigation.navigate(RouteName.SEARCH_SCREEN)}
              notification={() =>
                navigation.navigate(RouteName.NOTIFICATION_SCREEN)
              }
              {...props}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function EventTabScreenStack(props) {
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Event">
      <Stack.Screen
        name="Event"
        component={Event}
        options={{
          ...HeaderArray,
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Events_Texts')} />
          ),
          headerLeft: () => <HeaderLeftMenuIcon {...props} />,
          headerRight: () => <ColorPicker />,
        }}
      />
    </Stack.Navigator>
  );
}
function EventsAroundTabStack(props) {
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName="EventsAround">
      <Stack.Screen
        name="EventsAround"
        component={EventsAround}
        options={{
          ...HeaderArray,
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Events_Around')} />
          ),
          headerLeft: () => <HeaderLeftMenuIcon {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}
function AddEventScreenStack(props) {
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName="AddEventsScreen">
      <Stack.Screen
        name="AddEventsScreen"
        component={AddEventsScreen}
        options={{
          ...HeaderArray,
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Add_Events')} />
          ),
          headerLeft: () => <HeaderLeftMenuIcon {...props} />,
          headerRight: () => <ColorPicker />,
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileScreenStack(props) {
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          ...HeaderArray,
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Profile_Text')} />
          ),
          headerLeft: () => <HeaderLeftMenuIcon {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

export function HomeScsreenTabAll() {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Homes"
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        activeTintColor: Colors.theme_backgound,
        inactiveTintColor: Colors.gray_text_color,
        activeBackgroundColor: Colors.white_text_color,
        labeled: true,
        labelStyle: {},
        tabStyle: {
          height: SH(49),
          backgroundColor: Colors.white_text_color,
          paddingTop: 0,
          paddingBottom: SH(3),
        },
      }}>
      <Tab.Screen
        name={RouteName.HOME_TAB}
        component={HomeTabScreenStack}
        options={{
          tabBarLabel: t('Home_Text'),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              icon="Feather"
              name="home"
              color={focused ? Colors.theme_backgound : Colors.gray_text_color}
              size={SF(27)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.EVENT_TAB}
        component={EventTabScreenStack}
        options={{
          tabBarLabel: t('Events_Texts'),
          tabBarIcon: ({focused}) => (
            <View>
              <VectorIcon
                icon="MaterialIcons"
                name="event"
                color={
                  focused ? Colors.theme_backgound : Colors.gray_text_color
                }
                size={SF(27)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.ADD_EVENT_SCREEN}
        component={AddEventScreenStack}
        options={{
          tabBarLabel: t('Add_Events'),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              icon="AntDesign"
              name="addfile"
              color={focused ? Colors.theme_backgound : Colors.gray_text_color}
              size={SF(27)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.EVENT_AROUND_MAP}
        component={EventsAroundTabStack}
        options={{
          tabBarLabel: t('Events_Around'),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              icon="FontAwesome"
              name="map-marker"
              color={focused ? Colors.theme_backgound : Colors.gray_text_color}
              size={SF(27)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.PROFILE_TAB}
        component={ProfileScreenStack}
        options={{
          tabBarLabel: t('Profile_Text'),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              icon="FontAwesome"
              name="user-circle"
              color={focused ? Colors.theme_backgound : Colors.gray_text_color}
              size={SF(27)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
