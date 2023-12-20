import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, TextInput, } from "react-native";
import { HelpScreenStyles, Style } from '../../styles';
import { Button, ConfirmationAlert, Lottie, Spacing, RatingScreen } from '../../components';
import images from "../../index";
import { RouteName } from "../../routes";
import { SW, SH } from "../../utils";
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const ReviewsScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HelpScreenStyle = useMemo(() => HelpScreenStyles(Colors), [Colors]);
  const [text, onChangeText] = React.useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  var alertdata = {
    'logout': t("Reviews_Submit_Successful"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.HOME_TAB);
  }

  return (
    <View style={HelpScreenStyle.MinViewScreenTwo}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <KeyboardAvoidingView enabled>
          <View style={HelpScreenStyle.KeyBordTopViewStyle}>
            <View style={HelpScreenStyle.MinFlexView}>
              <View style={HelpScreenStyle.MinContentView}>
                <Lottie Lottiewidthstyle={HelpScreenStyle.PostionReView} source={images.Reviews_animation} />
                <Text style={HelpScreenStyle.AccountTextTwo}>{t("Please_OnDemand_Service")}</Text>
                <View style={HelpScreenStyle.FlexRowStarSignup}>
                  <RatingScreen
                    type='custom'
                    ratingColor={Colors.amber_color}
                    ratingBackgroundColor={Colors.chinese_silver}
                    ratingCount={SW(5)}
                    tintColor={Colors.white_text_color}
                    imageSize={SW(30)}
                    startingValue={SW(3.5)}
                    isDisabled={false}
                  />
                </View>
                <Text style={HelpScreenStyle.AccountTextSuccessfullyTwo}>{t("Please_OnDemand_Two")}</Text>
                <View style={HelpScreenStyle.InputUnderLineReviews}>
                  <TextInput
                    style={HelpScreenStyle.PositionStyleInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={t("Reviews_Enter_Your_Commenet")}
                    placeholderTextColor={Colors.gray_text_color}
                  />
                </View>
                <Spacing space={SH(20)} />
                <View style={HelpScreenStyle.AccountButton}>
                  <Button onPress={() => {
                    setAlertVisible(true);
                    setAlertMessage(alertdata.logout);
                  }} title={t("Reviews_Submit")}
                  />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <ConfirmationAlert
        message={alertMessage}
        modalVisible={alertVisible}
        setModalVisible={setAlertVisible}
        onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
        buttonminview={HelpScreenStyle.ButtonView}
        iconVisible={true}
        buttonText={t("Ok")}
      />
    </View>
  );
};
export default ReviewsScreen;
