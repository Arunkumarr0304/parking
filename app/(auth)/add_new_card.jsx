import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/Back.svg";
import { Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Card from "../../assets/images/card_icon.svg";
import Person from "../../assets/images/person.svg";
import Lock from "../../assets/images/lock.svg";
import Calendar from "../../assets/images/calendar2.svg";
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";

const Add_new = () => {
    
    const add_card = () => {
        router.push('payment');
    };
    const back = () => {
        router.push('payment');
      };
    
  return (
    <View style={[styles.container]}>
        <View style={styles.header}>
        <TouchableOpacity onPress={back}>
       <Back />
       </TouchableOpacity>
            <Text style={[styles.heading]}>Add New Card</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.input_container}>
            <View style={styles.input_box}>
                <Text style={[styles.label]}>Card Number</Text>
                <TextInput style={[styles.input]}
                    placeholder='Card Number'
                    keyboardType= 'number-pad'
                
                />
                <View style={styles.icon}>
                    <Card />
                </View>
            </View>
            <View style={styles.input_box}>
                <Text style={[styles.label]}>user name</Text>
                <TextInput style={[styles.input]} 
                    placeholder='Minato Namikaze'
                />
                <View style={styles.icon}>
                    <Person />
                </View>
            </View>
            <View style={styles.input_box}>
                <Text style={[styles.label]}>Expired</Text>
                <TextInput style={[styles.input]}
                placeholder='MM/YY'
                />
                <View style={styles.icon}>
                    <Calendar />
                </View>
            </View>
            <View style={styles.input_box}>
                <Text style={[styles.label]}>CVV</Text>
                <TextInput style={[styles.input]}
                    placeholder='CVV'
                />
                <View style={styles.icon}>
                    <Lock />
                </View>
            </View>
        </View>
        <View style={styles.button_box}>
            <Button buttonText="Add Card" onPress={add_card} />
        </View>
        </ScrollView>
    </View>
  )
}

export default Add_new;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    input_container: {
        gap: 10,
        marginTop: 30,
    },
    input_box: {
        gap: 10,
    },
    label: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat_600SemiBold',
        color: 'input_box',
        textTransform: 'capitalize',
    },
    input: {
        borderRadius: 10,
        borderColor: '#F6F6F6',
        paddingVertical: 16,
        paddingHorizontal: 40,
        backgroundColor: '#F6F6F6',
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        bottom: 18,
        left: 10,
    },
    button_box: {
        marginTop: 170,
        marginBottom: 80,
    }
})