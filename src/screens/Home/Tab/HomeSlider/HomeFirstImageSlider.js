import React, { useState, useMemo } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { HomeStyles } from '../../../../styles';
import { carouselItems, SH, widthPercent } from '../../../../utils';
import { Button, Spacing } from '../../../../components';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const App = (props) => {
  const { Colors } = useTheme();
  const { buyticket, onPress } = props;
  let _slider1Ref;
  const [index, setIndex] = useState(0);
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  const { t } = useTranslation();

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={HomeStyle.minviewfunction} onPress={() => onPress()}>
        <View style={HomeStyle.flexrowimagandtext}>
          <View style={HomeStyle.imagecenyer}>
            <Image source={item.imge} style={HomeStyle.SliderImageStyles} />
          </View>
        </View>
        <View style={HomeStyle.postionaddinternation}>
          <Text style={HomeStyle.Colorwhitetext}>{t(item.text)}</Text>
          <Spacing space={SH(15)} />
          <Button onPress={() => buyticket()} buttonStyle={HomeStyle.Bookbuttonwidtgh} title={t("Book Now")} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[HomeStyle.exampleContainer, HomeStyle.bgcolorset]}>
      <Carousel
        ref={c => _slider1Ref = c}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={widthPercent(100)}
        itemWidth={widthPercent(85)}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        containerCustomStyle={HomeStyle.slider}
        contentContainerCustomStyle={HomeStyle.sliderContentContainer}
        loop={true}
        loopClonesPerSide={3}
        enableSnap={true}
        autoplay={false}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={index}
        carouselRef={c => _slider1Ref = c}
        containerStyle={HomeStyle.paginationContainer}
        dotColor={Colors.theme_backgound}
        dotStyle={HomeStyle.paginationDot}
        inactiveDotStyle={HomeStyle.setdotactive}
        inactiveDotColor={Colors.gray_text_color}
        inactiveDotOpacity={1}
        enableSnap={true}
        dotOpacity={0.5}
      />
    </View>
  );
};
export default App;