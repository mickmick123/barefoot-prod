import React, { useMemo } from "react";
import { View, ScrollView, KeyboardAvoidingView, FlatList } from "react-native";
import { HelpScreenStyles, Style } from '../../styles';
import { Spacing,FAQData } from '../../components';
import { Faqdataset, SH } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { SearchScreen } from '../../screens';

const FAQScreen = () => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HelpScreenStyle = useMemo(() => HelpScreenStyles(Colors), [Colors]);
   
    return (
        <View style={HelpScreenStyle.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={Style.ScrollViewStyles}>
                <KeyboardAvoidingView enabled>
                    <View style={HelpScreenStyle.MinFlexView}>
                        <View style={HelpScreenStyle.MinViewAllContent}>
                            <Spacing space={SH(20)} />
                            <View style={HelpScreenStyle.PaddingsHorozonrtal}>
                            <View style={HelpScreenStyle.BorderWidth}>
                                <SearchScreen />
                            </View>
                            </View>
                            <Spacing space={SH(20)} />
                            <FlatList
                                data={Faqdataset}
                                renderItem={({ item }) => (<FAQData
                                    item={item}
                                />)}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                style={HelpScreenStyle.SetFlex}
                            />
                        </View>
                        <Spacing space={SH(50)} />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};
export default FAQScreen;
