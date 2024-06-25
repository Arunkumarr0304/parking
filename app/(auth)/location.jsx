import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Locations from "../../assets/images/location.png";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";

const Location = () => {
    const manual = () => {
        router.push('manual_location');
    }
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Image source={Locations} alt='location' style={styles.image} />
            <Text style={styles.content_heading}>What is Your Location</Text>
            <Text style={styles.content_text}>We need to know location in order to suggest near by  services.</Text>
        </View>
        <View style={styles.button_container}>
            <Button buttonText="Allow Location Access" />
            <Button buttonText="Enter Location Manually" textColor="#FF95AE" borderColor="#FF95AE" backgroundColor="transparent" onPress={manual} />
        </View>
    </View>
  )
}

export default Location;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 120,
    },
    image: {
        width: 130,
        height: 130,
    },
    content_heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        marginTop: 50,
    },
    content_text: {
        marginTop: 16,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Roboto_400Regular',
        color: '#757575',
    },
    button_container: {
        marginTop: 30,
        gap: 15,
    }
})