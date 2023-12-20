import React, { useState, useMemo } from 'react';
import { View, ScrollView, StatusBar, KeyboardAvoidingView, FlatList } from "react-native";
import { Style, TrendingStyles } from '../../../styles';
import { Spacing, TrendingDataView, TrendingEvent } from '../../../components';
import { SH, TrendingScreendata, EventListdata } from '../../../utils';
import RouteName from '../../../routes/RouteName';
import { get_data_action } from '../../../redux/action/DataAction';
import { useDispatch } from "react-redux";
import { useTheme } from '@react-navigation/native';

const Event = (props) => {
  const [slectdate, setslectdate] = useState('Past Events');
  const { Colors } = useTheme();

  const TrendingStyle = useMemo(() => TrendingStyles(Colors), [Colors]);
  const { navigation } = props;
  const dispatch = useDispatch();

  const selectedcolortwo = (item) => {
    setslectdate(item);
  }
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
                <Spacing space={SH(10)} />
                <FlatList
                  data={EventListdata}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (<TrendingDataView onPress={() => selectedcolortwo(item.text)}
                    item={item}
                    slectdate={slectdate}
                  />)}
                  keyExtractor={item => item.id}
                />
                <Spacing space={SH(20)} />
                <FlatList
                  data={TrendingScreendata}
                  numColumns={1}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (<TrendingEvent onPress={() => Eventdata(item)}
                    item={item}
                    slectdate={slectdate}
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
export default Event;
