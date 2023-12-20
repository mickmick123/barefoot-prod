import React, { useMemo } from 'react';
import { Text, TouchableOpacity } from "react-native";
import { HomeStyles } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const TrendingDataView = (props) => {
  const { Colors } = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  const { onPress, item, slectdate, } = props;
  const { t } = useTranslation();

  return (
    <TouchableOpacity onPress={() => onPress()} style={slectdate === item.text ? HomeStyle.Eventlistview : HomeStyle.Eventlistviewtwo}>
      <Text style={slectdate === item.text ? HomeStyle.Colortextstyles : HomeStyle.Colortextstylestwo}>{t(item.text)}</Text>
    </TouchableOpacity>
  );
};
export default TrendingDataView;
