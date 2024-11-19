import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { Camera } from 'react-native-vision-camera'
import {
  CameraDevice,
  runAtTargetFps,
  useCameraDevice,
  useCameraFormat,
  useFrameProcessor,
  useLocationPermission,
  useMicrophonePermission,
} from 'react-native-vision-camera'

const { hasPermission, requestPermission } = useCameraPermission()

const QRScanner = ({ navigation }: { navigation: any }) => {



  const device = useCameraDevice('back', {
     physicalDevices: ['wide-angle-camera']
  })



  return (
    <View style={styles.container}>
      <Camera
        device={device}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default QRScanner;
