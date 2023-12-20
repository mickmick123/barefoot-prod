import React from "react";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { ScannerStyles } from '../../styles';

function QRCodeScanners(props) {
    const { camerastyleset, flexrowcentercontain, markerstyleset, onRead, scanner } = props;

    return (
        <QRCodeScanner
            cameraStyle={[ScannerStyles.camerastyleset, { ...camerastyleset }]}
            reactivate={true}
            showMarker={true}
            cameraContainerStyle={[ScannerStyles.flexrowcentercontain, { ...flexrowcentercontain }]}
            markerStyle={[ScannerStyles.markerstyleset, { ...markerstyleset }]}
            onRead={onRead}
            scanner={scanner}
        />
    );
};
export default QRCodeScanners;