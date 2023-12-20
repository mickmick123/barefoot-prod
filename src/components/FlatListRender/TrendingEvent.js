import React, { useMemo } from 'react';
import { Text, View, Image } from "react-native";
import { HomeStyles,TrendingStyles } from '../../styles';
import { Button, Spacing, LikeUnlike, VectorIcon } from '../../components';
import { SH, SF } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const TrendingEvent = (props) => {
  const { Colors } = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  const TrendingStyle = useMemo(() => TrendingStyles(Colors), [Colors]);
  const { onPress, item, eventAround, } = props;
  const { t } = useTranslation();

  return (
    <View style={TrendingStyle.Eventlistview}>
      <View>
        <View>
          <View style={TrendingStyle.Flexrowbox}>
            <View style={TrendingStyle.Widthstyles}>
              <Image source={item.imageset} style={TrendingStyle.Setimagestyles} />
            </View>
            <View style={TrendingStyle.Widthstylestwo}>
              <Text style={TrendingStyle.Textstylesbastu}>{t(item.text)}</Text>
              <View style={TrendingStyle.Flexrowmusiz}>
                <View style={HomeStyle.Musicborderview}>
                  <Text style={HomeStyle.Musictextstryles}>{t(item.musicname)}</Text>
                </View>
                <View style={HomeStyle.watchingflexviewstyle}>
                  <View style={HomeStyle.Imageviewstyles}>
                    <Image source={item.joiimage} style={HomeStyle.Imagestylestwo} />
                    <Image source={item.joiimagetwo} style={HomeStyle.Imagestylesthtree} />
                    <Image source={item.joiimagethree} style={HomeStyle.Imagestylesthfour} />
                  </View>
                  <Text style={HomeStyle.Peopletextstyle}>{t(item.peopleklive)}</Text>
                </View>
              </View>
              <Spacing space={SH(10)} />
              <View style={HomeStyle.Flexviewtwo}>
                <View style={HomeStyle.Flexrowstyles}>
                  <VectorIcon iocn="FontAwesome" name="map-marker" size={SF(20)} color={Colors.theme_backgound} />
                  <Text style={HomeStyle.Mapstylesadrresh}>{t(item.locationaddresh)}</Text>
                </View>
                <LikeUnlike />
              </View>
            </View>
          </View>
        </View>
        <Spacing space={SH(10)} />
        <View style={HomeStyle.Flexrowsettwobutton}>
          <Button onPress={() => onPress()} buttonStyle={HomeStyle.Twodiifrentbtn} title={t("See_Details")} />
          <Button onPress={() => eventAround()} buttonStyle={HomeStyle.Revieewsbutton} buttonTextStyle={HomeStyle.RevieewsbuttonTextstyles} title={t("See_Map")} />
        </View>
      </View>
      <View style={HomeStyle.Eventviews}>
        <View style={HomeStyle.Eventsmallview}>
          <Text style={HomeStyle.Eventtextstyles}>{t(item.datetext)}</Text>
        </View>
      </View>
    </View>
  );
};
export default TrendingEvent;
