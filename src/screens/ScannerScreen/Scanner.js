import React, { useRef } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { ScannerStyles, Style } from '../../styles';
import { RouteName } from '../../routes';
import { QRScanner } from '../../components';
import { Colors } from '../../utils';

const Scanner = (props) => {
    const { navigation } = props;
    const scanner = useRef(null);
    StatusBar.setBackgroundColor(Colors.theme_backgound);
    const onSuccess = () => {
        navigation.navigate(RouteName.PAYMENT_SCREEN)
    };
    return (
        <View style={ScannerStyles.scanvicolor}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerScannerStyles={Style.ScrollViewStyles}>
                <View style={ScannerStyles.Scanviewcontent}>
                    <View style={ScannerStyles.Scanviewcontentsecond}>
                        <QRScanner
                            onRead={onSuccess}
                            scanner={scanner}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default Scanner;
