import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Back from '../../assets/images/Back.svg';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { receipt_data, receipt_data2, receipt_data3 } from '../../components/Data/Data';
import Scan from "../../assets/images/scan_code.png";
import Button from '../../components/Button/Button';

const Receipt = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Back />
            <Text style={styles.heading}>E-Receipt</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          <View style={styles.receipt}>
            <Text style={styles.title}>Your Booking</Text>
            <View style={styles.review_container}>
              {receipt_data2.map((d) => (
                <View style={styles.review_row} key={d.id}>
                  <View style={styles.left_row}>
                    <Text style={styles.text}>{d.text}</Text>
                  </View>
                  <Text style={styles.value}>{d.value}</Text>
                </View>
              ))}
            </View>
            <View style={styles.hr}></View>
            <View style={styles.review_container}>
              {receipt_data.map((d) => (
                <View style={styles.review_row} key={d.id}>
                  <View style={styles.left_row}>
                    {d.icon}
                    <Text style={styles.text}>{d.text}</Text>
                  </View>
                  <Text style={styles.value}>{d.value}</Text>
                </View>
              ))}
            </View>
            <View style={styles.hr}></View>
            <Text style={styles.title}>Price Details</Text>
            <View style={styles.review_container}>
              {receipt_data3.map((d) => (
                <View style={styles.review_row} key={d.id}>
                  <View style={styles.left_row}>
                    <Text style={styles.text}>{d.text}</Text>
                  </View>
                  <Text style={styles.value}>{d.value}</Text>
                </View>
              ))}
            </View>
            <View style={styles.image_box}>
              <Image source={Scan} alt='image' style={styles.scan} />
            </View>
          </View>
          <View style={styles.button_box}>
            <Button buttonText="E-Ticket" />
          </View>
        </ScrollView>
    </View>
  );
}

export default Receipt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 60,
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  scrollView: {
    flex: 1,
  },
  receipt: {
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#F6F6F6',
  },
  title: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Montserrat_700Bold',
    color: '#000000',
    textTransform: 'capitalize',
  },
  review_container: {
    marginTop: 16,
    gap: 16,
  },
  review_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left_row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Roboto_500Medium',
    color: '#757575',
    textTransform: 'capitalize',
  },
  value: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Roboto_700Bold',
    color: '#121212',
  },
  hr: {
    borderBottomColor: '#BABABA',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    marginVertical: 16,
  },
  scan: {
    width: 280,
    height: 85,
  },
  image_box: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  button_box: {
    paddingTop: 30,
    paddingBottom: 50,
  },
});
