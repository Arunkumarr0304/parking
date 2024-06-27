import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Image, Modal } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/Back.svg";
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Master from "../../assets/images/master.svg";
import CheckCircle from "../../components/Check_Circle/Check_Circle";
import Card from "../../assets/images/Debit_card.png";
import Button from '../../components/Button/Button';
import Paypal from '../../assets/images/paypal.svg';
import Phonepay from '../../assets/images/phonepay.svg';
import { pay_card } from '../../components/Data/Data';
import { router, Link } from "expo-router";
import Tick from "../../assets/images/payment_success.svg";
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

const Payment = () => {
 
  const [checked, setChecked] = useState(false);
  const [checkedStates, setCheckedStates] = useState(Array(pay_card.length).fill(false));
  const [isModalVisible, setIsModalVisible] = useState(false);

  const continues = () => {
    setIsModalVisible(true);
};

  const handlePress = () => {
    setChecked(!checked);
  };

  const handlePress1 = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  const add = () => {
    router.push('add_new_card');
  };

  const login = () => {
    router.push('home');
};

const back = () => {
  router.push('review');
};

  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
      <TouchableOpacity onPress={back}>
         <Back />
       </TouchableOpacity>
        <Text style={[styles.heading]}>Payment Method</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card_header}>
          <View style={styles.card_header_left}>
            <Master />
            <Text style={[styles.card_head]}>Credit/Debit Card</Text>
          </View>
          <CheckCircle size={24} color="#241353" checked={checked} onPress={handlePress} />
        </View>
        <TouchableOpacity style={styles.card_box}>
          <Image source={Card} alt='card' style={styles.image} />
          <Text style={styles.card_top}>Card</Text>
          <View style={styles.card_content}>
            <Text style={styles.card_no}>XXXX XXXX XXXX 0090</Text>
            <Text style={styles.card_holer}>Card holder</Text>
            <View style={styles.card_bottom_row}>
              <Text style={styles.holder_name}>Name</Text>
              <Text style={styles.year}>00/00</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Button buttonText="Add New Card" backgroundColor="transparent" borderColor="#FF6F6C" textColor="#FF6F6C" onPress={add} />
        <View style={styles.or_row}>
          <View style={styles.line}></View>
          <Text style={styles.or}>or</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.pay_tab_container}>
          {
            pay_card.map((d, index) => (
              <TouchableOpacity style={[styles.tab]} key={d.id} onPress={() => handlePress1(index)}>
                <View style={styles.tab_left}>
                  {d.icon}
                  <Text style={styles.tab_text}>{d.text}</Text>
                </View>
                <CheckCircle size={24} color="#241353" checked={checkedStates[index]}  />
              </TouchableOpacity>
            ))
          }
        </View>
        <View style={styles.button_box}>
          <Button buttonText="pay now" onPress={continues} />
        </View>
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
                            <View style={styles.image_box}>
                                <Tick />
                            </View>
                            <Text style={[styles.modal_heading]}>Payment Success</Text>
                            <Text style={styles.modal_description}>Ticket Payment, for the movie has been successful, Thank You!</Text>
                           <Button buttonText="Go to Homepage" onPress={login}  />
                            </View>
                            </View>

            </Modal> 
      </ScrollView>
    </View>
  )
}

export default Payment;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  card_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 33.5,
    marginBottom: 24,
    paddingHorizontal: 3,
  },
  card_header_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  card_head: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  card_box: {
    alignItems:'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  image: {
    maxWidth: 300,
    maxHeight: 180,
    width: 300,
    height: 180,
    borderRadius: 10,
    position: 'relative',
  },
  card_top: {
    position: 'absolute',
    top: 10,
    right: 25,
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  card_content: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    gap: 10,
  },
  card_no: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 25,
    fontFamily: 'Roboto_700Bold',
  },
  card_holer: {
    fontSize: 10,
    lineHeight: 12,
    fontFamily: 'Montserrat_500Medium',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  card_bottom_row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  },
  holder_name: {
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Montserrat_600SemiBold',
  },
  year: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 14,
    fontFamily: 'Montserrat_500Medium',
  },
  or_row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 25,
  },
  line: {
    borderBottomColor: '#9C9C9C',
    borderBottomWidth: 1,
    width: '45%',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  or: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: 'Montserrat_400Regular',
    color: '#9C9C9C',
  },
  pay_tab_container: {
    gap: 18,
    marginTop: 24,
  },
  tab: {
    flexDirection: 'row',
    alignItems:'center',
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
  button_box: {
    marginVertical: 100,
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
image_box: {
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
}
});
