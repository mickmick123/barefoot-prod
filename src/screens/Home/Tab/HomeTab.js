import React, {  useMemo } from 'react';
import { View, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, Image, FlatList, StatusBar } from "react-native";
import { HomeStyles, Style } from '../../../styles';
import { Spacing, TrendingBoxdataView } from '../../../components';
import { HomeFirstImageSlider, EventsAll, } from '../../../screens';
import { SH, Trendingboxdata } from '../../../utils';
import RouteName from '../../../routes/RouteName';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const HomeTabset = (props) => {
  const { Colors } = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  const { navigation } = props;
  const { t } = useTranslation();

  return (
    <View style={[HomeStyle.minstyleviewphotograpgy, HomeStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <KeyboardAvoidingView enabled>
          <View style={HomeStyle.minflexview}>
            <View style={HomeStyle.minviewsigninscreen}>
              <Spacing space={SH(20)} />
              <HomeFirstImageSlider onPress={() => navigation.navigate(RouteName.EVENT_TAB)}
                buyticket={() => navigation.navigate(RouteName.BUY_TICKET_SCREEN)} />
              <View style={HomeStyle.Commonmminview}>
                <View style={HomeStyle.Flexrowteotitle}>
                  <TouchableOpacity>
                    <Text style={HomeStyle.Trendingtext}>{t("Trending_Text")}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate(RouteName.EVENT_TAB)}>
                    <Text style={HomeStyle.Seealltextstyle}>{t("See_All")}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Spacing space={SH(10)} />
              <EventsAll />
              <View>
                <FlatList
                  data={Trendingboxdata}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (<TrendingBoxdataView onPress={() => navigation.navigate(RouteName.BOOKMARK_TAB)}
                    item={item}
                  />)}
                  keyExtractor={item => item.id}
                  contentContainerStyle={HomeStyle.Flatliststyles}
                />
                <Spacing space={SH(10)} />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default HomeTabset;
