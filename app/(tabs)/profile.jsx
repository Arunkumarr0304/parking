import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Switch, Modal } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/Back.svg";
import Dark_back from "../../assets/images/White_back.svg";
import { Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Profiles from "../../assets/images/profile_img2.png";
import ThemeContext from '../../theme/ThemeContext';  
import { profile_data } from '../../components/Data/Data';
import Drop_arrow from "../../assets/images/drop_arrow.svg";
import Logout from "../../assets/images/logout.svg";
import { router, Link } from "expo-router";
import { Roboto_400Regular } from '@expo-google-fonts/roboto';


const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    setModalVisible(true);
  };

  const confirmLogout = () => {
    setModalVisible(false);
  };

  const cancelLogout = () => {
    setModalVisible(false);
  };

  const back = () => {
    router.push('home');
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={back}>
       {darkMode? <Dark_back /> :  <Back />}
       </TouchableOpacity>
          <Text style={[styles.heading, {color: theme.color}]}>Profile</Text>
        </View>
        <View style={styles.image_box}>
          <Image source={Profiles} alt='image' style={styles.image} />
        </View>
        <View style={styles.details_row}>
          <View style={styles.profile_details}>
            <Text style={[styles.name, {color: theme.color}]}>Minato Namikaza</Text>
            <Text style={styles.email}>minatonami@gmail.com</Text>
            <Text style={styles.number}>(208) 555-0112</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.edit}>edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profile_data_container}>
        {profile_data.map((d) => (
          <TouchableOpacity
            style={styles.row}
            key={d.id}
            onPress={() => {
              if (d.name === 'Dark Mode') toggleTheme();
            }}
          >
            <View style={styles.row_left}>
              {darkMode ? d.active_icon : d.icon}
              <Text style={[styles.row_text, { color: theme.text }]}>{d.name}</Text>
            </View>
            {d.name === 'Dark Mode' ? (
              <Switch
                trackColor={{ false: "#767577", true: "#FF85A2" }}
                thumbColor={darkMode ? "#f4f3f4" : "#f4f3f4"}
                onValueChange={toggleTheme}
                value={darkMode}
                style={styles.switch}
              />
            ) : (
              <Drop_arrow />
            )}
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Logout />
        <Text style={[styles.logout_text, { color: theme.log }]}>logout</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cancelLogout}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.button} onPress={confirmLogout}>
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={cancelLogout}>
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container:{
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 80,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  image_box: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  image: {
    width: 100,
    height: 100,
  },
  details_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 24,
  },
  profile_details: {
    gap: 3,
  },
  name: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  email: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'Roboto_400Regular',
    color: '#757575',
  },
  number: {
    fontSize: 11,
    lineHeight: 19,
    fontFamily: 'Roboto_400Regular',
    color: '#757575',
  },
  button: {
    backgroundColor: '#FF85A2',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  edit: {
    fontSize: 12,
    lineHeight: 19,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  profile_data_container: {
    gap: 20,
    marginVertical: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  row_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Roboto_400Regular',
  },
  switch: {
    width: 20,
    maxHeight: 30,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 65,
    marginTop: 25,
  },
  logout_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Montserrat_500Medium',
    color: '#FE1717',
    textTransform: 'capitalize',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  buttonCancel: {
    backgroundColor: '#757575',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },

})