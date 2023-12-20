import { Fonts, SW, } from '../../utils';
import { StyleSheet } from 'react-native';

export default LocationStyles = (Colors) => StyleSheet.create({

  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white_text_color,
  },

  minviewsigninscreen: {
    width: '100%',
    backgroundColor: Colors.white_text_color,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 70 : 30,
    height: Platform.OS === 'ios' ? 240 : 200,

    paddingBottom: 40,
    // marginHorizontal: '5%',
  },
  setflexcenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 70,
    width: 70,
    backgroundColor: 'white',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeimage: {
    width: 30,
    height: 30,
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  bgwhiteview: {
    backgroundColor: 'white',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setsearchinputbgcolor: {
    backgroundColor: Colors.black_text_color,
    paddingLeft: 15,
    borderRadius: 15,
    height: 57,
    marginTop: 25,
  },
  texttype: {
    fontSize: 16,
    fontFamily: Fonts.Poppins_Medium,
    padding: 0,
    paddingTop: 15,
  },
  flexrowhomeimage: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  satyanilaym: {
    color: '#000000',
    fontSize: 17,
    fontFamily: Fonts.Poppins_Medium,
  },
  satyanilaymtwo: {

    fontSize: 14,
    fontFamily: Fonts.Poppins_Medium,
  },
  marginright: {
    marginRight: 20,
  },
  flexrowset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: '10%',
    paddingTop: 30,
  },
  saveaddresh: {

    fontSize: 18,
    fontFamily: Fonts.Poppins_Medium,
  },
  setbgminviewhome: {
    paddingHorizontal: '17%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  sethometext: {
    fontSize: 15,
    lineHeight: 24,
    fontFamily: Fonts.Poppins_Medium,

    paddingTop: 7,
  },
  setwhiteboxinhome: {
    width: 90,
    height: 90,
    flexDirection: 'row',
    borderRadius: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  centerimg: {
    marginLeft: 5,
  },
  setimageborderredius: {
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
    width: '100%',
    marginTop: -36,
    marginBottom: 100,
  },
  positonabsolute: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    paddingBottom: 0,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 2,
  },
  setconformbutton: {
    marginTop: 20,
    borderRadius: 100,
  },
  textcolorsetwhite: {
    color: 'white'
  },
  positonsetdelever: {
    position: 'absolute',
    top: 20,
    zIndex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    borderWidth: 1,
    marginLeft: 20,
    justifyContent: 'space-between',
    borderRadius: 20,
    width: 153,
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.48)'
  },
  setdilivertext: {
    fontSize: 17,
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
    color: 'black',
    paddingRight: 15,
    paddingTop: 3
  },
  setpencileicon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingTop: 10,
    position: 'relative',
    top: 20,
    width: 50,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    marginTop: -20,
    zIndex: 3,
  },
  centerpencileicon: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  setwhiteboxwidth: {
    width: '85%',
    paddingBottom: 10,
  },
  setwhiteboxwidthtwo: {
    width: '99%'
  },
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapstyleset: {
    flex: 1,
    width: '100%',
    height: 670,
    paddingTop: 10,
    borderRadius: 20,
  },
  mapviewstyle: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mapLeadMapStyleet: {
    flex: 1,
    width: '100%',
    height: 670,
    paddingTop: 10,
    borderRadius: 20
  },
  textstyle: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: 17,
    fontWeight: '800',
    lineHeight: 30,
    textAlign: 'center',
    color: 'white',
  },
  setbgcolorviewtwoview: {
    borderRadius: 14,
    width: 90,
    paddingRight: 6,
    paddingBottom: 2,
    height: 31,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settextstyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'hsl(0, 100%, 99.8%)',
    position: 'absolute',
    top: 20,
    left: 10,
    width: 100,
    height: 40,
    borderRadius: 17,
  },
  markericon: {
    width: 50,
    height: 50
  },
  setimahmapstyle: {
    height: 70,
    width: 70,
    borderRadius: 300,
  },
  setimahmapstyletwo: {
    height: 70,
    width: 70,
    borderRadius: 300,
  },
  setimahmapstylethree: {
    height: 70,
    width: 70,
    borderRadius: 300,
  },
  setimahmapstylefour: {
    height: 70,
    width: 70,
    borderRadius: 300,
  },
  setimahmapstylefive: {
    height: 70,
    width: 70,
    borderRadius: 300,
    marginLeft: 190,
    marginTop: 100,
  }
});