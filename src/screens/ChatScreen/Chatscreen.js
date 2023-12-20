import React, { useMemo, useState } from 'react';
import { View, TouchableOpacity, FlatList, ScrollView, KeyboardAvoidingView } from 'react-native';
import { ChatStyles, Style } from '../../styles';
import { SH, SF, ChatDataText } from "../../utils";
import { Spacing, VectorIcon, ChatDataView, Input } from '../../components';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useTheme } from '@react-navigation/native';

const Chatscreen = (props) => {
    const { detailsStore } = useSelector(state => state.DataReducer) || { detailsStore };
    const { Colors } = useTheme();
    const [Reply, setReply] = useState('');
    const { navigation } = props;
    const ChatStyle = useMemo(() => ChatStyles(Colors), [Colors]);
    const { t } = useTranslation();
    return (
        <View style={ChatStyle.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={Style.ScrollViewTestHeight}>
                <KeyboardAvoidingView enabled>
                    <View style={ChatStyle.MinFlexView}>
                        <View style={ChatStyle.MinContentView}>
                            <FlatList
                                data={ChatDataText}
                                numColumns={1}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (<ChatDataView
                                    item={item}
                                />)}
                                keyExtractor={item => item.id}
                            />
                            <Spacing space={SH(17)} />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <View style={ChatStyle.PostionAbsoluTeView}>
                <View style={ChatStyle.TextMessageView}>
                    <View style={ChatStyle.FlexrowSendMesasage}>
                        <View style={ChatStyle.InputWidtgh}>
                            <Input
                                onChangeText={(value) => setReply(value)}
                                value={Reply}
                                inputStyle={ChatStyle.TextInputBorderBottom}
                                placeholder={t("Chat_9")}
                                placeholderTextColor={Colors.gray_text_color}
                            />
                        </View>
                        <View style={ChatStyle.FlexrowImagiNations}>
                            <TouchableOpacity>
                                <VectorIcon icon="FontAwesome5" name="grin" color={Colors.theme_backgound} size={SF(25)} />
                            </TouchableOpacity>
                            <TouchableOpacity style={ChatStyle.MarginRightlikeicon}>
                                <VectorIcon icon="Ionicons" name="send" color={Colors.theme_backgound} size={SF(30)} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default Chatscreen;
