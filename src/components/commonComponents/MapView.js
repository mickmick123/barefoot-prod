import React, { useMemo } from 'react';
import { StyleSheet, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useTheme } from '@react-navigation/native';
import { LocationStyles } from '../../styles';
import images from '../../index';

function MapLocation(props) {
  const { Colors } = useTheme();
  const { position, onPress } = props;
  const LocationStyle = useMemo(() => LocationStyles(Colors), [Colors]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        mapConformlocationet: {
          flex: 1,
          width: '100%',
          height: 670,
          paddingTop: 10,
          borderRadius: 20
        }
      }),
  );
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.mapConformlocationet}
      scrollEnabled={true}
      showsUserLocation={true}
      showsMyLocationButton={true}
      followsUserLocation={true}
      showsCompass={true}
      zoomEnabled={true}
      pitchEnabled={true}
      rotateEnabled={true}
    >
      <Marker
        onPress={() => onPress()}
        title='Yor are here'
        description='This is a description'
        coordinate={position} />

      <Marker
        onPress={() => onPress()}
        coordinate={{ latitude: 22.288422599884058, longitude: 70.79374689024529, }}>
        <Image resizeMethod='resize'
          source={images.Slider_four_image}
          style={LocationStyle.setimahmapstyle}
          resizeMode="cover"
        />
      </Marker>

      <Marker
        onPress={() => onPress()}
        coordinate={{ latitude: 22.287481876042634, longitude: 70.79179173523978 }}>
        <Image resizeMethod='resize'
          source={images.Slider_one_image}
          style={LocationStyle.setimahmapstyletwo}
          resizeMode="cover"
        />
      </Marker>
      <Marker
        onPress={() => onPress()}
        coordinate={{ latitude: 22.28763866378918, longitude: 70.79570204525076, }}>
        <Image resizeMethod='resize'
          source={images.Slider_two_image}
          style={LocationStyle.setimahmapstylethree}
          resizeMode="cover"
        />
      </Marker>
      <Marker
        onPress={() => onPress()}
        coordinate={{ latitude: 17.542751593159494, longitude: 78.51921435307105 }}>
        <Image resizeMethod='resize'
          source={images.Slider_four_image}
          style={LocationStyle.setimahmapstylefour}
          resizeMode="cover"
        />
      </Marker>
      <Marker
        onPress={() => onPress()}
        coordinate={{ latitude: 22.287958922828697, longitude: 70.79481940772033 }}>
        <Image resizeMethod='resize'
          source={images.Slider_five_image}
          style={LocationStyle.setimahmapstylefive}
          resizeMode="cover"
        />
      </Marker>
    </MapView>
  );
}


export default MapLocation;
