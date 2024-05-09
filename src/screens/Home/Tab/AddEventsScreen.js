import React, {useState, useMemo, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {AddEventsStyles, Style} from '../../../styles';
import {
  Spacing,
  Input,
  DropDown,
  Button,
  ConfirmationAlert,
  ImagePicker,
  DatePicker,
} from '../../../components';
import {SH} from '../../../utils';
import RouteName from '../../../routes/RouteName';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {event_regsitration} from '../../../apis';
import {useSelector} from 'react-redux';
import MapLocation from '../../../components/commonComponents/MapView';
import Geolocation from '@react-native-community/geolocation';

const AddEventsScreen = props => {
  const {navigation} = props;
  const {Colors} = useTheme();
  const AddEventsStyle = useMemo(() => AddEventsStyles(Colors), [Colors]);
  const [Eventname, setEventname] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [descrtiption, setDescrtiption] = useState('');
  const [date_start, setDateStart] = useState('');
  const [date_end, setDateEnd] = useState('');
  const [time_start, setTimeStart] = useState('');
  const [time_end, setTimeEnd] = useState('');
  const [okbutton, Setokbutton] = useState('');
  const [files, setFiles] = useState([]);
  const {t} = useTranslation();
  const [dateselcet, setdateselcet] = useState('Select Date');
  const [coodinates, setCoordinates] = useState([]);
  const [markerPosition, setMarkerPosition] = useState({});
  const [currentLoc, setCurrentLoc] = useState([]);
  const {userData} = useSelector(state => state.DataReducer);

  var alertdata = {
    logout: 'Your Event has been successfully published',
  };

  const onoknutton = () => {
    navigation.navigate(RouteName.EVENT_TAB);
    okbutton;
  };
  const Eventdata = [
    {label: 'All', value: 'all'},
    {label: 'Music', value: 'music'},
    {label: 'Art', value: 'art'},
    {label: 'Sport', value: 'sport'},
    {label: 'Celebration', value: 'celebration'},
  ];

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      console.log('position', crd);
      setCurrentLoc(crd);
      setMarkerPosition(crd);
      // if (crd) {
      //   setPosition({
      //     latitude: crd.latitude,
      //     longitude: crd.longitude,
      //     latitudeDelta: crd.latitudeDelta,
      //     longitudeDelta: crd.longitudeDelta,
      //   });
      // }
    });
  }, []);

  const registerEvent = async () => {
    const params = {
      event_name: Eventname,
      event_type: value,
      date_start: date_start,
      date_end: date_end,
      time_start: time_start,
      time_end: time_end,
      images: files,
      user_id: userData._id,
      event_location: coodinates,
      descrtiption: descrtiption,
    };
    const res = await event_regsitration(params);
    if (res.success) {
      setAlertVisible(true);
      setAlertMessage(alertdata.logout);
      Setokbutton('');
    }
  };

  const onDragEnd = e => {
    setMarkerPosition(e);
  };

  const lockPosition = e => {
    setCoordinates(markerPosition);
  };

  return (
    <View style={AddEventsStyle.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {Object.keys(coodinates).length > 0 ? (
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.ScrollViewStyles}>
          <KeyboardAvoidingView enabled>
            <View style={AddEventsStyle.minflexview}>
              <View style={AddEventsStyle.minviewsigninscreen}>
                <View style={AddEventsStyle.AllLeftPadding}>
                  <Spacing space={SH(10)} />
                  <ImagePicker
                    files={files}
                    setFiles={setFiles}
                    showdatatwo={true}
                  />
                  <Spacing space={SH(30)} />
                  <View style={AddEventsStyle.smallboxviewminview}>
                    <TouchableOpacity style={AddEventsStyle.smallboxview}>
                      <ImagePicker
                        files={files}
                        setFiles={setFiles}
                        showdata={true}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={AddEventsStyle.smallboxview}>
                      <ImagePicker
                        files={files}
                        setFiles={setFiles}
                        showdata={true}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={AddEventsStyle.smallboxview}>
                      <ImagePicker
                        files={files}
                        setFiles={setFiles}
                        showdata={true}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={AddEventsStyle.smallboxview}>
                      <ImagePicker
                        files={files}
                        setFiles={setFiles}
                        showdata={true}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Spacing space={SH(20)} />
                <Text style={AddEventsStyle.Eventdetailstextstyles}>
                  {t('Event_Details')}
                </Text>
                <View>
                  <Spacing space={SH(20)} />
                  <Spacing space={SH(1)} />
                  <Input
                    placeholder={t('Event_Name')}
                    title={t('Event_Name')}
                    onChangeText={val => setEventname(val)}
                    value={Eventname}
                    maxLength={10}
                    placeholderTextColor={Colors.gray_text_color}
                    inputStyle={AddEventsStyle.Inputstylewidth}
                  />
                  <Input
                    placeholder={t('Event_Description')}
                    title={t('Event_Description')}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={val => setDescrtiption(val)}
                    value={descrtiption}
                    placeholderTextColor={Colors.gray_text_color}
                    inputStyle={AddEventsStyle.Inputstylewidth}
                  />
                  <View style={AddEventsStyle.AllLeftPadding}>
                    <Text style={AddEventsStyle.Eventnamedata}>
                      {t('Event_Type')}
                    </Text>
                    <Spacing space={SH(1)} />
                    <View
                      style={
                        isFocus
                          ? AddEventsStyle.LeadsDropdownbox
                          : AddEventsStyle.LeadsDropdownboxOpen
                      }>
                      <DropDown
                        data={Eventdata}
                        dropdownStyle={AddEventsStyle.LeadDropdown}
                        onChange={item => {
                          setValue(item.value);
                          setIsFocus(false);
                        }}
                        search
                        searchPlaceholder={t('Search_bar')}
                        selectedTextStyle={AddEventsStyle.selectedTextStyleLead}
                        iconStyle={AddEventsStyle.iconStyle}
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        labelField="label"
                        valueField="value"
                      />
                    </View>
                    <Spacing space={SH(25)} />
                    <Text style={AddEventsStyle.Eventnamedata}>
                      {t('Select_Date_Start')}
                    </Text>
                    <Spacing space={SH(1)} />
                    <TouchableOpacity style={AddEventsStyle.Datebox}>
                      <DatePicker
                        dateselcet={date_start}
                        setdateselcet={setDateStart}
                        placeholder={t('Select_Date_Start')}
                      />
                    </TouchableOpacity>
                    <Spacing space={SH(25)} />
                    <Text style={AddEventsStyle.Eventnamedata}>
                      {t('Select_Time_Start')}
                    </Text>
                    <Spacing space={SH(1)} />
                    <TouchableOpacity style={AddEventsStyle.Datebox}>
                      <DatePicker
                        dateselcet={time_start}
                        setdateselcet={setTimeStart}
                        mode="time"
                        placeholder={t('Select_Time_Start')}
                      />
                    </TouchableOpacity>
                    <Spacing space={SH(25)} />
                    <Text style={AddEventsStyle.Eventnamedata}>
                      {t('Select_Date_End')}
                    </Text>
                    <Spacing space={SH(1)} />
                    <TouchableOpacity style={AddEventsStyle.Datebox}>
                      <DatePicker
                        dateselcet={date_end}
                        setdateselcet={setDateEnd}
                        placeholder={t('Select_Date_End')}
                      />
                    </TouchableOpacity>
                    <Spacing space={SH(25)} />
                    <Text style={AddEventsStyle.Eventnamedata}>
                      {t('Select_Time_End')}
                    </Text>
                    <Spacing space={SH(1)} />
                    <TouchableOpacity style={AddEventsStyle.Datebox}>
                      <DatePicker
                        dateselcet={time_end}
                        setdateselcet={setTimeEnd}
                        mode="time"
                        placeholder={t('Select_Time_End')}
                      />
                    </TouchableOpacity>
                  </View>
                  <Spacing space={SH(25)} />
                  {/* <MapPicker
                  initialCoordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                  }}
                  onLocationSelect={({latitude, longitude}) =>
                    console.log(longitude)
                  }
                /> */}
                  <Spacing space={SH(100)} />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      ) : (
        Object.keys(currentLoc).length > 0 && (
          <MapLocation
            onPress={() => console.log('loc')}
            position={currentLoc}
            onDragEnd={onDragEnd}
          />
        )
      )}

      <ConfirmationAlert
        message={alertMessage}
        modalVisible={alertVisible}
        setModalVisible={setAlertVisible}
        onPress={() => {
          setAlertVisible(!alertVisible), onoknutton();
        }}
        buttonminview={AddEventsStyle.button}
        iconVisible={true}
      />
      <View style={AddEventsStyle.Bottombutton}>
        {Object.keys(coodinates).length > 0 ? (
          <Button
            onPress={() => {
              registerEvent();
            }}
            title={t('Publish_title')}
          />
        ) : (
          <Button
            onPress={() => {
              lockPosition();
            }}
            title={'Save Position'}
          />
        )}
      </View>
    </View>
  );
};
export default AddEventsScreen;
