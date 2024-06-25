import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import Person from "../../assets/images/person.svg";
import Mail from "../../assets/images/mail.svg";
import Lock from "../../assets/images/lock.svg";
import Open from "../../assets/images/eye-open.svg";
import Close from "../../assets/images/eye-close.svg";
import Button from '../../components/Button/Button';
import { log_methods } from '../../components/Data/Data';
import { router, Link } from "expo-router";

const CreateAccount = () => {
    const [Passwordvisible, setPasswordvisible] = useState(false);


    const togglePasswordVisible = () => {
        setPasswordvisible(!Passwordvisible);
    };

    const verify = () => {
        router.push('verification');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Create Account</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
            <Text style={styles.headingText}>Create your account to unlock a personalized music experience tailored to your taste.</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputBox}>
                    <Text style={styles.label}>Username</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.input} placeholder='Minato Namikaze' />
                        <Person style={styles.icon} />
                    </View>
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.label}>Email Or Phone Number</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.input} placeholder='minatonamikaze@gmail.com' />
                        <Mail style={styles.icon} />
                    </View>
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.passwordInput} placeholder='Password' secureTextEntry={!Passwordvisible} />
                        <TouchableOpacity onPress={togglePasswordVisible} style={styles.eye}>
                            {Passwordvisible ? <Open /> : <Close />}
                        </TouchableOpacity>
                        <Lock style={styles.icon} />
                    </View>
                </View>
            </View>
            <Button buttonText="Create Account" onPress={verify} />
            <Text style={styles.or}>Or Using other Method</Text>
            <View style={styles.tab_container}>
            {
                log_methods.map((d) => (
                    <TouchableOpacity style={[styles.tab]} key={d.id}>
                        {d.image}
                        <Text style={[styles.tab_text]}>{d.text}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
        <Text style={[styles.bottom_text]}>Already have an account?<Link href='/login' style={styles.link} > Login</Link></Text>
        </ScrollView>
        </View>
    );
}

export default CreateAccount;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 28,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    headingText: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Roboto_400Regular',
        color: '#757575',
        marginVertical: 10,
    },
    inputContainer: {
        gap: 16,
        marginBottom: 26,
    },
    inputBox: {
        gap: 10,
    },
    label: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    inputWrapper: {
        position: 'relative',
    },
    input: {
        backgroundColor: '#F6F6F6',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingLeft: 40,
        paddingRight: 20,
    },
    icon: {
        position: 'absolute',
        bottom: 18,
        left: 10,
    },
    passwordInput: {
        backgroundColor: '#F6F6F6',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingLeft: 40,
        paddingRight: 50,
    },
    eye: {
        position: 'absolute',
        right: 10,
        bottom: 18,
    },
    or: {
        textAlign: 'center',
        marginVertical: 28,
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Roboto_400Regular',
        color: '#757575',
    },
    tab_container: {
        gap: 20,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        borderWidth: 1,
        borderColor: '#757575',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 25,
        backgroundColor: 'transparent',
    },
    tab_text: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Montserrat_500Medium',
        color: '#121212',
    },
    bottom_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Roboto_400Regular',
        color: '#121212',
        textAlign: 'center',
        marginVertical: 25,
        paddingBottom: 50,
    },
    link: {
        color: '#FF95AE',
    }
});
