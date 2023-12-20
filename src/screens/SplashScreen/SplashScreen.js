import React, { useEffect } from 'react';
import { View, StatusBar, Image } from 'react-native';
import images from '../../index';
import { Style } from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { useSelector } from "react-redux";
import { RouteName } from '../../routes';
import { Lottie } from '../../components';

const SplashScreen = ({ navigation }) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    StatusBar.setBackgroundColor(colorrdata);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.getItem('user_id').then((value) =>
                navigation.replace(RouteName.SWIPER_SCREEN)
            );
        }, 2500);
        {
            colorrdata != '' ?
                dispatch(color_picker_set_action(colorrdata))
                :
                dispatch(color_picker_set_action('#646ff9'))
        }
    }, []);
    return (
        <View style={Style.Eventminvierw}>
            <View style={Style.MinViewStyleSplash}>
                <Lottie source={images.Splash_Swiper} />
            </View>
        </View>
    );
};
export default SplashScreen;
