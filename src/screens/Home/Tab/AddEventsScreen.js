import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, StatusBar, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { AddEventsStyles, Style } from '../../../styles';
import { Spacing, Input, DropDown, Button, ConfirmationAlert, ImagePicker, DatePicker } from '../../../components';
import { SH } from '../../../utils';
import RouteName from '../../../routes/RouteName';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const AddEventsScreen = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const AddEventsStyle = useMemo(() => AddEventsStyles(Colors), [Colors]);
  const [Eventname, setEventname] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');
  const { t } = useTranslation();

  var alertdata = {
    'logout': "Your Event has been successfully published",
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.EVENT_TAB)
    okbutton;
  }
  const Eventdata = [
    { label: 'All', value: '1' },
    { label: 'Music', value: '2' },
    { label: 'Art', value: '3' },
    { label: 'Sport', value: '4' },
  ];

  return (
    <View style={AddEventsStyle.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <KeyboardAvoidingView enabled>
          <View style={AddEventsStyle.minflexview}>
            <View style={AddEventsStyle.minviewsigninscreen}>
              <View style={AddEventsStyle.AllLeftPadding}>
              <Spacing space={SH(10)} />
              <ImagePicker showdatatwo={true} />
              <Spacing space={SH(30)} />
              <View style={AddEventsStyle.smallboxviewminview}>
                <TouchableOpacity style={AddEventsStyle.smallboxview}>
                  <ImagePicker showdata={true} />
                </TouchableOpacity>
                <TouchableOpacity style={AddEventsStyle.smallboxview}>
                  <ImagePicker showdata={true} />
                </TouchableOpacity>
                <TouchableOpacity style={AddEventsStyle.smallboxview}>
                  <ImagePicker showdata={true} />
                </TouchableOpacity>
                <TouchableOpacity style={AddEventsStyle.smallboxview}>
                  <ImagePicker showdata={true}
                  />
                </TouchableOpacity>
              </View>
              </View>
              <Spacing space={SH(20)} />
              <Text style={AddEventsStyle.Eventdetailstextstyles}>{t("Event_Details")}</Text>
              <View>
                <Spacing space={SH(20)} />
                <Spacing space={SH(1)} />
                <Input
                  placeholder={t("Event_Name")}
                  title={t("Event_Name")}
                  onChangeText={(value) => setEventname(value)}
                  value={Eventname}
                  maxLength={10}
                  placeholderTextColor={Colors.gray_text_color}
                  inputStyle={AddEventsStyle.Inputstylewidth}
                />
                <View style={AddEventsStyle.AllLeftPadding}>
                <Text style={AddEventsStyle.Eventnamedata}>{t("Event_Type")}</Text>
                <Spacing space={SH(1)} />
                <View style={isFocus ? AddEventsStyle.LeadsDropdownbox : AddEventsStyle.LeadsDropdownboxOpen}>
                  <DropDown
                    data={Eventdata}
                    dropdownStyle={AddEventsStyle.LeadDropdown}
                    onChange={item => {
                      setValue(item.value);
                      setIsFocus(false);
                    }}
                    search
                    searchPlaceholder={t("Search_bar")}
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
                <Text style={AddEventsStyle.Eventnamedata}>{t("Select_Date")}</Text>
                <Spacing space={SH(1)} />
                <TouchableOpacity style={AddEventsStyle.Datebox}>
                  <DatePicker selectdate={t("Select_Date")} />
                </TouchableOpacity>
                </View>
                <Spacing space={SH(100)} />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <ConfirmationAlert
        message={alertMessage}
        modalVisible={alertVisible}
        setModalVisible={setAlertVisible}
        onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
        buttonminview={AddEventsStyle.button}
        iconVisible={true}
      />
      <View style={AddEventsStyle.Bottombutton}>
        <Button onPress={() => {
          setAlertVisible(true);
          setAlertMessage(alertdata.logout);
          Setokbutton('');
        }} title={t("Publish_title")} />
      </View>
    </View>
  );
};
export default AddEventsScreen;
