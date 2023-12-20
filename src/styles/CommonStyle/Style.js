import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

export default StyleSheet.create({
  ScrollViewStyles: {
    width: '100%',
    height: 'auto',
  },
  Backgroundhight: {
    height: '100%',
    backgroundColor: Colors.white_text_color,
    width: '100%'
  },
  uri: {
    width: SW(200),
    height: SH(100)
  },
  LeftIconLeftStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PaddingVertical: {
    PaddingVertical: SH(10)
  },
  headerStyle: {
    backgroundColor: Colors.white_text_color,
  },
  headerTitleStyle: {
    color: Colors.theme_backgound,
    fontSize: SF(20),
    fontWeight: '700',
    fontFamily: Fonts.Poppins_Bold
  },
  MinViewContent: {
    width: '95%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScrollViewStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    height: 'auto',
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  FlexRowPassword: {
    width: '100%',
    borderRadius: SH(7),
    flexDirection: 'row',
    backgroundColor: Colors.white_text_color,
    height: SH(50),
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: Colors.black_text_color,
  },
  IconPostionAbolute: {
    position: 'absolute',
    right: SH(30),
    height: SH(50),
    flexDirection: 'row',
    alignItems: 'center'
  },
  IconPostionAboluteTwo: {
    position: 'absolute',
    right: SH(30),
    height: SH(50),
    top: SH(37),
    flexDirection: 'row',
    alignItems: 'center'
  },
  CountryCodeIconCenter: {
    position: 'absolute',
    left: SH(30),
    height: SH(50),
    zIndex: 89,
    top: SH(37),
    flexDirection: 'row',
    alignItems: 'center'
  },
  PaddingLeftCountryInput: {
    paddingLeft: SH(90)
  },
  SearchInputBorder: {
    borderWidth: SH(0),
  },
  CenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalView: {
    backgroundColor: Colors.white_text_color,
    borderRadius: SH(7),
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: SW(0),
      height: SH(2)
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: SH(20),
    width: '95%',
  },
  setbgcolorgrsay: {
    backgroundColor: Colors.gray_text_color,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: Platform.OS === 'ios' ? 2 : 0.9,
  },
  CenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkiconright: {
    borderWidth: SH(3),
    height: SH(80),
    width: SW(75),
    borderRadius: SH(100),
    flexDirection: 'row',
    borderColor: Colors.theme_backgound,
    alignContent: 'center',
    justifyContent: 'center'
  },
  setroundcenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  setbackgroundicon: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: SH(15),
  },
  registertextset: {
    paddingTop: SH(25),
    paddingBottom: SH(0),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  settext: {
    color: Colors.black_text_color,
    fontSize: SF(20),
    paddingHorizontal: SH(20),
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
  },
  setokbutton: {
    width: '47%'
  },
  buttonminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SH(40),
    paddingTop: SH(20),
  },
  MinViewStyleSplash: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: '100%'
  },
  SearchHomeTab: {
    width: '100%',
    backgroundColor: 'transperent',
    shadowColor: "transperent",
    shadowOffset: {
      width: SW(0),
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
    color: Colors.theme_backgound,
    fontFamily: Fonts.Poppins_Regular,
  },
  MinViewScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  MinViewScreenHome: {
    height: '100%',
    backgroundColor: Colors.white_text_color,
  },
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heightset: {
    height: 'auto',
  },
  SplashMinView: {
    height: '100%',
    backgroundColor: Colors.white_text_color,
  },
  ScrollViewTestHeight: {
    width: '100%',
    height: 'auto'
  },
  buttonotp: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  CallIconView: {
    width: SW(40),
    height: SH(43),
    flexDirection: 'row',
    borderRadius: SH(200),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white_text_color,
    marginRight: SH(20)
  },
  RemoveBgColor: {
    backgroundColor: Colors.white_text_color
  },
  RemoveBgColorTwos: {
    backgroundColor: Colors.theme_backgound
  },
  InputViewWidth: {
    width: '100%'
  },
  PostionAbsoluteIcon: {
    position: 'absolute',
    top: SH(20),
    left: SH(20),
    zIndex: 9
  },
  BgColorWhite: {
    backgroundColor: Colors.theme_background,
    height: SH(44),
    width: SW(40),
    borderRadius: SH(200),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Splasdhimagestyles: {
    width: SW(200),
    height: SW(200)
  },
  setminviewstylesplasg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  setbgcolorgrsay: {
    backgroundColor: Colors.gray_text_color,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: Platform.OS === 'ios' ? 2 : 0.9,
  },
  CenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalView: {
    backgroundColor: Colors.white_text_color,
    borderRadius: SH(7),
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: SW(0),
      height: SH(2)
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: SH(20),
    width: '95%',
  },
  setroundcenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  checkiconright: {
    borderWidth: SH(3),
    height: SH(80),
    width: SW(75),
    borderRadius: SH(100),
    flexDirection: 'row',
    borderColor: Colors.theme_backgound,
    alignContent: 'center',
    justifyContent: 'center'
  },
  NotificationFlex: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Rightspace: {
    paddingLeft: SH(5),
    paddingRight: SH(15)
  }
});