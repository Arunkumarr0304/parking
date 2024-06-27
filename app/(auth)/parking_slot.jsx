import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Back from "../../assets/images/Back.svg";
import Button from '../../components/Button/Button';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { router, Link } from "expo-router";

const Parking_slot = () => {

    const review = () => {
        router.push('review');
    };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Back />
            <Text style={styles.heading}>Select Parking Slot</Text>
        </View>
        <Button buttonText="continue" onPress={review} />
    </View>
  )
}

export default Parking_slot;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    }
})