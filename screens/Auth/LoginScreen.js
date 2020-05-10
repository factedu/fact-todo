import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Card, Text, Input, Button } from 'react-native-elements';
import firebase from 'firebase';
import Colors from './../../constraints/color';

class LoginScreen extends Component {
    state = {
        loading: false,
        user: null,
        email: null,
        password: null
    };
    constructor(props) {
        super(props);
    }
   
    signInWithEmailAndPassword() {
        const { email, password } = this.state;
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                alert(err + ' May be you should signup first!!');
            })
        // alert(`Signing in with email ${email}:${password}`);
    }

    render() {
        return (
            <View style={styles.container}>
                <Card
                    title='Login'
                    containerStyle={styles.card}
                >
                    {(this.state.loading) ? <ActivityIndicator size='large' /> : null}
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                name='envelope'
                                color='black'
                            />
                        }
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                color='black'
                            />
                        }
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })}
                    />

                    <Button
                        icon={{
                            name: "sign-in",
                            type: 'font-awesome',
                            size: 15,
                            color: "white"
                        }}
                        disabled={!(this.state.email && this.state.password)}
                        buttonStyle={{ backgroundColor: Colors.primary }}
                        loading={false}
                        raised
                        title="Sign In"
                        onPress={() => this.signInWithEmailAndPassword()}
                    >
                    </Button>
                    <Text style={{textAlign:'center',fontSize:16,padding:15}}>OR, Don't have account yet?</Text>
                    <Button
                        icon={{
                            name: "user-plus",
                            type: 'font-awesome',
                            size: 15,
                            color: "white"
                        }}
                        buttonStyle={{ backgroundColor: Colors.primary2 }}
                        titleStyle={{color:'white'}}
                        loading={false}
                        raised
                        title="Sign Up"
                        onPress={() => this.props.navigation.navigate('Signup')}
                    >
                    </Button>
                </Card>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: Colors.primary
    },
    card: {
        width: '90%',
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 25,
        backgroundColor: 'white'
    },
    buttonContainer: {
        top: 20
    },
    button: {
        backgroundColor: Colors.secondry,
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 50,
    }
})