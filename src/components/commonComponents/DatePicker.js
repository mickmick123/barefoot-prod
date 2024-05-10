import React, {useState, useMemo} from 'react';
import {View, Text} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Style, AddEventsStyles} from '../../styles';
import moment from 'moment';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

function DatePicker({
  dateselcet,
  setdateselcet,
  mode = 'date',
  placeholder = 'Select date',
}) {
  const {Colors} = useTheme();
  const AddEventsStyle = useMemo(() => AddEventsStyles(Colors), [Colors]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDateTimePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDateTimePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleDatePicked = date => {
    hideDateTimePicker();
    if (mode === 'date') {
      setdateselcet(
        moment(date, 'YYYY-MM-DDTHH:mm:ss Z').local().format('YYYY-MM-DD'),
      );
    } else {
      setdateselcet(moment(date, 'YYYY-MM-DDTHH:mm:ss Z').local().format('LT'));
    }
  };

  return (
    <View>
      <View style={Style.inputUnderLine}>
        <TouchableOpacity
          style={Style.dobView}
          onPress={() => showDateTimePicker()}>
          <Text style={AddEventsStyle.datetextstyles}>
            {dateselcet === '' ? placeholder : dateselcet}
          </Text>
        </TouchableOpacity>
      </View>
      <DateTimePicker
        isVisible={isDatePickerVisible}
        onConfirm={handleDatePicked}
        onCancel={hideDateTimePicker}
        mode={mode}
      />
    </View>
  );
}
export default DatePicker;
