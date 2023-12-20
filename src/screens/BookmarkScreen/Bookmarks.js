import React, { useMemo } from 'react';
import { View, ScrollView, KeyboardAvoidingView, FlatList, StatusBar } from "react-native";
import { HomeStyles, Style } from '../../styles';
import { Spacing, TrendingBookmark } from '../../components';
import { SH, Trendingboxdata } from '../../utils';
import { EventsAll } from '../../screens';
import RouteName from '../../routes/RouteName';
import { useTheme } from '@react-navigation/native';

const Bookmark = (props) => {
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
    const { navigation } = props;

    return (
        <View style={[HomeStyle.minstyleviewphotograpgy, HomeStyle.bgcolorset]}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white_text_color} />
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={Style.ScrollViewStyles}>
                <KeyboardAvoidingView enabled>
                    <View style={HomeStyle.minflexview}>
                        <View style={HomeStyle.minviewsigninscreen}>
                            <Spacing space={SH(10)} />
                            <EventsAll />
                            <View style={HomeStyle.paddinghorizontal}>
                                <FlatList
                                    data={Trendingboxdata}
                                    numColumns={1}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item }) => (<TrendingBookmark onPress={() => navigation.navigate(RouteName.BOOKMARK_TAB)}
                                        item={item}
                                    />)}
                                    keyExtractor={item => item.id}
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
export default Bookmark;
