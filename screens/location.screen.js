import React from 'react';
import { StyleSheet, View, Dimensions, Alert, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Color from '../constraints/color';

export default class LocationScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            markers: [],
            location: null,
            address: null
        };
    }

    async setLocation() {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Opps!!', 'Permission to access location was denied');
        } else {
            // Alert.alert('Awesome!!', 'Your current location fetched')
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });

        if (location && location.coords) {
            this.generateMarkers(location.coords.latitude, location.coords.longitude);
        }
    }

    async getLocationAddress(lat, lng) {
        let address = await Location.reverseGeocodeAsync({ latitude: lat, longitude: lng });
        return address;
    }

    async generateMarkers(lat, lng) {
        console.log(lat, lng);
        let marker = {
            title: 'Address',
            description: '',
            latlng: {
                latitude: 0,
                longitude: 0
            }
        };
        const markers = [];
        if (lat && lng) {
            marker.id = 1;
            marker.latlng.latitude = lat;
            marker.latlng.longitude = lng;
            marker.address = await this.getLocationAddress(lat, lng);
            marker.description = (marker.address.length) ? this.formatAddress(marker.address[0]) : '';
            this.setState({ address: marker.description });
            markers.push(marker);
            this.setState({ markers: [...markers] })
        }
    }

    setNewLocation(e) {
        this.setState({ location: { coords: e.nativeEvent.coordinate } });
        this.generateMarkers(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude);
    }

    formatAddress(addObj) {
        return `${addObj.name}, ${(addObj.street) ? addObj.street : ''}, ${addObj.city}, ${addObj.region}, PIN:${addObj.postalCode}, ${addObj.country}`
    }

    componentDidMount() {
        this.setLocation();
    }

    render() {
        let latitude = 20.5;
        let longitude = 78.9;
        if (this.state.location && this.state.location.coords) {
            latitude = this.state.location.coords.latitude;
            longitude = this.state.location.coords.longitude;
        }
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        multiline={true}
                        editable={false}
                        value={this.state.address}
                        style={styles.input}
                    >
                    </TextInput>
                </View>

                <MapView
                    style={styles.mapStyle}
                    region={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                >
                    {this.state.markers.map(marker => (
                        <Marker
                            key={marker.id}
                            draggable
                            tracksViewChanges={false}
                            onDragEnd={(e) => this.setNewLocation(e)}
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    inputContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginHorizontal:10,
        top: 10,
        zIndex: 1,
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 2,
        fontSize: 15,
        paddingHorizontal: 20,
        textAlign: 'center',
        borderRadius: 5,
        borderColor: Color.secondry,
        color:Color.primary
    }
});