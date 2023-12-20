
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { SF, SH, SW, Fonts, Colors, widthPercent } from '../../utils';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');


export default StyleSheet.create({
  scanvicolor: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white_text_color,
  },
  container: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  minviewallcontent: {
    width: '90%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camerastyleset: {
    width: SW(300),
    height: SH(310),
    borderRadius: SH(15),
    overflow: 'hidden',
    borderWidth: 0,
  },
  flexrowcentercontain: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  markerstyleset: {
    width: SW(300),
    height: SH(310),
    borderRadius: SH(15),
    borderWidth: 0,
  },
  Scanviewcontent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  Scanviewcontentsecond: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: SH(40)
  },
  Camerastyles: {
    width: SW(300),
    height: SH(310),
    borderRadius: SH(15),
    overflow: 'hidden',
    borderWidth: 0,
  },
  Scancontainerstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  Markerstyles: {
    width: SW(300),
    height: SH(310),
    borderRadius: SH(15),
    borderWidth: 0,
  }
});
