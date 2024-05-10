/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, StatusBar, Image} from 'react-native';
import images from '../../index';
import {Style} from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {color_picker_set_action} from '../../redux/action/CommonAction';
import {
  list_events,
  list_markers,
  user_data,
} from '../../redux/action/DataAction';
import {useSelector} from 'react-redux';
import {RouteName} from '../../routes';
import {Lottie} from '../../components';
import {getEventMarkers, getEvents, user_validation} from '../../apis';
import Geolocation from '@react-native-community/geolocation';
const SplashScreen = ({navigation}) => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const {userData} = useSelector(state => state.DataReducer) || {
    userData,
  };
  StatusBar.setBackgroundColor(colorrdata);
  const dispatch = useDispatch();

  const loadEventMarkers = async () => {
    Geolocation.getCurrentPosition(async pos => {
      const crd = pos.coords;
      console.log('position', crd.latitude);
      if (crd) {
        const markers = await getEventMarkers(crd.longitude, crd.latitude);
        dispatch(list_markers(markers.data));
      }
    });
  };

  const getEventData = async () => {
    const res = await getEvents();
    dispatch(list_events(res.data));
  };

  useEffect(() => {
    getEventData();
    loadEventMarkers();
  });

  useEffect(() => {
    AsyncStorage.getItem('visited').then(async value => {
      if (value && value === 'true') {
        AsyncStorage.getItem('user').then(async user => {
          const current_user = JSON.parse(user);
          if (current_user) {
            const res = await user_validation({
              session_token: current_user.sessionId,
            });
            if (res.success) {
              dispatch(user_data(res.user));
              AsyncStorage.setItem('user', JSON.stringify(res.user));
              navigation.replace(RouteName.HOME_SCREEN);
            } else {
              navigation.replace(RouteName.LOGIN_SCREEN);
            }
          } else {
            navigation.replace(RouteName.LOGIN_SCREEN);
          }
        });
      } else {
        AsyncStorage.setItem('visited', 'true');
        navigation.replace(RouteName.SWIPER_SCREEN);
      }
    });
    {
      colorrdata !== ''
        ? dispatch(color_picker_set_action('#ff3415'))
        : dispatch(color_picker_set_action('#ff3415'));
    }
  }, []);
  return (
    <View style={Style.Eventminvierw}>
      <View style={Style.MinViewStyleSplash}>
        <Lottie source={images.Splash_Animation} />
      </View>
    </View>
  );
};
export default SplashScreen;
