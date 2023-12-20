import React, { useState,useMemo } from "react";
import { Text, View, ScrollView, StatusBar, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { NotificationStyles, Style } from '../../styles';
import { Button, Spacing } from '../../components';
import IconF from "react-native-vector-icons/FontAwesome";
import { SH } from '../../utils';
import RouteName from "../../routes/RouteName";
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const BuyTicketScreen = (props) => {
  const { Colors } = useTheme();
  const NotificationStyle = useMemo(() => NotificationStyles(Colors), [Colors]);
  const [count, setCount] = useState(1);
  const [counttwo, setCounttwo] = useState(278);
  const [color,setcolor] = useState(1);
  const { t } = useTranslation();
  const { navigation } = props;
  const Selectedcolor = (item) => {
    setcolor(item)
  }
  return (
    <View style={[NotificationStyle.minstyleviewphotograpgy, NotificationStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.ScrollViewStyles}>
          <KeyboardAvoidingView enabled>
            <View style={NotificationStyle.minflexview}>
              <View style={NotificationStyle.minviewsigninscreen}>
                <View style={NotificationStyle.Setwidth}>
                  <Text style={NotificationStyle.Tickettextstyles}>{t("Ticket_Type")}</Text>
                  <Spacing space={SH(10)} />
                  <View style={NotificationStyle.Setbuttonwidth}>
                    <TouchableOpacity onPress={() => Selectedcolor(1)} style={color === 1 ? NotificationStyle.vipbuttonstylestwo : NotificationStyle.vipbuttonstyles}>
                      <Text style={color === 1 ? NotificationStyle.viptextstylestwo: NotificationStyle.viptextstyles}>{t("Vip_Type")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Selectedcolor(2)} style={color === 2 ? NotificationStyle.vipbuttonstylestwo : NotificationStyle.vipbuttonstyles}>
                      <Text style={color === 2 ? NotificationStyle.viptextstylestwo: NotificationStyle.viptextstyles}>{t("Economy_Text")}</Text>
                    </TouchableOpacity>
                  </View>
                  <Spacing space={SH(50)} />
                  <View style={NotificationStyle.buttonStyleflex}>
                    <TouchableOpacity onPress={() => { if (count > 1) { setCount(count - 1) }; if (counttwo > 1) { setCounttwo(counttwo - 1) } }} style={NotificationStyle.iconstyles}>
                      <IconF name="minus" size={23} color={Colors.theme_backgound} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={NotificationStyle.Counttextstyles}>{count}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setCount(count + 1); setCounttwo(counttwo + 110) }} style={NotificationStyle.iconstyles}>
                      <IconF name="plus" size={23} color={Colors.theme_backgound} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={NotificationStyle.Setpostionabsolute}>
          <Text style={NotificationStyle.Totaldolardtextstyles}>{t("Total_Text")} <Text style={NotificationStyle.Dolardte3xtstyles}>$ {counttwo}</Text></Text>
          <Spacing space={SH(30)} />
          <Button onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)} title={t("Continue_Text")} />
        </View>
      </View>
    </View>
  );
};
export default BuyTicketScreen;
