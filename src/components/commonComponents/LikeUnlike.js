import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {VectorIcon} from '../../components';
import { Colors ,SF} from "../../utils";

const LikeUnlke = (props) => {
    const { text, LikeColour, UnlikeColour, DefaultStyle, ViewStyle, index } = props;
    const [liked, setLiked] = useState([]);

    return (
        <TouchableOpacity onPress={() => {
            if (liked.includes(index)) {
                let unlike = liked.filter((elem) => elem !== index);
                setLiked(unlike);
            } else {
                setLiked([...liked, index]);
            }
        }}>
            <VectorIcon icon="FontAwesome" name={liked.includes(index) ? 'bookmark' : 'bookmark-o'} size={SF(20)} color={Colors.theme_backgound} />
        </TouchableOpacity>
    )
}
export default LikeUnlke;