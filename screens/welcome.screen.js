import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import splash from '../assets/splash.png';
const theme = {
  Button: {
    titleStyle: {
      color: '#fff',
    },
  },
};
export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={splash} style={styles.bgImage} />
      <Text></Text>
      <Text style={styles.text}>Welcome to</Text>
      <Button
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
            style={{marginLeft:12}}
          />
        }
        iconRight
        buttonStyle={styles.actionButton}
        title="Get Started"
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  bgImage: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  text: {
    top: 30,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 28
  },
  actionButton: {
    backgroundColor: '#000',
    padding:10,
  }
});