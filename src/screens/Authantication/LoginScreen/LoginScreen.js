import React, {useState, useMemo} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {
  Button,
  Container,
  Input,
  Spacing,
  VectorIcon,
} from '../../../components';
import {RouteName} from '../../../routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Style, Login} from '../../../styles';
import {SH, SF} from '../../../utils';
import {useTheme} from '@react-navigation/native';
import images from '../../../index';
import {useTranslation} from 'react-i18next';
import {user_login} from '../../../apis';
import {user_data} from '../../../redux/action/DataAction';
import {useDispatch} from 'react-redux';

const LoginScreen = props => {
  const {Colors} = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const {navigation} = props;
  const [mobileNumber, setMobileNumber] = useState('');
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const [TextInputPassword, setTextInputPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeText = text => {
    if (text === 'TextInputPassword') {
      setpasswordVisibility(!passwordVisibility);
    }
  };
  const {t} = useTranslation();

  const OnRegisterPress = () => {
    navigation.navigate(RouteName.REGISTER_SCREEN);
  };

  const login_handler = async () => {
    const res = await user_login({
      mobile_number: mobileNumber,
      password: TextInputPassword,
    });
    if (res.success) {
      dispatch(user_data(res.user));
      AsyncStorage.setItem('user', JSON.stringify(res.user));
      navigation.navigate(RouteName.HOME_SCREEN);
    }
  };

  return (
    <Container>
      <View style={Logins.MinViewScreen}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.ScrollViewStyles}>
          <View style={Logins.Container}>
            <View style={Style.MinViewContent}>
              <View style={Logins.ManViewLogins}>
                <Image
                  style={Logins.ImageSet}
                  resizeMode="contain"
                  source={images.App_logo_main}
                />
              </View>
              <View style={Logins.spacer} />
              {/* <Text style={Logins.LoginText}>{t('Login_Text')}</Text> */}
              <Spacing space={SH(20)} />
              <View style={Logins.InputSpaceView}>
                <Input
                  title={t('Mobile_Number')}
                  placeholder={t('Mobile_Number')}
                  onChangeText={value => setMobileNumber(value)}
                  value={mobileNumber}
                  inputType="numeric"
                  maxLength={10}
                  placeholderTextColor={Colors.gray_text_color}
                />
              </View>
              <Spacing space={SH(20)} />
              <View style={Style.FlexRowPassword}>
                <View style={Style.InputViewWidth}>
                  <Input
                    name="password"
                    title={t('Password_Text')}
                    value={TextInputPassword}
                    placeholder={t('Password_Text')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor={Colors.gray_text_color}
                    textContentType="newPassword"
                    secureTextEntry={passwordVisibility}
                    enablesReturnKeyAutomatically
                    onChangeText={text => setTextInputPassword(text)}
                  />
                  <TouchableOpacity
                    style={Style.IconPostionAboluteTwo}
                    onPress={() => {
                      onChangeText('TextInputPassword');
                    }}>
                    <VectorIcon
                      name={passwordVisibility ? 'eye-off' : 'eye'}
                      size={SF(25)}
                      color={Colors.gray_text_color}
                      icon="Ionicons"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Spacing space={SH(10)} />
              <View style={Logins.ViewTextStyle}>
                <Text style={Logins.TextStyle}>
                  {t('Dont_Have_Account')}{' '}
                  <Text
                    style={Logins.registerTextStyle}
                    onPress={() => OnRegisterPress()}>
                    {' '}
                    {t('Register_Text')}
                  </Text>
                </Text>
              </View>
              <Spacing space={SH(40)} />
              <View style={Logins.LoginButton}>
                <Button
                  title={t('Login_Text')}
                  onPress={() =>
                    // navigation.navigate(RouteName.OTP_VERYFY_SCREEN)
                    login_handler()
                  }
                />
              </View>
              <Spacing space={SH(10)} />
              <TouchableOpacity
                onPress={() => navigation.navigate(RouteName.FORGET_PASSWORD)}>
                <Text style={Logins.ForgetPasswordStyles}>
                  {t('Forgot_Password')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
export default LoginScreen;
