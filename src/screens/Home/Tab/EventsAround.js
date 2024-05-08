import React, {useState, useEffect, useMemo} from 'react';
import {
  View,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {LocationStyles, Style} from '../../../styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import images from '../../../images';
import {useTheme} from '@react-navigation/native';
import RouteName from '../../../routes/RouteName';

const EventsAround = props => {
  const {Colors} = useTheme();
  const {navigation} = props;
  const LocationStyle = useMemo(() => LocationStyles(Colors), [Colors]);
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      console.log('position', crd.latitude);
      if (crd) {
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: crd.latitudeDelta,
          longitudeDelta: crd.longitudeDelta,
        });
      }
    });
  }, []);
  return (
    <View style={LocationStyle.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor="#89b4f8" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <KeyboardAvoidingView enabled>
          <View style={LocationStyle.minflexview}>
            <View style={LocationStyle.bgwhiteview}>
              <View style={LocationStyle.mapviewstyle}>
                <MapView
                  region={{
                    latitude: 22.288199659126235,
                    longitude: 70.79500448014512,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  }}
                  provider={PROVIDER_GOOGLE}
                  style={LocationStyle.mapLeadMapStyleet}
                  scrollEnabled={true}
                  showsUserLocation={true}
                  showsMyLocationButton={true}
                  followsUserLocation={true}
                  showsCompass={true}
                  zoomEnabled={true}
                  pitchEnabled={true}
                  rotateEnabled={true}>
                  <Marker
                    onPress={() =>
                      navigation.navigate(RouteName.EVENTS_DETAILS_SCREEN)
                    }
                    title="Yor are here"
                    description="This is a description"
                    coordinate={position}
                  />

                  <Marker
                    onPress={() =>
                      navigation.navigate(RouteName.EVENTS_DETAILS_SCREEN)
                    }
                    coordinate={{
                      latitude: 22.288422599884058,
                      longitude: 70.79374689024529,
                    }}>
                    <Image
                      resizeMethod="resize"
                      source={images.Slider_four_image}
                      style={LocationStyle.setimahmapstyle}
                      resizeMode="cover"
                    />
                  </Marker>

                  <Marker
                    onPress={() =>
                      navigation.navigate(RouteName.EVENTS_DETAILS_SCREEN)
                    }
                    coordinate={{
                      latitude: 22.287481876042634,
                      longitude: 70.79179173523978,
                    }}>
                    <Image
                      resizeMethod="resize"
                      source={images.Slider_one_image}
                      style={LocationStyle.setimahmapstyletwo}
                      resizeMode="cover"
                    />
                  </Marker>
                  <Marker
                    onPress={() =>
                      navigation.navigate(RouteName.EVENTS_DETAILS_SCREEN)
                    }
                    coordinate={{
                      latitude: 22.28763866378918,
                      longitude: 70.79570204525076,
                    }}>
                    <Image
                      resizeMethod="resize"
                      source={images.Slider_two_image}
                      style={LocationStyle.setimahmapstylethree}
                      resizeMode="cover"
                    />
                  </Marker>

                  <Marker
                    onPress={() =>
                      navigation.navigate(RouteName.EVENTS_DETAILS_SCREEN)
                    }
                    coordinate={{
                      latitude: 17.542751593159494,
                      longitude: 78.51921435307105,
                    }}>
                    <Image
                      resizeMethod="resize"
                      source={images.Slider_four_image}
                      style={LocationStyle.setimahmapstylefour}
                      resizeMode="cover"
                    />
                  </Marker>

                  <Marker
                    onPress={() =>
                      navigation.navigate(RouteName.EVENTS_DETAILS_SCREEN)
                    }
                    coordinate={{
                      latitude: 22.287958922828697,
                      longitude: 70.79481940772033,
                    }}>
                    <Image
                      resizeMethod="resize"
                      source={images.Slider_five_image}
                      style={LocationStyle.setimahmapstylefive}
                      resizeMode="cover"
                    />
                  </Marker>
                </MapView>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default EventsAround;
