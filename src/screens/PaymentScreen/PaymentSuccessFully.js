import React, { useEffect, useMemo } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { PaymentSuccessFul } from '../../styles';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";
import images from "../../index";
import { useTheme } from '@react-navigation/native';

const PaytmSuccessFully = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const { Colors } = useTheme();
  const PaymentSuccessFuls = useMemo(() => PaymentSuccessFul(Colors), [Colors]);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      navigation.navigate(RouteName.HOME_TAB);
      clearInterval(interval);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={PaymentSuccessFuls.MinstyleViewPhotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        ContentContainerStyle={PaymentSuccessFuls.MainViewPaymentSuccess}>
        <View>
          <View>
            <View style={PaymentSuccessFuls.MinViewSigninScreen}>
              <TouchableOpacity style={PaymentSuccessFuls.Imagecebter}>
                <Image source={images.Payment_successfull_image} resizeMode='center' style={PaymentSuccessFuls.PaymentSuccesfullImg} />
              </TouchableOpacity>
              <View style={PaymentSuccessFuls.TextCenterView}>
                <Text style={PaymentSuccessFuls.TextCenterPayment}>{t("PAYMENT_SUCCESSFULL")}</Text>
              </View>
              <Text style={PaymentSuccessFuls.TextCenterPaymentTwo}>{t("Your_payment_has_been")}</Text>
              <TouchableOpacity style={PaymentSuccessFuls.FlexRowcoffiText}>
                <Text style={PaymentSuccessFuls.TotalQAmountPaid}>{t("PAYED_BY")}</Text>
                <Text style={PaymentSuccessFuls.PriceTextSet}>{t("Google_Pay")}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={PaymentSuccessFuls.FlexRowcoffiTextTwo}>
                <Text style={PaymentSuccessFuls.TotalQAmountPaid}>{t("TRANCATION_DATE")}</Text>
                <Text style={PaymentSuccessFuls.PriceTextSet}>22 aug 2020,05:25 AM</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default PaytmSuccessFully;