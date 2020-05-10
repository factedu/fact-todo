import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import splash from '../assets/splash.png';
import firebase from 'firebase';
import Color from '../constraints/color';

export default function WelcomeScreen({ navigation }) {
  const [user, setUser] = React.useState(firebase.auth().currentUser);
  return (
    <View style={styles.container}>
      <Image source={splash} style={styles.bgImage} />
      <Text></Text>
      <Text style={styles.text}>
        <Text>Welcome</Text>
        
      </Text>
      <Text style={{fontSize:15,fontWeight:'100'}}>{user.email}</Text>
      <View>
      <Button
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
            style={{ marginLeft: 12 }}
          />
        }
        iconRight
        buttonStyle={styles.actionButton}
        title="Get Started"
        onPress={() => navigation.navigate('Todo')}
      />
      <Button
        icon={
          <Icon
            name="lock"
            size={15}
            color="white"
            style={{ marginLeft: 12 }}
          />
        }
        iconRight
        buttonStyle={{...styles.actionButton,top:12}}
        title="Logout"
        onPress={() => firebase.auth().signOut()}
      />
    </View>
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
    color: Color.primary2,
    fontWeight: 'bold',
    fontSize: 28
  },
  actionButton: {
    backgroundColor: '#000',
    padding: 10,
  }
});