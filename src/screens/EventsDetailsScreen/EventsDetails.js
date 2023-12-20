import React, { useState, useMemo } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity, StatusBar, Share } from "react-native";
import { EventsStyles, Style } from '../../styles';
import { Button, Spacing, ConfirmationAlert, VectorIcon } from '../../components';
import { SH, SF } from '../../utils';
import { useSelector } from "react-redux";
import RouteName from "../../routes/RouteName";
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const EventsDetails = (props) => {
  const { Colors } = useTheme();
  const EventsStyle = useMemo(() => EventsStyles(Colors), [Colors]);
  const { detailsStore } = useSelector(state => state.DataReducer) || { detailsStore };
  const { navigation } = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');

  var alertdata = {
    'logout': "Successfully added into your calendar",
  }
  const onoknutton = () => {
    okbutton;
  }
  const shareMessage = () => {
    Share.share({
      message: 'Hellow',
    })
      .then((result) => console.log(result))
      .catch((errorMsg) => console.log(errorMsg));
  };

  const { t } = useTranslation();
  return (
    <View style={[EventsStyle.minstyleviewphotograpgy, EventsStyle.bgcolorset]}>
      <TouchableOpacity style={EventsStyle.Backaerrowwhite} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
        <VectorIcon icon="Ionicons" name="arrow-back-circle" size={SF(55)} color={Colors.theme_backgound} />
      </TouchableOpacity>
      <StatusBar hidden={true} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <KeyboardAvoidingView enabled>
          <View style={EventsStyle.minflexview}>
            <View style={EventsStyle.minviewsigninscreen}>
              <Image source={detailsStore.imageset} resizeMode='cover' style={EventsStyle.Imagestyleset} />
              <View style={EventsStyle.Setbgcolorview}>
                <View style={EventsStyle.Flexview}>
                  <TouchableOpacity style={EventsStyle.Setmusictextstyle}>
                    <Text style={EventsStyle.Musictetx}>{t(detailsStore.musicname)}</Text>
                  </TouchableOpacity>
                  <View style={EventsStyle.watchingflexviewstyle}>
                    <View style={EventsStyle.Imageviewstyles}>
                      <Image source={detailsStore.joiimage} style={EventsStyle.Imagestylestwo} />
                      <Image source={detailsStore.joiimagetwo} style={EventsStyle.Imagestylesthtree} />
                      <Image source={detailsStore.joiimagethree} style={EventsStyle.Imagestylesthfour} />
                    </View>
                    <Text style={EventsStyle.Peopletextstyle}>{t(detailsStore.peopleklive)}</Text>
                  </View>
                </View>
                <Spacing space={SH(20)} />
                <View>
                  <Text style={EventsStyle.Titlestyles}>{t(detailsStore.text)}</Text>
                </View>
                <View>
                  <Spacing space={SH(20)} />
                  <View style={EventsStyle.Flexrowestyles}>
                    <View style={EventsStyle.Calenderstyle}>
                      <VectorIcon icon="AntDesign" name="calendar" size={SF(25)} color={Colors.theme_backgound} />
                    </View>
                    <View>
                      <Text style={EventsStyle.Settitletext}>{detailsStore.datetext}</Text>
                      <Text style={EventsStyle.Settitletexttwo}>{t("Sunday_Text")}</Text>
                      <Spacing space={SH(4)} />
                      <ConfirmationAlert
                        message={alertMessage}
                        modalVisible={alertVisible}
                        setModalVisible={setAlertVisible}
                        onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                        buttonminview={EventsStyle.EventsStyle}
                        iconVisible={true}
                      />
                      <Button onPress={() => {
                        setAlertVisible(true);
                        setAlertMessage(alertdata.logout);
                        Setokbutton('');
                      }} buttonStyle={EventsStyle.Addtomybutton} buttonTextStyle={EventsStyle.Addtextstyles} title={'Add to My Calendar'} />
                    </View>
                  </View>
                  <Spacing space={SH(10)} />
                  <View style={EventsStyle.Flexrowestyles}>
                    <View style={EventsStyle.Calenderstyle}>
                      <VectorIcon icon="FontAwesome5" name="map-marked-alt" size={25} color={Colors.theme_backgound} />
                    </View>
                    <View>
                      <Text style={EventsStyle.Settitletext}>{t(detailsStore.locationaddresh)}</Text>
                      <Text style={EventsStyle.Settitletexttwo}>{t("Sunday_Text")}</Text>
                      <Spacing space={SH(4)} />
                      <Button onPress={() => navigation.navigate(RouteName.EVENT_AROUND_MAP)} buttonTextStyle={EventsStyle.Addtextstyles} buttonStyle={EventsStyle.Addtomybutton} title={t("See_Maps")} />
                    </View>
                  </View>
                  <Spacing space={SH(10)} />
                  <View>
                    <Button onPress={() => navigation.navigate(RouteName.SCAN_SCREEN)} buttonTextStyle={EventsStyle.Textstyle} title={t("View_Participants")} nextArraow={true} />
                  </View>
                  <Spacing space={SH(50)} />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={EventsStyle.Bottomviewsetstyles}>
        <View style={EventsStyle.Flexrowseticon}>
          <TouchableOpacity onPress={shareMessage} style={EventsStyle.Calenderstyle}>
            <VectorIcon icon="AntDesign" name="sharealt" size={25} color={Colors.theme_backgound} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(RouteName.BOOKMARK_TAB)} style={EventsStyle.Calenderstyle}>
            <VectorIcon icon="Ionicons" name="ios-bookmark-outline" size={25} color={Colors.theme_backgound} />
          </TouchableOpacity>
        </View>
        <View style={EventsStyle.Setbuttonwidth}>
          <Button title={t("Book_Ticket")} onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)} />
        </View>
      </View>
    </View>
  );
};
export default EventsDetails;
