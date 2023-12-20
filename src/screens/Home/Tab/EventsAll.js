import React, { useState, useMemo } from 'react';
import { View, FlatList } from "react-native";
import { HomeStyles } from '../../../styles';
import { Spacing, TrendingCategoryView } from '../../../components';
import { SH, Trendingdata, } from '../../../utils';
import { useTheme } from '@react-navigation/native';

const EventsAll = () => {
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
    const [slectdate, setslectdate] = useState('Anon_Event_1');
    const selectedcolortwo = (item) => {
        setslectdate(item);
    }
    return (
        <View>
            <Spacing space={SH(10)} />
            <FlatList
                data={Trendingdata}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (<TrendingCategoryView onPress={() => selectedcolortwo(item.text)}
                    item={item}
                    slectdate={slectdate}
                />)}
                keyExtractor={item => item.id}
                contentContainerStyle={HomeStyle.Flatliststyles}
            />
            <Spacing space={SH(20)} />
        </View>
    );
};
export default EventsAll;
