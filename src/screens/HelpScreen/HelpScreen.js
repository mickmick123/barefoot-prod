import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, TextInput, } from "react-native";
import { HelpScreenStyles, Style } from '../../styles';
import { Button, Spacing, ConfirmationAlert } from '../../components';
import { SH } from '../../utils';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const HelpScreen = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const { Colors } = useTheme();
  const HelpScreenStyle = useMemo(() => HelpScreenStyles(Colors), [Colors]);
  const [alertMessage, setAlertMessage] = useState('');

  var alertdata = {
    'logout': t("Help_sand_mail_Successful"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.HOME_TAB);
  }
  return (
    <View style={HelpScreenStyle.MinViewScreen}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <KeyboardAvoidingView enabled>
          <View style={HelpScreenStyle.HelpViewStyles}>
            <Spacing space={SH(30)} />
            <View style={HelpScreenStyle.MinContentView}>
              <View>
                <TextInput style={HelpScreenStyle.TextInputWidth} placeholder={t("Type_Your_Message")} placeholderTextColor="gray" />
              </View>
              <View>
                <Text style={HelpScreenStyle.TextInputeText}>{t("Help_paregraph")}</Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={HelpScreenStyle.ButtonStyle}>
        <Button onPress={() => {
          setAlertVisible(true);
          setAlertMessage(alertdata.logout);
        }} title={t("Help_sand_mail")} />
      </View>
      <ConfirmationAlert
        message={alertMessage}
        modalVisible={alertVisible}
        iconVisible={true}
        setModalVisible={setAlertVisible}
        onPressCancel={() => setAlertVisible(!alertVisible)}
        onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
        buttonminview={HelpScreenStyle.FlexCenterButton}
        buttonText={t("Ok")}
      />
    </View>
  );
};
export default HelpScreen;
