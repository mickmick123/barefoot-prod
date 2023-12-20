import React, { useState } from 'react';
import { View } from 'react-native';
import { ImagePicker } from '../../components';
import { launchImageLibrary } from 'react-native-image-picker';


const ImagePickerScreen = (props) => {
    const { boxplus } = props;
    const [imgpathselect, SetImgpathselect] = useState('');
    const [filePath, setFilePath] = useState('');
    const [AlertData, setAlertData] = useState(false);
    const chooseFile = () => {
        let options = {
            mediaType: 'photo',
            includeBase64: true,
            saveToPhotos: true,
            maxWidth: 200,
            maxHeight: 200,
            quality: 0.8,
            allowsEditing: true,
        };
        launchImageLibrary(options, (response) => {
            console.log(response, '=====>')
            if (response.didCancel) {
                setAlertData(current => !current)
                return;
            }
            setFilePath(response.assets[0].base64)
            SetImgpathselect(response.assets[0].uri);
        });
    };
    return (
        <View>
            <ImagePicker
                userImage={imgpathselect}
                userImagetwo={imgpathselect}
                onPress={() =>
                    chooseFile('photo')
                }
            />
        </View>
    )
}
export default ImagePickerScreen;