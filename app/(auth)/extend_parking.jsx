import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/Back.svg";
import Dark_back from "../../assets/images/White_back.svg";
import { Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { extend_data, pay_card } from '../../components/Data/Data';
import CheckCircle from '../../components/Check_Circle/Check_Circle';
import Wallet from "../../assets/images/pink_wallet.svg";
import Card from "../../assets/images/card_icon.svg";
import { router, Link } from "expo-router";
import Button from '../../components/Button/Button';
import ThemeContext from '../../theme/ThemeContext';

const Extend = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [activetab2, setActivetab2] = useState(extend_data[0].id);
    const [checkedStates, setCheckedStates] = useState(Array(pay_card.length).fill(false));

    const set_tab2 = (id) => {
        setActivetab2(id);
    };

  

    const handlePress1 = (index) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);
    };
    const wallet = () => {
        router.push('wallet');
    };
    const card = () => {
        router.push('review');
    };
    const back = () => {
        router.push('timer');
      };
    return (
        <View style={[styles.container, {backgroundColor:theme.background}]}>
            <View style={styles.header}>
            <TouchableOpacity onPress={back}>
       {darkMode? <Dark_back /> :  <Back />}
       </TouchableOpacity>
                <Text style={[styles.heading, {color:theme.color}]}>Extend Parking Time</Text>
            </View>
            <Text style={[styles.time_heading, {color:theme.color}]}>Extend Time</Text>
            <ScrollView horizontal={true}>
                <View style={styles.time_container}>
                    {extend_data.map((d) => (
                        <TouchableOpacity
                            style={[[styles.tab, {backgroundColor:theme.cardbg}], activetab2 === d.id && styles.activetab]}
                            onPress={() => set_tab2(d.id)}
                            key={d.id}
                        >
                            <Text style={[styles.time, activetab2 === d.id && styles.activetime]}>{d.time}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>
            <View style={styles.option_box_container}>
                <View style={styles.option_box}>
                    <Text style={[styles.title, {color:theme.color}]}>Wallet</Text>
                    <TouchableOpacity style={[styles.tab, {backgroundColor:theme.cardbg}]} onPress={wallet} >
                        <View style={styles.tab_left}>
                            <Wallet />
                            <Text style={styles.tab_text}>Wallet</Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.option_box}>
                    <Text style={[styles.title, {color:theme.color}]}>Credit & Debit Card</Text>
                    <TouchableOpacity style={[styles.tab, {backgroundColor:theme.cardbg}]} onPress={card} >
                        <View style={styles.tab_left}>
                            <Card />
                            <Text style={styles.tab_text}>Add Card</Text>
                        </View>
                    
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={[styles.title, {color:theme.color}]}>More Payment Option</Text>
            <View style={styles.pay_tab_container}>
                {
                    pay_card.map((d, index) => (
                        <TouchableOpacity style={[styles.tab, {backgroundColor:theme.cardbg}]} key={d.id} onPress={() => handlePress1(index)}>
                            <View style={styles.tab_left}>
                                {d.icon}
                                <Text style={styles.tab_text}>{d.text}</Text>
                            </View>
                            <CheckCircle size={24} color="#007BFF" checked={checkedStates[index]} />
                        </TouchableOpacity>
                    ))
                }
            </View>

            <View style={styles.button_box}>
                <Button buttonText="Pay $5" />
            </View>
        </View>
    )
}

export default Extend;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    heading: {
        fontSize: 22,
        lineHeight: 32,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    time_heading: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#000000',
        textTransform: 'capitalize',
        marginTop: 25,
        marginBottom: 16,
    },
    time_container: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 16,
        marginBottom: 20,
    },
    tab: {
        borderColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 4,
        minWidth: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
    },
    activetab: {
        backgroundColor: '#FF95AE',
    },
    time: {
        fontSize: 12,
        lineHeight: 24,
        fontFamily: 'Montserrat_500Medium',
        color: '#757575',
    },
    activetime: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat_700Bold',
        color: '#ffffff',
    },
    option_box_container: {
        gap: 16,
        marginBottom: 16,
    },
    option_box: {
        gap: 16,
    },
    pay_tab_container: {
        gap: 18,
        marginTop: 24,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        borderColor: '#F6F6F6',
        backgroundColor: '#F6F6F6',
    },
    tab_left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    tab_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Roboto_400Regular',
        color: '#757575',
        textTransform: 'capitalize',
    },
    title: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#000000',
    },
    button_box: {
        paddingTop: 40,
        paddingBottom: 60,
    }
})