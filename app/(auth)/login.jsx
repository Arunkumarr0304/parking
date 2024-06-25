import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { router, Link } from "expo-router";
import Back from "../../assets/images/Back.svg";
import Mail from "../../assets/images/mail.svg";
import Lock from "../../assets/images/lock.svg";
import Open from "../../assets/images/eye-open.svg";
import Close from "../../assets/images/eye-close.svg";
import Done from "../../assets/images/Done.svg";
import Button from '../../components/Button/Button';
import { log_methods } from '../../components/Data/Data';

const Login = () => {
  const [Passwordvisible, setPasswordvisible] = useState(false);
  const [Passwordvisible2, setPasswordvisible2] = useState(false);
  const [Passwordvisible3, setPasswordvisible3] = useState(false);
  const [modalvisible, setModalvisible] = useState(false);
  const [modalvisible2, setModalvisible2] = useState(false);

  const open_modal = () => {
    setModalvisible(true);
  };
  const open_modal2 = () => {
    setModalvisible2(true);
  };

  const togglePasswordVisible = () => {
    setPasswordvisible(!Passwordvisible);
  };
  const togglePasswordVisible2 = () => {
    setPasswordvisible2(!Passwordvisible2);
  };
  const togglePasswordVisible3 = () => {
    setPasswordvisible3(!Passwordvisible3);
  };
  const verify = () => {
    router.push('verification');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login Account</Text>
      <Text style={styles.head_text}>Login to access your personalized music collection and playlists anytime, anywhere.</Text>
      <View style={styles.inputContainer}>
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
      <TouchableOpacity onPress={open_modal}>
        <Text style={styles.forget}>Forgot password</Text>
      </TouchableOpacity>
      <Button buttonText="Login" onPress={verify} />
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
      <Text style={[styles.bottom_text]}>Don’t have an account yet?<Link href='/create_account' style={styles.link} > Register</Link></Text>
      <Modal
        transparent={true}
        visible={modalvisible}
        onRequestClose={() => setModalvisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent]}>
            <View style={styles.modal_header}>
              <TouchableOpacity onPress={() => setModalvisible(false)}>
                <Back />
              </TouchableOpacity>
              <Text style={styles.heading}>Forgot Password</Text>
            </View>
            <Text style={styles.head_text}>Enter your email address below and we'll help you reset your password.</Text>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Email Or Phone Number</Text>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder='minatonamikaze@gmail.com' />
                <Mail style={styles.icon} />
                <Done style={styles.done} />
              </View>
            </View>
            <Button buttonText="continue" onPress={open_modal2} />
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={modalvisible2}
        onRequestClose={() => setModalvisible2(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent]}>
            <View style={styles.modal_header}>
              <TouchableOpacity onPress={() => setModalvisible2(false)}>
                <Back />
              </TouchableOpacity>
              <Text style={styles.modal_heading}>Create New Password</Text>
            </View>
            <Text style={styles.head_text}>Ensure your account's security with a strong, unique password.</Text>
            <View style={styles.inputContainer}>
              <View style={styles.inputBox2}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputWrapper}>
                  <TextInput style={styles.passwordInput} placeholder='Password' secureTextEntry={!Passwordvisible2} />
                  <TouchableOpacity onPress={togglePasswordVisible2} style={styles.eye}>
                    {Passwordvisible2 ? <Open /> : <Close />}
                  </TouchableOpacity>
                  <Lock style={styles.icon} />
                </View>
              </View>
              <View style={styles.inputBox3}>
                <Text style={styles.label}>confirm Password</Text>
                <View style={styles.inputWrapper}>
                  <TextInput style={styles.passwordInput} placeholder='Password' secureTextEntry={!Passwordvisible3} />
                  <TouchableOpacity onPress={togglePasswordVisible3} style={styles.eye}>
                    {Passwordvisible3 ? <Open /> : <Close />}
                  </TouchableOpacity>
                  <Lock style={styles.icon} />
                </View>
              </View>
            </View>
            <Button buttonText="continue" />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 26,
    lineHeight: 36,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  head_text: {
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
    marginBottom: 40,
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
    borderRadius: 10,
    paddingLeft: 40,
    paddingRight: 40,
  },
  icon: {
    position: 'absolute',
    bottom: 18,
    left: 10,
  },
  done: {
    position: 'absolute',
    bottom: 18,
    right: 10,
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
  },
  forget: {
    color: '#007BFF',
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Montserrat_500Medium',
    textTransform: 'capitalize',
    textAlign: 'right',
    marginBottom: 30,
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
    paddingBottom: 60,
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
  modal_heading: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
  },
  inputBox2: {
    gap: 8,
  },
  inputBox3: {
    marginBottom: 25,
    gap: 8,
  }
})