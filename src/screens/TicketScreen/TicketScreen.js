import React, { useMemo } from "react";
import { Text, View, ScrollView, StatusBar, KeyboardAvoidingView, Image } from "react-native";
import { AddEventsStyles, Style } from '../../styles';
import { Button, Spacing } from '../../components';
import { SH } from '../../utils';
import images from "../../image";
import RouteName from "../../routes/RouteName";
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const TicketScreen = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const { t } = useTranslation();
  const AddEventsStyle = useMemo(() => AddEventsStyles(Colors), [Colors]);
  return (
    <View style={[AddEventsStyle.minstyleviewphotograpgy, AddEventsStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white_text_color} />
      <View style={AddEventsStyle.setwidthsttyles}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.ScrollViewStyles}>
          <KeyboardAvoidingView enabled>
            <View style={AddEventsStyle.minflexview}>
              <View style={AddEventsStyle.DownloadTicket}>
                <View style={AddEventsStyle.qrcodescanner}>
                  <View>
                    <Text style={AddEventsStyle.qrcosetitlestyles}>{t("Bastu_Conntected")}</Text>
                    <Image source={images.Scanner_image_one} resizeMode={'contain'} style={AddEventsStyle.imagestyleset} />
                  </View>
                </View>
                <View>
                  <Spacing space={SH(70)} />
                  <Text style={AddEventsStyle.nametextstyles}>{t("Name_Text")}</Text>
                  <Text style={AddEventsStyle.nametextstylestwo}>{t("John_Smith")}</Text>
                  <Spacing space={SH(20)} />
                  <View style={AddEventsStyle.Flexviewnametitle}>
                    <View>
                      <Text style={AddEventsStyle.nametextstyles}>{t("Date_Texts")}</Text>
                      <Text style={AddEventsStyle.nametextstylestwo}>{t("Jun_Date_Text")}</Text>
                    </View>
                    <View>
                      <Text style={AddEventsStyle.nametextstyles}>{t("Time_Texts")}</Text>
                      <Text style={AddEventsStyle.nametextstylestwo}>{t("Time_Texts_2")}</Text>
                    </View>
                  </View>
                  <View>
                    <Spacing space={SH(12)} />
                    <Text style={AddEventsStyle.nametextstyles}>{t("Location_Text")}</Text>
                    <Text style={AddEventsStyle.nametextstylestwo}>{t("Bullwood_Rd")}</Text>
                  </View>
                  <Spacing space={SH(17)} />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={AddEventsStyle.Buttonviewset}>
          <Button onPress={() => navigation.navigate(RouteName.HOME_TAB)} title={t("Download_Ticket")} />
        </View>
      </View>
    </View >
  );
};
export default TicketScreen;
