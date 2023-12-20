import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { HomeStyles } from '../../styles';
import { Spacing, LikeUnlike, VectorIcon } from '../../components';
import { SH, SF } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const TrendingBoxdata = (props) => {
  const { Colors } = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  const { onPress, item } = props;
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={HomeStyle.Setterendingview} onPress={() => onPress()}>
      <View>
        <Image source={item.imageset} style={HomeStyle.Imagestyles} />
      </View>
      <View style={HomeStyle.Textviewstyles}>
        <Text style={HomeStyle.Titletextstyles}>{t(item.text)}</Text>
        <Spacing space={SH(5)} />
        <View style={HomeStyle.Minflexviewstyles}>
          <View style={HomeStyle.Musicborderview}>
            <Text style={HomeStyle.Musictextstryles}>{t(item.musicname)}</Text>
          </View>
          <View style={HomeStyle.Imageviewstyles}>
            <Image source={item.joiimage} style={HomeStyle.Imagestylestwo} />
            <Image source={item.joiimagetwo} style={HomeStyle.Imagestylesthtree} />
            <Image source={item.joiimagethree} style={HomeStyle.Imagestylesthfour} />
          </View>
          <Text style={HomeStyle.Peopletextstyle}>{t(item.peopleklive)}</Text>
        </View>
        <Spacing space={SH(10)} />
        <View style={HomeStyle.Flexviewtwo}>
          <View style={HomeStyle.Flexrowstyles}>
            <VectorIcon icon="FontAwesome" name="map-marker" size={SF(20)} color={Colors.theme_backgound} />
            <Text style={HomeStyle.Mapstylesadrresh}>{t(item.locationaddresh)}</Text>
          </View>
          <LikeUnlike />
        </View>
      </View>
      <View style={HomeStyle.Dateview}>
        <View style={HomeStyle.Setbgcolortext}>
          <Text style={HomeStyle.Textstyledate}>{t(item.datetext)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default TrendingBoxdata;
