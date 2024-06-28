import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useContext } from 'react';
import Locations from "../../assets/images/location.png";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';
import Back from "../../assets/images/Back.svg";
import Dark_back from "../../assets/images/White_back.svg";

const Location = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const home = () => {
        router.push('home');
    };

    const manual = () => {
        router.push('manual_location');
    }
   
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
       
        <View style={styles.content}>
            <Image source={Locations} alt='location' style={styles.image} />
            <Text style={styles.content_heading}>What is Your Location</Text>
            <Text style={styles.content_text}>We need to know location in order to suggest near by  services.</Text>
        </View>
        <View style={styles.button_container}>
            <Button buttonText="Allow Location Access" onPress={home} />
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
        paddingBottom: 200,
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