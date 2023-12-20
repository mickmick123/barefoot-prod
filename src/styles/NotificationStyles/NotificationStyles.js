
import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, widthPercent } from '../../utils';

export default NotificationStyles = (Colors) => StyleSheet.create({
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
    paddingBottom: 30,
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  settingtext: {
    color: 'red',
    fontWeight: '600',
    fontSize: SF(15),
    fontFamily: Fonts.Poppins_Medium,
  },
  settingtexttitle: {
    color: Colors.black_text_color,
    fontWeight: '700',
    fontSize: SF(21),
    paddingHorizontal: '5%',
    fontFamily: Fonts.Poppins_Medium,
  },
  flexviewheader: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: SH(90),
  },
  imagesetus: {
    height: SH(100),
    width: SW(100),
    borderRadius: 20,
    marginRight: SH(20),
  },
  flexdiractionrow: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: '5%',
  },
  flexdiractionrowtwo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SH(10),
  },
  textparegraph: {
    fontSize: SF(13),
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    lineHeight: 19,
  },
  twonavemberscreen: {
    fontSize: SF(13),
    color: Colors.theme_backgound,
    fontFamily: Fonts.Poppins_Medium,
  },
  setparegraphwidth: {
    width: '68%'
  },
  setparegraphwidthtwo: {
    width: '68%',
    borderBottomColor: Colors.light_gray_text_color,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Setwidth: {
    paddingHorizontal: SH(10),
  },
  Tickettextstyles: {
    fontSize: SF(19),
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
  },
  Setbuttonwidth: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  setwidth: {
    width: '48%',
  },
  iconstyles: {
    width: SW(60),
    height: SH(65),
    borderRadius: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.theme_backgound_second,
  },
  buttonStyleflex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth:1,
    padding:SH(20),
    borderRadius:10,
    borderColor:Colors.light_gray_text_color,
    borderStyle:'dashed',
  },
  Setsquarcebox: {
    width: SW(60),
    height: SH(65),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.theme_backgound,
  },
  Counttextstyles: {
    color: Colors.black_text_color,
    fontSize: SF(23),
    fontWeight:'700',
    fontFamily: Fonts.Poppins_Medium,
  },
  Setpostionabsolute: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    paddingHorizontal: SH(20)
  },
  Totaldolardtextstyles: {
    textAlign: 'center',
    fontSize: SF(23),
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '700',
    color: Colors.black_text_color
  },
  Dolardte3xtstyles: {
    color:Colors.theme_backgound,
  },
  succefullimgviewsethre: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  succefullyimg: {
    width: 330,
    height: 230,
  },
  accounttexttwo: {
    color: Colors.black_text_color,
    fontSize: SF(23),
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center'
  },
  flexrowsetstarsignup: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: SH(15),
  },
  accounttextsuccessfullytwo: {
    fontSize: SF(17),
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
    paddingBottom: 20,
    color: Colors.gray_text_color
  },
  inputUnderLinereviews: {
    borderWidth: 1,
    width: '100%',
    color: Colors.black_text_color,
    borderRadius: 7,
    fontFamily: Fonts.Poppins_Medium,
    marginBottom: SH(12),
    paddingVertical: SH(20),
    paddingHorizontal: SH(15),
    borderColor: Colors.gray_text_color,
  },
  accountbutton: {
    width: '100%',
  },
  minstyleviewphotograpgytwo: {
    backgroundColor: Colors.white_text_color,
    height: '100%',
    paddingHorizontal: SH(15)
  },
  positionsetstyleinput: {
    position: 'relative',
    top: -20,
  },
  vipbuttonstylestwo: {
    backgroundColor:Colors.theme_backgound,
    height:SH(37),
    fontSize:SF(17),
    width:widthPercent(46),
    borderRadius:200,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  vipbuttonstyles: {
    backgroundColor:Colors.white_text_color,
    borderWidth:1,
    borderColor:Colors.theme_backgound,
    height:SH(37),
    fontSize:SF(17),
    width:widthPercent(46),
    borderRadius:200,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  viptextstylestwo: {
    fontSize:SF(17),
    color:Colors.white_text_color,
    fontFamily:Fonts.Poppins_Medium,
    lineHeight:SH(29)
  },
  viptextstyles: {
    fontSize:SF(17),
    color:Colors.theme_backgound,
    fontFamily:Fonts.Poppins_Medium,
    lineHeight:SH(29)
  }
});
