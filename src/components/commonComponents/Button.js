import React, { useMemo } from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Fonts, SF, SH, SW } from '../../utils';
import { useTheme } from '@react-navigation/native';
import images from '../../index';
import { Lottie } from '../../components';
import Icon from "react-native-vector-icons/AntDesign";

function Button(props) {
  const { title, onPress, buttonStyle, disable, buttonTextStyle, plusicon, messageicon, imagesource, spacedImages, nextArraow } = props;
  const { colors } = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        buttonStyle: {
          backgroundColor: Colors.theme_backgound,     
          alignItems: 'center',
          borderRadius: 200,
          justifyContent: 'center',
          width: '100%',
          height: SH(45),
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
          },
          shadowOpacity: 0.58,
          shadowRadius: Platform.OS === 'ios' ? 2 : 25,
          elevation: Platform.OS === 'ios' ? 1 : 3,
        },
        buttonTextStyle: {
          color: "#FFF",
          fontFamily: Fonts.Poppins_Medium,
          fontSize: SF(19),
          fontWeight: '600',
          lineHeight: SH(24)
        },
        buttonViewStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: spacedImages ? 'space-around' : 'center',
          width: '100%'
        },
        leftImageStyle: {
          marginVertical: SW(5)
        },
        nextArraowStyle: {
          width: SW(60),
        },
        iconstyles: {
          paddingRight: SH(10)
        }
      }),
    [disable, spacedImages, colors],
  );
  return (
    <TouchableOpacity
      disabled={disable}
      style={[styles.buttonStyle, { ...buttonStyle }]}
      onPress={() => onPress()}>
      <View style={styles.buttonViewStyle}>
        {imagesource &&
          <Image source={imagesource} style={styles.leftImageStyle} resizeMode='cover' />
        }
        {plusicon &&
          <Icon name={plusicon} size={20} style={styles.iconstyles} color={Colors.white_text_color} />
        }
        {messageicon &&
          <Icon name={messageicon} size={20} style={styles.iconstyles} color={Colors.theme_backgound} />
        }

        <Text style={[styles.buttonTextStyle, { ...buttonTextStyle }]}>{title}</Text>
        <View />
        {nextArraow &&
          <Lottie
            Lottiewidthstyle={styles.nextArraowStyle}
            source={images.Right_Aerrow}
          />
        }
      </View>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  title: '',
  onPress: () => { },
  buttonStyle: {},
  disable: false,
  imagesource: null,
  buttonTextStyle: {},
  spacedImages: false,
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  buttonStyle: PropTypes.shape({}),
  disable: PropTypes.bool,
  imagesource: PropTypes.any,
  buttonTextStyle: PropTypes.shape({}),
  spacedImages: PropTypes.bool
};

export default Button;
