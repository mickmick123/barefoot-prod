import { StyleSheet, Platform } from 'react-native';
import { SF, SH, SW, Fonts, } from '../../utils';

export default HomeStyles = (Colors) => StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white_text_color,
  },
  minviewsigninscreen: {
    width: '100%',
    height: '100%',
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  flexhomeimgandtext: {
    flexDirection: 'row',
    height: SH(50),
    alignItems: 'center',
  },
  Setfilechnage: {
    paddingHorizontal: SH(12),
    width: '95%',
    height: SH(47),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: Colors.gray_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: SH(200),
    backgroundColor: Colors.white_text_color,
    shadowColor:Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  changetheamebgcolor: {
    height: SH(67),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SH(200),
    backgroundColor: Colors.theme_backgound_second,
  },
  Iconstyles: {
    width: '10%',
  },
  Inputstyles: {
    backgroundColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  Inputwidthset: {
    width: '90%'
  },
  minviewfunction: {
    borderRadius: SH(5),
    width: '100%',
  },
  flexrowimagandtext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },

  imagecenyer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  setdotactive: {
    width: SW(17),
    height: SH(19),
    borderRadius: 100,
  },
  paginationDot: {
    width: SW(12),
    height: SH(13),
    borderRadius: SH(100),
  },
  SliderImageStyles: {
    width: '100%',
    height: SH(200),
    borderRadius: SH(10),
  },
  Bookbuttonwidtgh: {
    backgroundColor: Colors.theme_backgound,
    width: '80%'
  },
  Paddinghorizxontal: {
    paddingHorizontal: SH(10)
  },
  Flexrowteotitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  Commonmminview: {
    paddingHorizontal: SH(10),
    marginTop: SH(-25),
  },
  Trendingtext: {
    fontSize: SF(22),
    color: Colors.black_text_color,
    fontWeight: '700',
    opacity: 0.7,
  },
  Seealltextstyle: {
    fontSize: SF(20),
    fontWeight: '700',
    color: Colors.theme_backgound,
  },
  Trendingdataminview: {
    width: SW(70),
    marginRight: SH(8),
    borderRadius: 100,
    height: SH(32),
    flexDirection: 'row',
    paddingTop: SH(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.theme_backgound,
  },
  Trendingdataminviewtwo: {
    width: SW(70),
    borderWidth: SH(1),
    paddingTop: SH(2),
    backgroundColor: Colors.white_text_color,
    borderColor: Colors.theme_backgound,
    marginRight: SH(8),
    borderRadius: SH(100),
    height: SH(32),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Flatliststyles: {
    paddingLeft: SH(10)
  },
  Colortextstyles: {
    fontSize: SF(14),
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
  },
  Colortextstylestwo: {
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_backgound,
  },
  Setterendingview: {
    backgroundColor: Colors.white_text_color,
    width: SW(250),
    borderRadius: 20,
    shadowColor: Colors.black_text_color,
    marginRight: SH(20),
    marginBottom: SH(10),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  Setterendingviewbookmark: {
    width: '100%',
    borderRadius: 10,
    shadowColor: Colors.black_text_color,
    marginBottom: SH(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 1,
  },
  Bookmarkviewbox: {
    width: '100%',
    borderRadius: SH(10),
    borderWidth: SH(1),
    borderColor: Colors.light_gray_text_color,
    shadowColor: Colors.black_text_color,
    marginBottom: SH(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 0,
  },
  Imagestyles: {
    width: SW(250),
    height: SH(150),
    borderTopLeftRadius: SH(20),
    borderTopRightRadius: SH(20),
  },
  Imagestylestwobookmark: {
    width: '100%',
    height: SH(150),
    borderTopLeftRadius: SH(20),
    borderTopRightRadius: SH(20),
  },
  Imagestylesbookmarks: {
    width: '100%',
    height: SH(150),
    borderTopLeftRadius: SH(10),
    borderTopRightRadius: SH(10),
  },
  Textviewstyles: {
    padding: SH(15),
  },
  Bookmarkview: {
    padding: SH(15),
    backgroundColor: Colors.white_text_color,
  },
  Titletextstyles: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(19),
    color: Colors.theme_backgound,
  },
  Musicborderview: {
    height: SH(25),
    borderWidth: SH(1),
    paddingHorizontal: SH(10),
    paddingTop: SH(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SH(100),
    marginRight: SH(10),
    color: Colors.theme_backgound,
    borderColor: Colors.theme_backgound,
  },
  Imageviewstyles: {
    flexDirection: 'row',
    width: SW(50)
  },
  Imagestylestwo: {
    width: SW(20),
    height: SH(20),
    borderRadius: SH(300),
  },
  Imagestylesthtree: {
    width: SW(20),
    height: SH(20),
    borderRadius: SH(300),
    position: 'relative',
    right: SH(10),
  },
  Imagestylesthfour: {
    width: SW(20),
    height: SH(20),
    borderRadius: SH(300),
    position: 'relative',
    right: SH(17),
  },
  Minflexviewstyles: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Peopletextstyle: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(10),
    color: Colors.black_text_color,
  },
  Flexrowbookmarks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '45%'
  },
  Ratingtextstyles: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(12),
    color: Colors.theme_backgound,
    paddingRight: SH(5),
    paddingTop: SH(2),
  },
  Flexrowstyles: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SW(200),
  },
  Dateview: {
    position: 'absolute',
    right: SH(10),
    top: SH(10),
  },
  BNookmarkview: {
    position: 'absolute',
    left: SH(10),
    top: SH(10),
  },
  Eventviews: {
    position: 'absolute',
    left: SH(10),
    top: SH(10),
  },
  Trendingview: {
    position: 'absolute',
    left: SH(5),
    top: SH(5),
  },
  Setbgcolortext: {
    backgroundColor: Colors.white_text_color,
    paddingVertical: SH(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SH(7),
    paddingHorizontal: SH(10)
  },
  Eventsmallview: {
    backgroundColor: Colors.white_text_color,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SH(4),
    paddingHorizontal: SH(5)
  },
  Musictextstryles: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(12),
    color: Colors.theme_backgound,
  },
  Mapstylesadrresh: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
    marginLeft: SH(10),
    color: Colors.black_text_color,
    opacity: 0.8,
  },
  Flexviewtwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Textstyledate: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
    color: Colors.theme_backgound,
  },
  Eventtextstyles: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(12),
    color: Colors.theme_backgound,
  },
  Searchtextstyles: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(19),
    color: Colors.black_text_color,
    paddingLeft: SH(10),
  },
  watchingflexviewstyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Flexsearchresults: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  Searchtext: {
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
  },
  Searchtexttwo: {
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_backgound,
  },
  paddinghorizontal: {
    paddingHorizontal: SH(20)
  },
  Setbgcolorwhite: {
    backgroundColor: Colors.white_text_color,
    height: '100%'
  },
  Flexrowsettwobutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: SH(1),
    borderStyle: 'dashed',
    paddingVertical: SH(7),
    paddingHorizontal: SH(10),
    borderTopColor: Colors.gray_text_color
  },
  Scannerstylebgcolor: {
    backgroundColor: Colors.theme_backgound_second,
    height: SH(52),
    borderRadius: SH(200),
    width: SW(48),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textstyles: {
    fontSize: SF(13),
  },
  RevieewsbuttonTextstyles: {
    color: Colors.theme_backgound,
    fontSize: SF(19),
  },
  Eventlistview: {
    paddingHorizontal: SH(15),
    marginRight: SH(6),
    borderRadius: SH(100),
    height: SH(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.theme_backgound,
  },
  Eventlistviewtwo: {
    paddingHorizontal: SH(15),
    borderWidth: SH(1),
    borderColor: Colors.theme_backgound,
    backgroundColor: Colors.white_text_color,
    marginRight: SH(10),
    borderRadius: SH(100),
    height: SH(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  postionaddinternation: {
    position: 'absolute',
    bottom: SH(20),
    left: SH(20)
  },
  Colorwhitetext: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(25),
    fontWeight: '700',
  },
  Twodiifrentbtn: {
    width: '48%',
    height: SH(40),
    paddingVertical: SH(0)
  },
  Revieewsbutton: {
    width: '48%',
    height: SH(40),
    borderWidth: SH(1),
    borderColor: Colors.theme_backgound,
    backgroundColor: Colors.white_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 0,
    elevation: Platform.OS === 'ios' ? 1 : 0,
  }
});
