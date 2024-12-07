import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRScanner from './QRScanner';
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QRScanner"
          component={QRScanner}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            cardStyle: {
              backgroundColor: 'rgba(0,0,0,1)',
            },
            headerLeft: () => null,
            headerRight: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <ImageBackground
      source={require('./assets/logo-black-2048.png')}
      style={styles.backgroundImage}
      resizeMode="contain"
    >
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('QRScanner')}
      >
        <Icon name="qr-code" size={30} color="black" />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  iconContainer: {
    position: 'absolute',
    top: 50, // Adjust based on the safe area
    left: 20,
    zIndex: 10, // Ensures the icon is on top of the background
  },
});

export default App;
