import React, { useMemo } from 'react';
import { View, TouchableOpacity } from "react-native";
import { VectorIcon,ColorPicker } from '../../components';
import { SF, Colors } from '../../utils';
import {Style} from '../../styles';

const NotificatioandSearchIcon = (props) => {
  const { onPress, notification } = props
  return (
    <View style={Style.NotificationFlex}>
      <TouchableOpacity onPress={() => onPress()} style={Style.Rightspace}>
        <VectorIcon icon="Ionicons" name="search" size={SF(25)} color={Colors.theme_backgound} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => notification()} style={Style.Rightspace}>
        <VectorIcon icon="Ionicons" name="notifications" size={SF(25)} color={Colors.theme_backgound} />
      </TouchableOpacity>
      <ColorPicker />
    </View>
  );
};
export default NotificatioandSearchIcon;
