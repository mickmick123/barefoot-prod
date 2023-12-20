import React, { useState, useMemo } from 'react';
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { SF, SH,Colors } from '../../utils';
import { Input, VectorIcon } from '../../components';
import { useTranslation } from "react-i18next";

const SearchScreenset = (props) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const { t } = useTranslation();
  
    const styles = useMemo(
        () =>
            StyleSheet.create({
                WidthSet: {
                    width: '100%',
                },
                SearchInputBorder: {
                    borderWidth: SH(0),
                },
                BorderWidth: {
                    borderWidth: SH(1),
                    width: '100%',
                    borderColor: Colors.theme_backgound,
                    height: SH(55),
                    borderRadius: SH(10),
                },
            }),
        [],
    );
    return (
        <View style={styles.BorderWidth}>
            <TouchableOpacity style={styles.WidthSet}>
                <Input
                    placeholder={t("Search")}
                    onChangeText={(value) => setMobileNumber(value)}
                    value={mobileNumber}
                    maxLength={10}
                    leftIcon={<VectorIcon name="search1" icon="AntDesign" color={Colors.theme_background} size={SF(25)} />}
                    placeholderTextColor={Colors.gray_text_color}
                    inputStyle={styles.SearchInputBorder}
                />
            </TouchableOpacity>
        </View>
    );
};
export default SearchScreenset;
