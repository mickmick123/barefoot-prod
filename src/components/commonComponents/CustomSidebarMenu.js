import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Sidemenu } from '../../styles';
import RouteName from '../../routes/RouteName';
import { Colors, SH } from '../../utils';
import { ConfirmationAlert, VectorIcon } from '../../components';
import { useTranslation } from "react-i18next";

const CustomSidebarMenu = (props) => {
  const { navigation } = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');
  const [cancelbutton, SetCancelbutton] = useState('Cancel');
  const { t } = useTranslation();

  var alertdata = {
    'logout': " Are you sure want to logout?",
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
    okbutton;
  }
  const Onpressfunction = (e) => {
    navigation.toggleDrawer();
    navigation.navigate(e)
  };
  return (
    <ScrollView>
      <View style={Sidemenu.customslidebarmenu}>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.HOME_TAB)
        }>
          <VectorIcon
            icon="Feather"
            size={SH(19)}
            name="home"
            color={Colors.theme_backgound}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Home_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.EVENT_TAB)
        }>
          <VectorIcon
            icon="MaterialIcons"
            size={SH(19)}
            name="event"
            color={Colors.theme_backgound}
            style={Sidemenu.logoimage}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Event_List")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.ADD_EVENT_SCREEN)
        }>
          <VectorIcon
            icon="AntDesign"
            size={SH(19)}
            name="addfile"
            color={Colors.theme_backgound}
            style={Sidemenu.logoimage}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Add_Event")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.EVENT_AROUND_MAP)
        }>
          <VectorIcon
            icon="FontAwesome"
            size={SH(19)}
            name="map-marker"
            color={Colors.theme_backgound}
            style={Sidemenu.logoimage}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Events_Around")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.BOOKMARK_TAB)
        }>
          <VectorIcon
            icon="FontAwesome" name="bookmark" style={Sidemenu.logoimage} color={Colors.theme_backgound} size={SH(19)} />
          <Text style={Sidemenu.hometextstyle}>{t("Bookmark_Text")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.NOTIFICATION_SCREEN)
        }>
          <VectorIcon
            icon="Ionicons" size={SH(19)} name="notifications" style={Sidemenu.logoimage} color={Colors.theme_backgound} />
          <Text style={Sidemenu.hometextstyle}>{t("Notification_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.TRENDING_SCREEN)
        }>
          <VectorIcon
            icon="Feather" size={SH(19)} name="trending-up" style={Sidemenu.logoimage} color={Colors.theme_backgound} />
          <Text style={Sidemenu.hometextstyle}>{t("Trending_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.SEARCH_SCREEN)
        }>
          <VectorIcon
            icon="AntDesign" size={SH(19)} name="search1" style={Sidemenu.logoimage} color={Colors.theme_backgound} />
          <Text style={Sidemenu.hometextstyle}>{t("Search_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.EVENTS_DETAILS_SCREEN)
        }>
          <VectorIcon
            icon="MaterialIcons"
            size={SH(19)}
            name="event"
            color={Colors.theme_backgound}
            style={Sidemenu.logoimage}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Event_Details")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.CHAT_SCREEN)
        }>
          <VectorIcon
            icon="Ionicons" size={SH(19)} name="chatbubble-ellipses" style={Sidemenu.logoimage} color={Colors.theme_backgound} />
          <Text style={Sidemenu.hometextstyle}>{t("Chat_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.ORGAIZER_SCREEN)
        }>
          <VectorIcon
            icon="FontAwesome5" size={SH(19)} name="history" style={Sidemenu.logoimage} color={Colors.theme_backgound} />
          <Text style={Sidemenu.hometextstyle}>{t("Organizer_history")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.BUY_TICKET_SCREEN)
        }>
          <VectorIcon
            icon="Entypo" size={SH(19)} name="ticket" style={Sidemenu.logoimage} color={Colors.theme_backgound} />
          <Text style={Sidemenu.hometextstyle}>{t("Buy_ticket_option")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.SCAN_SCREEN)
        }>
          <VectorIcon
            icon="MaterialIcons" size={SH(19)} name="qr-code-scanner" style={Sidemenu.logoimage} color={Colors.theme_backgound} />
          <Text style={Sidemenu.hometextstyle}>{t("Scanner_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.REVIEWS_SCREEN)
        }>
          <VectorIcon
            icon="MaterialIcons" size={SH(19)} name="feedback" style={Sidemenu.logoimage} color={Colors.theme_backgound} />
          <Text style={Sidemenu.hometextstyle}>{t("Feedback_Text")} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.PAYMENT_SCREEN)
        }>
          <VectorIcon
            icon="MaterialIcons" size={SH(19)} name="payment" style={Sidemenu.logoimage} color={Colors.theme_backgound} />
          <Text style={Sidemenu.hometextstyle}>{t("Payment_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.TICKET_SCREEN)
        }>
          <VectorIcon
            icon="Entypo" size={SH(19)} name="ticket" style={Sidemenu.logoimage} color={Colors.theme_backgound} />
          <Text style={Sidemenu.hometextstyle}>{t("Download_Ticket")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.PROFILE_TAB)
        }>
          <VectorIcon
            icon="FontAwesome" size={SH(19)} name="user-circle" style={Sidemenu.logoimage} color={Colors.theme_backgound} />
          <Text style={Sidemenu.hometextstyle}>{t("Profile_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.SETTING_SCREEN)
        }>
          <VectorIcon
            icon="AntDesign" size={SH(19)} name="setting" style={Sidemenu.logoimage} color={Colors.theme_backgound} />
          <Text style={Sidemenu.hometextstyle}>{t("Settings_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.HELP_SCREEN)
        }>
          <VectorIcon
            icon="FontAwesome5" size={SH(19)} name="hands-helping" style={Sidemenu.logoimage} color={Colors.theme_backgound} />
          <Text style={Sidemenu.hometextstyle}>{t("Help_Text")}</Text>
        </TouchableOpacity>
        <View style={Sidemenu.settingandlogout}>
          <TouchableOpacity style={Sidemenu.flexrowset} onPress={() => {
            setAlertVisible(true);
            setAlertMessage(alertdata.logout);
            Setokbutton('');
          }}>
            <VectorIcon
              icon="Entypo" name="log-out" color={Colors.theme_backgound} size={SH(23)} />
            <Text style={Sidemenu.hometextstyle}>{t("Logout_Text")}</Text>
          </TouchableOpacity>
        </View>
        <ConfirmationAlert
          message={alertMessage}
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPressCancel={() => setAlertVisible(!alertVisible)}
          onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
          cancelButtonText={cancelbutton}
        />
      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;

