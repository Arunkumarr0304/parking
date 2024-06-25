import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native';
import React, {useRef, useState} from 'react';
import Back from "../../assets/images/Back.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Verify from "../../assets/images/Verify.png";
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";
import Tick from "../../assets/images/Tick.png";

const Verification = () => {
    const otpInputs = useRef([]);
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const continues = () => {
        setIsModalVisible(true);
    };

    const handleOtpChange = (index, value) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value !== '' && index < otp.length - 1) {
            otpInputs.current[index + 1].focus();
        }
    };

    const handleBackspace = (index, event) => {
        if (event.nativeEvent.key === 'Backspace') {
            const newOtp = [...otp];
            if (otp[index] !== '') {
                newOtp[index] = '';
                setOtp(newOtp);
                return;
            }
            if (index > 0) {
                newOtp[index - 1] = '';
                setOtp(newOtp);
                otpInputs.current[index - 1].focus();
            }
        }
    };
    const location = () => {
        router.push('location');
    };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>verification</Text>
      </View>
      <View style={styles.content}>
        <Image source={Verify} alt='image' style={styles.image} />
        <Text style={styles.content_heading}>Verification Code</Text>
        <Text style={styles.content_text}>We have sent the code verification to </Text>
        <Text style={styles.mail}>minatonami****@gmail.com</Text>
        <View style={styles.otp_block}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={[styles.input]}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(value) => handleOtpChange(index, value)}
                        onKeyPress={(event) => handleBackspace(index, event)}
                        value={digit}
                        ref={(ref) => otpInputs.current[index] = ref}
                    />
                ))}
            </View>
      </View>
      <Button buttonText="continue" onPress={continues} />
      <Text style={[styles.bottom_text]}>Didn’t receive the code?<Link href="/verification" style={styles.link}> Resend</Link></Text>
      <Modal
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                     <View style={styles.modalOverlay}>
                        <View style={[styles.modalContent]}>
                        <View style={styles.modal_header}>
                                <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                                  <Back />
                                </TouchableOpacity>
                                
                            </View>
                            <View style={styles.image_box2}>
                                <Image source={Tick} alt='image' style={styles.Tick} />
                            </View>
                            <Text style={[styles.modal_heading]}>Register Success</Text>
                            <Text style={styles.modal_description}>Congratulation your account already created. Please login to get amazing experience.</Text>
                           <Button buttonText="Continue" onPress={location} />
                            </View>
                            </View>

            </Modal> 
    </View>
  )
}

export default Verification;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 50,
    },
    heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    image: {
      width: 130,
      height: 130,  
    },
    content_heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
        marginTop: 30,
    },
    content_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Roboto_400Regular',
        color: '#757575',
        marginTop: 24,
    },
    mail: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Roboto_500Medium',
        color: '#121212',
    },
    otp_block: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginTop: 30,
        marginBottom: 140,
    },
    input: {
        borderWidth: 1,
        borderRadius: 15,
        width: 70,
        height: 60,
        textAlign: 'center',
        fontSize: 24,
        lineHeight: 30,
        color: '#000000',
        fontWeight: '700',
        backgroundColor: 'transparent',
        borderColor: '#BABABA',
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
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 30,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
  
    modal_header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 25,
    },
    image_box2: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal_heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textAlign: 'center',
        marginTop: 25,
    },
    modal_description: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        color: '#757575',
        marginTop: 16,
        marginBottom: 50,
    },
    Tick: {
        width: 130,
        height: 130,
    }
})