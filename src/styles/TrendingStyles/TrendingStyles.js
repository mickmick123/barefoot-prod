
import { StyleSheet, Platform } from 'react-native';
import { SH, SW, Fonts,SF } from '../../utils';

export default TrendingStyles = (Colors) => StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  bgcolorset: {
    backgroundColor: Colors.white_text_color
  },
  minviewsigninscreen: {
    width: '100%',
    height: '100%',
    paddingHorizontal: SH(10)
  },
  Setterendingminview: {
    width: '100%',
    padding: SH(7),
    marginBottom: SH(10),
    flexDirection: 'row',
    borderWidth: SH(1),
    backgroundColor: Colors.white_text_color,
    borderColor: Colors.light_gray_text_color,
    borderRadius: SH(10),
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  Eventlistview: {
    width: '100%',
    padding: SH(7),
    paddingBottom: SH(0),
    marginBottom: SH(10),
    flexDirection: 'row',
    borderWidth: SH(1),
    backgroundColor: Colors.white_text_color,
    borderColor: Colors.light_gray_text_color,
    borderRadius: SH(10),
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  Setimagestyles: {
    width: SW(95),
    height: SH(95),
    borderRadius: SH(10),
  },
  Widthstyles: {
    width: '33%',
  },
  Widthstylestwo: {
    width: '67%',
  },
  Textstylesbastu: {
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_backgound,
  },
  Flexrowmusiz: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Minflexviewstyles: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Musicborderview: {
    borderWidth: SH(1),
    width: SW(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginRight: SH(20)
  },
  Flexrowbox: {
    flexDirection: 'row',
  }
});
