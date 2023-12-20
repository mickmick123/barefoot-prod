import React, { useMemo } from "react";
import { Text, View, ScrollView, StatusBar, KeyboardAvoidingView, FlatList } from "react-native";
import { TrendingStyles, HomeStyles, Style } from '../../styles';
import { Spacing, TrendingEvent, SearchScreen } from '../../components';
import { SH, TrendingScreendata, Colors } from '../../utils';
import { EventsAll } from '../../screens';
import {RouteName} from '../../routes';
import { useDispatch } from "react-redux";
import { get_data_action } from '../../redux/action/DataAction';
import { useTranslation } from "react-i18next";

const SearchScreens = (props) => {
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  const TrendingStyle = useMemo(() => TrendingStyles(Colors), [Colors]);
  const { navigation } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const Eventdata = (Eventdata) => {
    dispatch(get_data_action(Eventdata))
    navigation.navigate(RouteName.EVENTS_DETAILS_SCREEN)
  }
  return (
    <View style={[TrendingStyle.minstyleviewphotograpgy, TrendingStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white_text_color} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <KeyboardAvoidingView enabled>
          <View style={TrendingStyle.minflexview}>
            <View style={TrendingStyle.minviewsigninscreen}>
              <View>
                <EventsAll />
                <View style={HomeStyle.Paddinghorizxontal}>
                  <Spacing space={SH(15)} />
                  <SearchScreen />
                </View>
                <Spacing space={SH(30)} />
                <View style={HomeStyle.Flexsearchresults}>
                  <Text style={HomeStyle.Searchtext}>{t("Search_Results")}</Text>
                  <Text style={HomeStyle.Searchtexttwo}>{t("Found_Text")}</Text>
                </View>
                <Spacing space={SH(20)} />
                <FlatList
                  data={TrendingScreendata}
                  numColumns={1}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (<TrendingEvent onPress={() => Eventdata(item)}
                    item={item}
                    eventAround={() => navigation.navigate(RouteName.EVENT_AROUND_MAP)}
                  />)}
                  keyExtractor={item => item.id}
                  contentContainerStyle={TrendingStyle.Flatliststyles}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default SearchScreens;
