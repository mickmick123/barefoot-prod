import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors, heightPercent, SF, SH, SW } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { useSelector } from "react-redux";
import IconF from 'react-native-vector-icons/Entypo';

function DropdownComponent({
    width,
    data,
    labelField,
    valueField,
    placeholder,
    searchPlaceholder,
    onChange,
    maxHeight,
    value,
    labelStyle,
    placeholderStyle,
    selectedTextStyle,
    dropdownStyle
}) {
    const { colors } = useTheme();
    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: { width: width },
                dropdownStyle: {
                    borderWidth: SH(1),
                    borderColor: colors.input_border,
                    borderRadius: SH(8),
                    fontSize: SF(14),
                    lineHeight: SF(17),
                    color: colors.black,
                    fontWeight: '400',
                    padding: SH(5),
                    height: SH(47),
                    ...dropdownStyle
                },
                icon: {
                    marginRight: 5,
                },
                label: {
                    position: 'absolute',
                    backgroundColor: 'white',
                    paddingHorizontal: 8,
                    fontSize: SF(20),
                    color: Colors.gray,
                    ...labelStyle
                },
                placeholderStyle: {
                    fontSize: SF(18),
                    lineHeight: SF(21),
                    color: Colors.gray,
                    ...placeholderStyle
                },
                selectedTextStyle: {
                    fontSize: SF(18),
                    // lineHeight: SF(21),
                    ...selectedTextStyle
                },
                iconStyle: {
                    width: SW(20),
                    height: SH(20),
                },
            }),
        [dropdownStyle, labelStyle, placeholder, selectedTextStyle]
    )

    const { colorrdata } = useSelector(state => state.commonReducer) || {};

    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdownStyle}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={[styles.selectedTextStyle, {color: colorrdata}]}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
               
                searchPlaceholder={searchPlaceholder}
                maxHeight={maxHeight}
                renderRightIcon={() => (
                    <IconF
                      style={styles.icon}
                      color="black"
                      name="chevron-down"
                      size={20}
                    />
                  )}
                labelField={labelField}
                valueField={valueField}
                placeholder={placeholder}
                value={value}
                onChange={onChange} 
                itemTextStyle={{color: '#000'}}
                />
        </View>
    );
};

export default DropdownComponent;
