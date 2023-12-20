import React, { useMemo } from "react";
import { Text, View, Image, ScrollView, StatusBar, KeyboardAvoidingView, } from "react-native";
import { OrganiZerStyles, Style } from '../../styles';
import images from '../../index';
import { Button, Spacing } from '../../components';
import RouteName from "../../routes/RouteName";
import { SH } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const OrganizerScreen = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const OrganiZerStyle = useMemo(() => OrganiZerStyles(Colors), [Colors]);
  const { t } = useTranslation();

  return (
    <View style={[OrganiZerStyle.minstyleviewphotograpgy, OrganiZerStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <KeyboardAvoidingView enabled>
          <View style={OrganiZerStyle.minflexview}>
            <View style={OrganiZerStyle.minviewsigninscreen}>
              <View style={OrganiZerStyle.Centerimage}>
                <Image source={images.User_image_two} resizeMode="cover" style={OrganiZerStyle.Setfileimages} />
              </View>
              <Spacing space={SH(10)} />
              <Text style={OrganiZerStyle.Usertitlestyles}>{t("John_doe")}</Text>
              <Spacing space={SH(30)} />
              <View style={OrganiZerStyle.Setrflexrow}>
                <View>
                  <Text style={OrganiZerStyle.Followingtext}>2368</Text>
                  <Text style={OrganiZerStyle.Follwerstexrtstyle}>{t("Followers_Text")}</Text>
                </View>
                <View>
                  <Text style={OrganiZerStyle.Followingtext}>3409</Text>
                  <Text style={OrganiZerStyle.Follwerstexrtstyle}>{t("Following_Text")}</Text>
                </View>
                <View>
                  <Text style={OrganiZerStyle.Followingtext}>45</Text>
                  <Text style={OrganiZerStyle.Follwerstexrtstyle}>{t("Events_Text")}</Text>
                </View>
              </View>
              <Spacing space={SH(30)} />
              <View style={OrganiZerStyle.Buttonflexview}>
                <Button plusicon="plus" buttonTextStyle={OrganiZerStyle.Abouttextstyles} buttonStyle={OrganiZerStyle.Setwidthbutton} title={t("Follow_Text")} />
                <Button onPress={() => navigation.navigate(RouteName.CHAT_SCREEN)} messageicon="message1" buttonStyle={OrganiZerStyle.Messagebuttonstyles} buttonTextStyle={OrganiZerStyle.Messagetextstyles} title={t("Messages_Text")} />
              </View>
              <Spacing space={SH(30)} />
              <View style={OrganiZerStyle.Buttonflexview}>
                <Button buttonStyle={OrganiZerStyle.Setwidthbuttonfour} buttonTextStyle={OrganiZerStyle.Abouttextstyles} title={t("About_Text")} />
                <Button onPress={() => navigation.navigate(RouteName.TRENDING_SCREEN)} buttonStyle={OrganiZerStyle.buttontextevetsview} buttonTextStyle={OrganiZerStyle.Messagetextstyles} title={t("Events_Text")} />
                <Button onPress={() => navigation.navigate(RouteName.REVIEWS_SCREEN)} buttonStyle={OrganiZerStyle.buttontextevetsview} buttonTextStyle={OrganiZerStyle.Messagetextstyles} title={t("Reviews_Screen")} />
              </View>
              <Spacing space={SH(30)} />
              <Text style={OrganiZerStyle.Abouttextstyle}>{t("About_Text")}</Text>
              <Spacing space={SH(10)} />
              <Text style={OrganiZerStyle.paregraphtextstyles}>{t("Lorem_Text")}</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default OrganizerScreen;
