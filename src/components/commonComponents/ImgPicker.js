import React, { useMemo } from 'react';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { SH, SF, SW } from '../../utils';
import images from '../../images';

function ImgPicker(props) {
    const { userImage, onPress } = props;

    const Styles = useMemo(
        () =>
            StyleSheet.create({
                userimagstyle: {
                    width: Platform.OS === 'ios' ? 100 : SW(115),
                    height: Platform.OS === 'ios' ? 100 : SW(115),
                    overflow: 'hidden',
                    borderRadius: 115,
                    position: "absolute",
                    alignSelf: "center",
                    top: SH(13),
                },
                borderroundimage: {
                    position: 'relative',
                    width: SW(153),
                    height: SH(153)
                },
                mainView: {
                    position: "relative",
                    flexDirection: "column",
                    alignItems: "baseline"
                }
            }),
        [],
    );

    return (
        <View style={Styles.mainView}>
            <TouchableOpacity onPress={() => onPress()}>
                {userImage ?
                    <Image style={Styles.userimagstyle} resizeMode="cover" source={{ uri: userImage }} />
                    :
                    <Image style={Styles.userimagstyle} resizeMode="contain" source={images.user_img} />
                }
            </TouchableOpacity>
        </View>
    );
}

ImgPicker.defaultProps = {
    userImage: '',
    noImageType: '',
    onPress: () => { }
};

ImgPicker.propTypes = {
    userImage: PropTypes.string,
    noImageType: PropTypes.string,
    onPress: PropTypes.func,
};

export default ImgPicker;
