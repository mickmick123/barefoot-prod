
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { SF, SH, SW, Fonts, Colors, widthPercent } from '../../utils';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');


export default StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },

  minviewsigninscreen: {
    width: '100%',
    height: '100%',

  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  
});
