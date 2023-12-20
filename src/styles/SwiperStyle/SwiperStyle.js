import { Fonts, SH, SW,SF } from '../../utils';
import { StyleSheet } from 'react-native';

export default SwiperStyle = (Colors) => StyleSheet.create({
  buttonCircle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: Colors.theme_backgound,
    fontSize: SF(25),
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    paddingHorizontal:SH(15),
    position: 'absolute',
    top: SH(100),
    width: '100%',
  },
  textstyle: {
    paddingHorizontal:SH(10),
    color: Colors.theme_backgound,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    fontSize: SF(16),
    position: 'absolute',
    bottom: SH(120),
    width: '100%'
  },
  scrollviewstyle: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white_text_color,
  },
  Animationviewstyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Nexttextstyle: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(19),
    color: Colors.theme_backgound,
  },
  activedotstyle: {
    width: SW(14),
    height: SH(16),
    borderRadius: SH(100),
    backgroundColor: Colors.theme_backgound,
  },
  iconbgcolorview: {
    width: SW(30),
    height: SH(20),
    borderRadius: SH(200),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: SH(10),
    right: SH(10),
  }
});