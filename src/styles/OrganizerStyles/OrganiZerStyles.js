
import { StyleSheet, Platform } from 'react-native';
import { SF, SH, SW, Fonts, Colors, } from '../../utils';

export default OrganiZerStyles = (Colors) => StyleSheet.create({
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
    paddingHorizontal: SH(20)
  },
  Setfileimages: {
    height: SH(110),
    width: SW(100),
    borderRadius: SH(200),
  },
  Centerimage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Usertitlestyles: {
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(19),
    color: Colors.theme_backgound,
  },
  Followingtext: {
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    fontWeight: '700',
    color: Colors.black_text_color,
  },
  Follwerstexrtstyle: {
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    color: Colors.theme_backgound,
  },
  Setrflexrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Setwidthbutton: {
    width: '48%',
    height: SH(37),
  },
  buttontextevetsview: {
    width: '32%',
    backgroundColor: 'transparent',
    borderWidth: SH(1),
    height: SH(37),
    borderColor: Colors.theme_backgound,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  Messagebuttonstyles: {
    width: '48%',
    height: SH(37),
    backgroundColor: 'transparent',
    borderWidth: SH(1),
    borderColor: Colors.theme_backgound,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  Messagetextstyles: {
    color: Colors.theme_backgound,
    fontSize: SF(17),
  },
  Abouttextstyles: {
    fontSize: SF(17),
  },
  Setwidthbuttonfour: {
    width: '30%',
    height: SH(37),
  },
  Setwidthbuttontwo: {
    width: '48%',
    backgroundColor: 'transparent',
    borderWidth: SH(1),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  Buttonflexview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Abouttextstyle: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(22),
    fontWeight: '700',
    color: Colors.theme_backgound,
  },
  paregraphtextstyles: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    color: Colors.black_text_color,
    opacity: 0.7
  }
});
