import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { request, PERMISSIONS } from 'react-native-permissions';

import Icon from 'react-native-vector-icons/Ionicons'; // For icons
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRScanner from './QRScanner'; // Import QR Scanner screen

import { enableScreens } from 'react-native-screens';

enableScreens();

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const requestCameraPermission = async () => {
    const result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA
    );
    console.log('Camera Permission: ', result);
  };
  requestCameraPermission()

  return (
    <ImageBackground
      source={require('./assets/logo-black-2048.png')}
      style={styles.backgroundImage}
      resizeMode="contain"
    >
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('QRScanner')} // Navigate to QR Scanner
      >
        <Icon name="qr-code" size={30} color="black" />
      </TouchableOpacity>
    </ImageBackground>
  );
};


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Hides the header
        />
        <Stack.Screen
          name="QRScanner"
          component={QRScanner}
          options={{ title: 'Scan QR Code' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconContainer: {
    position: 'absolute',
    top: 50, // Adjust based on the safe area
    left: 20,
    zIndex: 10, // Ensures the icon is on top of the background
  },
});

export default App;
