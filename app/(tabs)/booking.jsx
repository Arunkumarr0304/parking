import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, {useState} from 'react';
import Back from "../../assets/images/Back.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { booking_heading } from '../../components/Data/Data';

const Booking = () => {
  const [activeHeading, setActiveHeading] = useState(booking_heading[0].id);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>My Booking</Text>
      </View>
      <ScrollView>
      <View style={styles.heading_container}>
          {booking_heading.map((d) => (
            <TouchableOpacity
              key={d.id}
              style={[
                styles.heading_box,
                activeHeading === d.id && styles.active_heading_box,
              ]}
              onPress={() => handleHeadingPress(d.id)}
            >
              <Text
                style={[
                  styles.head_text,
                  activeHeading === d.id && styles.active_head_text,
                  
                ]}
              >
                {d.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Booking;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
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
  heading_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  heading_box: {
    borderBottomColor: '#474747',
    borderBottomWidth: 2,
  },
  active_heading_box: {
    borderBottomColor: '#C42072',
  },
  head_text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    color: '#474747',
    paddingHorizontal: 25,
    paddingBottom: 10,
  },
  active_head_text: {
    color: '#C42072',
  },
})