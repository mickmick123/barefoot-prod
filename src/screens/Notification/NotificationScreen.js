import React, { useMemo } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { HelpScreenStyles, Style } from '../../styles';
import images from '../../index';
import { Spacing } from '../../components';
import { SH } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const NotificationScreen = () => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HelpScreenStyle = useMemo(() => HelpScreenStyles(Colors), [Colors]);
  return (
    <View style={HelpScreenStyle.MinViewScreen}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyle}>
        <KeyboardAvoidingView enabled>
          <View style={HelpScreenStyle.NotificationView}>
            <View style={HelpScreenStyle.MinContentView}>
              <Spacing space={SH(20)} />
              <TouchableOpacity style={HelpScreenStyle.FlexDiractionRow}>
                <View>
                  <Image style={HelpScreenStyle.ImageSet} resizeMode='cover' source={images.Slider_six_image} />
                </View>
                <View style={HelpScreenStyle.ParegraphWidth}>
                  <Text style={HelpScreenStyle.TextParegraph}>{t("Noti_1")}</Text>
                  <Text style={HelpScreenStyle.TwoNavemBerScreen}>{t("Noti_2")}</Text>
                </View>
              </TouchableOpacity>
              <Spacing space={SH(20)} />
              <TouchableOpacity style={HelpScreenStyle.FlexDiractionRowTwo}>
                <View>
                  <Image style={HelpScreenStyle.ImageSet} resizeMode='contain' source={images.Slider_four_image} />
                </View>
                <View style={HelpScreenStyle.ParegraphWidthTwo}>
                  <Text style={HelpScreenStyle.TextParegraph}>{t("Noti_3")}</Text>
                  <Text style={HelpScreenStyle.TwoNavemBerScreen}>{t("Noti_4")}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default NotificationScreen;