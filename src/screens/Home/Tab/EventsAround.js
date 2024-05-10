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
import {useSelector} from 'react-redux';

const EventsAround = props => {
  const {Colors} = useTheme();
  const {navigation} = props;
  const {detailsStore} = useSelector(state => state.DataReducer) || {
    detailsStore,
  };

  const {eventMarkers} = useSelector(state => state.DataReducer) || {
    eventMarkers,
  };

  const LocationStyle = useMemo(() => LocationStyles(Colors), [Colors]);
  const [selectedStore, setSelectedStore] = useState({});
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    if (Object.keys(detailsStore).length === 0) {
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
    } else {
      setSelectedStore(detailsStore.location);
    }
  }, [detailsStore]);
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
                  initialRegion={{
                    latitude:
                      Object.keys(selectedStore).length > 0
                        ? selectedStore.coordinates[0]
                        : position.latitude,
                    longitude:
                      Object.keys(selectedStore).length > 0
                        ? selectedStore.coordinates[1]
                        : position.longitude,
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
                  {eventMarkers.length &&
                    eventMarkers.map(obj => {
                      return (
                        <Marker
                          onPress={() =>
                            navigation.navigate(RouteName.EVENTS_DETAILS_SCREEN)
                          }
                          coordinate={{
                            latitude: obj.location.coordinates[1],
                            longitude: obj.location.coordinates[0],
                          }}>
                          <Image
                            resizeMethod="resize"
                            source={images.Event_Icon}
                            style={LocationStyle.setimahmapstylefive}
                            resizeMode="cover"
                          />
                        </Marker>
                      );
                    })}
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
