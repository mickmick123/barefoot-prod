import { StyleSheet } from 'react-native';
import { SF, SH, SW } from '../../utils';
export default customStyles = (colors) => StyleSheet.create({
  SpContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#299D35',
  },
  closeView: {
width:'100%'
  },
  SptextStyle: {
    color: '#299D35',
    fontSize: 45,
    fontFamily: 'Nunito-Regular'
  },
  modalcenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 17,
    backgroundColor: 'rgba(26, 26, 26, 0.6)',
    position:'relative',
   
  },
  modalView: {
    width: '100%',
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingVertical: SH(20),
    paddingHorizontal: SW(20),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalbuttonClose: {
    // backgroundColor:'white',
    alignItems: "flex-end",
    position: 'absolute',
    right: SW(20),
    top: SH(20)
  },

});