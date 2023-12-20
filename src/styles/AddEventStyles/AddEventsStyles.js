import { StyleSheet, Platform } from 'react-native';
import { SF, SH, SW, Fonts, widthPercent } from '../../utils';

export default AddEventsStyles = (Colors) => StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: Colors.white_text_color,
    width: '100%',
  },
  bgcolorset: {
    backgroundColor: Colors.white_text_color
  },
  minviewsigninscreen: {
    width: '100%',
    height: '100%',
  },
  DownloadTicket: {
    width: '100%',
    height: '100%',
    paddingHorizontal: SH(20)
  },
  setwidthsttyles: {
    width: '100%'
  },
  Addcoverimagetext: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(20),
    fontWeight: '700'
  },
  profilepicsize: {
    height: SH(200),
    width: '100%',
    position: 'absolute',
    borderRadius: SH(10),
  },
  profilepicsizetwo: {
    height: SH(70),
    width: widthPercent(20),
    position: 'absolute',
    borderRadius: SH(10),
  },
  Eventdetailstextstyles: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(20),
    fontWeight: '700',
    paddingLeft: SH(20),
    color: Colors.theme_backgound,
  },
  Boxviewsamplw: {
    width: '100%',
    borderWidth: SH(1.5),
    borderColor: Colors.light_gray_text_color,
    height: SH(200),
    flexDirection: 'row',
    backgroundColor: Colors.ADD_event_box_color,
    borderRadius: SH(10),
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Boxviewsamplwnobortder: {
    width: '100%',
    borderColor: Colors.light_gray_text_color,
    height: SH(200),
    flexDirection: 'row',
    backgroundColor: Colors.ADD_event_box_color,
    borderRadius: SH(10),
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Boxviewsamplwtqwo: {
    width: '100%',
    height: SH(200),
    flexDirection: 'row',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallboxview: {
    width: widthPercent(19),
    borderWidth: SH(1.5),
    borderColor: Colors.light_gray_text_color,
    height: SH(67),
    backgroundColor: Colors.ADD_event_box_color,
    flexDirection: 'row',
    borderRadius: SH(10),
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallboxviewnewdoiffrent: {
    width: widthPercent(20),
    height: SH(70),
    flexDirection: 'row',
    borderRadius: SH(10),
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iCOPNCENTER: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallboxviewminview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  Eventnamedata: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    fontWeight: '600',
    color: Colors.black_text_color,
  },
  AllLeftPadding: {
    paddingHorizontal: SH(20),
    width: '100%'
  },
  Inputstylewidth: {
    borderWidth: SH(1),
    borderColor: Colors.light_gray_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 0,
  },
  LeadsDropdownbox: {
    width: '100%',
    borderWidth: SH(1),
    borderColor: Colors.light_gray_text_color,
  },
  LeadDropdown: {
    borderWidth: 1,
    width: '100%',
    borderColor: Colors.light_gray_text_color,
    paddingHorizontal: SH(10)
  },
  selectedTextStyleLead: {
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
  },
  Datebox: {
    borderWidth: SH(1),
    height: SH(47),
    borderColor: Colors.light_gray_text_color,
    borderRadius: SH(7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: SH(10),
  },
  datetextstyles: {
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_backgound,
  },
  qrcodescanner: {
    width: '100%',
    borderWidth: SH(1),
    height: SH(260),
    borderRadius: SH(7),
    borderStyle: 'dashed',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagestyleset: {
    height: SH(200),
    width: SW(200)
  },
  qrcosetitlestyles: {
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '700',
    fontSize: SF(20),
    color: Colors.black_text_color,
  },
  nametextstyles: {
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '600',
    fontSize: SF(17),
    color: Colors.gray_text_color,
  },
  nametextstylestwo: {
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '700',
    fontSize: SF(15),
    color: Colors.black_text_color,
  },
  Flexviewnametitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'dashed',
    paddingVertical: SH(17)
  },
  Buttonviewset: {
    borderStyle: 'dashed',
    paddingVertical: SH(17),
    paddingHorizontal: SH(17),
  },
  Bottombutton: {
    position: 'absolute',
    bottom: SH(10),
    paddingHorizontal: SH(10),
    width: '100%'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Addcoverphototextstyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
  }
});
