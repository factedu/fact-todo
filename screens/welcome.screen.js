import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import splash from '../assets/splash.png';

export default function WelcomeScreen({navigation}) {
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
        onPress={()=>navigation.navigate('Location')}
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