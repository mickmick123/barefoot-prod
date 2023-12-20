import React, { useMemo } from "react";
import { View, ScrollView, StatusBar, KeyboardAvoidingView, FlatList, } from "react-native";
import { TrendingStyles, Style } from '../../styles';
import { TrendingEvent } from '../../components';
import { TrendingScreendata } from '../../utils';
import { EventsAll } from '../../screens';
import { RouteName } from "../../routes";
import { get_data_action } from '../../redux/action/DataAction';
import { useDispatch } from "react-redux";
import { useTheme } from '@react-navigation/native';

const TrendingScreen = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const TrendingStyle = useMemo(() => TrendingStyles(Colors), [Colors]);

  const dispatch = useDispatch();
  const Eventdata = (Eventdata) => {
    dispatch(get_data_action(Eventdata))
    navigation.navigate(RouteName.EVENTS_DETAILS_SCREEN)
  }

  return (
    <View style={[TrendingStyle.minstyleviewphotograpgy, TrendingStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <KeyboardAvoidingView enabled>
          <View style={TrendingStyle.minflexview}>
            <View style={TrendingStyle.minviewsigninscreen}>
              <View>
                <EventsAll />
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
export default TrendingScreen;
