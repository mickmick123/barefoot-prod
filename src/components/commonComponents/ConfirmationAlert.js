import React, { useState } from "react";
import { Modal, Text, View } from "react-native";
import Style from '../../styles/CommonStyle/Style';
import IconF from 'react-native-vector-icons/dist/AntDesign';
import { Button } from '../../components';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function SweetaelertModal(props) {
    const { message, modalVisible, setModalVisible, buttonminview, onPress, onPressCancel, buttonText, cancelButtonText, iconVisible } = props;
  
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    return <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
    >
        <View style={Style.setbgcolorgrsay}>
            <View style={Style.CenteredView}>
                <View style={Style.ModalView}>
                    {iconVisible &&
                        <View style={Style.setroundcenter}>
                            <View style={[Style.checkiconright, { borderColor: colorrdata }]}>
                                <IconF style={Style.setbackgroundicon} color={colorrdata} name="check" size={45} />
                            </View>
                        </View>
                    }
                    <View style={Style.registertextset}>
                        <Text style={Style.settext}>{message}</Text>
                    </View>
                    <View style={[Style.buttonminview, { ...buttonminview }]} >
                        <View style={Style.setokbutton}>
                            <Button title={buttonText}
                                onPress={() => { onPress && onPress() }}
                            />
                        </View>
                        {cancelButtonText ?
                            <View style={Style.setokbutton}>
                                <Button title={cancelButtonText}
                                    onPress={() => { onPressCancel() }}
                                />
                            </View>
                            : null
                        }
                    </View>
                </View>
            </View>
        </View>
    </Modal>;
}

SweetaelertModal.defaultProps = {
    message: '',
    setModalVisible: () => { },
    modalVisible: false,
    onPress: () => { },
    onPressCancel: () => { },
    buttonText: "Ok",
    cancelButtonText: '',
    iconVisible: false
};

SweetaelertModal.propTypes = {
    message: propTypes.string,
    setModalVisible: propTypes.func,
    modalVisible: propTypes.boolean,
    onPress: propTypes.func,
    onPressCancel: propTypes.func,
    buttonText: propTypes.string,
    cancelButtonText: propTypes.string,
    iconVisible: propTypes.boolean
};

export default SweetaelertModal;
