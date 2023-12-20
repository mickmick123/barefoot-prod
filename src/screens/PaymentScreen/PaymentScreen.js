import React, { useMemo } from "react";
import { Text, View, Image, ScrollView, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { PaymentStyles } from '../../styles';
import images from '../../index';
import { RouteName } from '../../routes';
import { Paymentdata } from "../../utils";
import { Container, Spacing, PaymentListData } from "../../components";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const MangePaymentMethode = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const PaymentStyle = useMemo(() => PaymentStyles(Colors), [Colors]);

  return (
    <Container>
      <Spacing />
      <View style={PaymentStyle.MinStyleViewPhotograpgy}>
        <ScrollView>
          <KeyboardAvoidingView enabled>
            <View style={PaymentStyle.MinFlexView}>
              <View style={PaymentStyle.MinViewSigninScreen}>
                <View>
                  <TouchableOpacity style={[PaymentStyle.FlexRowCreditCardTwo, PaymentStyle.BottomBorder]} onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULL)}>
                    <View style={PaymentStyle.IconSetBorderWidth}>
                      <Image source={images.Payment_image_three} resizeMode='center' style={PaymentStyle.SetbgImage} />
                    </View>
                    <Text style={PaymentStyle.CreditCardText}>{t("Paypal")}</Text>
                  </TouchableOpacity>
                  <Text style={PaymentStyle.CardTextStyleTwo}>{t("UPI")}</Text>
                  <TouchableOpacity style={PaymentStyle.FlexRowCreditCardTwo} onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULL)}>
                    <View style={PaymentStyle.IconSetBorderWidth}>
                      <Image source={images.Payment_image_three} resizeMode='center' style={PaymentStyle.SetbgImage} />
                    </View>
                    <Text style={PaymentStyle.CreditCardText}>{t("UPI")}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={PaymentStyle.FlexRowCreditCardTwo} onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULL)}>
                    <View style={PaymentStyle.IconSetBorderWidth}>
                      <Image source={images.Payment_image_four} resizeMode='center' style={PaymentStyle.SetbgImage} />
                    </View>
                    <Text style={PaymentStyle.CreditCardText}>{t("Google_Pay")}</Text>
                  </TouchableOpacity>
                  <Text style={PaymentStyle.CardTextStyleThree}>{t("Wallets")}</Text>
                  <FlatList
                    data={Paymentdata}
                    renderItem={({ item }) => (<PaymentListData
                      item={item}
                    />)}
                    keyExtractor={item => item.id}
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};
export default MangePaymentMethode;