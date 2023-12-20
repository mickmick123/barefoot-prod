
import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, widthPercent } from '../../utils';

export default EventsStyles = (Colors) => StyleSheet.create({
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
    paddingBottom: SH(30),
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  Imagestyleset: {
    height: SH(400),
    width: '100%'
  },
  Setbgcolorview: {
    backgroundColor: Colors.white_text_color,
    marginTop: SH(-30),
    padding: SH(20),
    borderTopLeftRadius: SH(30),
    borderTopRightRadius: SH(30),
    height: '100%'
  },
  Setmusictextstyle: {
    paddingHorizontal: SH(15),
    borderWidth: SH(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SH(30),
    borderRadius: SH(100),
    borderColor: Colors.theme_backgound,
  },
  Musictetx: {
    fontSize: SF(15),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_backgound,
  },
  Flexview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  watchingflexviewstyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Imageviewstyles: {
    flexDirection: 'row',
  },
  Imagestylestwo: {
    width: SW(20),
    height: SH(20),
    borderRadius: SH(300),
  },
  Peopletextstyle: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(13),
    color: Colors.black_text_color,
  },
  Imagestylesthtree: {
    width: SW(20),
    height: SH(20),
    borderRadius: SH(300),
    position: 'relative',
    right: SH(12),
  },
  Imagestylesthfour: {
    width: SW(20),
    height: SH(20),
    borderRadius: SH(300),
    position: 'relative',
    right: SH(20),
  },
  Titlestyles: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(25),
    color: Colors.theme_backgound,
    fontWeight: '700'
  },
  Calenderstyle: {
    height: SH(60),
    width: SW(55),
    borderRadius: SH(100),
    flexDirection: 'row',
    marginRight: SH(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.theme_backgound_second,
  },
  Flexrowestyles: {
    flexDirection: 'row',
    borderBottomWidth: SH(1),
    paddingBottom: SH(14),
    borderStyle: 'dashed',
    borderColor: Colors.theme_backgound,
  },
  Settitletext: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(20),
    color: Colors.theme_backgound,
    fontWeight: '700'
  },
  Settitletexttwo: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
    color: Colors.black_text_color,
    fontWeight: '600',
    opacity: 0.7,
  },
  EventsStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Textstyle: {
    position: 'relative',
    left: SH(150),
  },
  Bottomviewsetstyles: {
    position: 'absolute',
    backgroundColor: Colors.white_text_color,
    paddingHorizontal: SH(10),
    paddingVertical: SH(15),
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Setbuttonwidth: {
    width: '60%'
  },
  Flexrowseticon: {
    flexDirection: 'row',
    width: '40%',
  },
  Backaerrowwhite: {
    position: 'absolute',
    width: SW(60),
    height: SH(64),
    backgroundColor: Colors.white_text_color,
    top: SH(10),
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    left: SH(10),
  },
  Aerrowwidthaset: {
    width: SW(80)
  },
  EventsStyles: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Addtomybutton: {
    backgroundColor: Colors.theme_backgound,
    borderRadius: SH(100),
    width: widthPercent(45),
    backgroundColor: Colors.white_text_color,
    borderWidth: 1,
    borderColor: Colors.theme_backgound,
  },
  Addtextstyles: {
    fontSize: SF(15),
    color: Colors.theme_backgound,
  }
});
