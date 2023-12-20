import React, { useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SwiperStyle } from '../../styles';
import { Button, Spacing, Lottie } from '../../components';
import RouteName from '../../routes/RouteName';
import { Swiperdata, SH } from '../../utils';
import images from '../../index';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const App = (props) => {
  const { Colors } = useTheme();
  const { navigation } = props;
  const { t } = useTranslation();
  const SwiperStyles = useMemo(() => SwiperStyle(Colors), [Colors]);
  const RenderItem = ({ item }) => {
    return (
      <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={SwiperStyles.scrollviewstyle}>
          <View>
            <View style={SwiperStyles.Animationviewstyle}>
              {item.animation}
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={SwiperStyles.iconbgcolorview} onPress={() => navigation.navigate(RouteName.TRANSLATION_SCREEN)}>
          <Lottie Lottiewidthstyle={SwiperStyles.iconbgcolorview} source={images.Rightaerrow_swiper} />
        </TouchableOpacity>
        <Text style={SwiperStyles.titleStyle}>
          {t(item.title)}
        </Text>
        <Text style={SwiperStyles.textstyle}>
          {t(item.text)}
        </Text>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={SwiperStyles.setbgbuttondiv}>
        <View style={SwiperStyles.buttonCircle}>
          <Button
            title={t("Get_Started")}
            onPress={
              () => navigation.navigate(RouteName.TRANSLATION_SCREEN)
            }
          />
        </View>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={SwiperStyles.setbgbuttondiv}>
        <Spacing space={SH(12)} />
        <Text style={SwiperStyles.Nexttextstyle}>{t("Next_Text")}</Text>
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View style={SwiperStyles.setbgbuttondiv}>
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
          <Spacing space={SH(12)} />
          <Text style={SwiperStyles.Nexttextstyle}>{t("Skip_Text")}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <AppIntroSlider
        data={Swiperdata}
        renderItem={RenderItem}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        renderDoneButton={_renderDoneButton}
        showSkipButton={true}
        activeDotStyle={SwiperStyles.activedotstyle}
        dotStyle={SwiperStyles.dotSwiperStyleset}
      />
    </>
  );
};
export default App;

