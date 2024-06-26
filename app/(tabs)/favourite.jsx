import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import Back from "../../assets/images/Back.svg";
import { Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { popular } from '../../components/Data/Data';
import Star from "../../assets/images/Star.svg";
import Heart from "../../assets/images/empty_heart.svg"; 
import HeartFilled from "../../assets/images/filled_heart.svg";
import Car from "../../assets/images/car.svg";
import Clock from "../../assets/images/clock.svg";


const Favourite = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>Favourite</Text>
      </View>
      <ScrollView>
      <View style={styles.stack_container}>
        {
          popular.map((d) =>(
            <TouchableOpacity style={styles.stack} key={d.id}>
              <Image source={d.image} style={styles.stack_img} alt='image' />
              <View style={styles.stack_body}>
                <View style={styles.stack_body_row}>
                <Text style={styles.parking}>{d.parking}</Text>
                <View style={styles.rating_row}>
                  <Star />
                  <Text style={styles.rating}>{d.rating}</Text>
                </View>
                </View>
                <View style={styles.name_price2}>
                  <Text style={styles.name}>{d.name}</Text>
                  <Text style={styles.price}>{d.price}<Text style={styles.time}>{d.timing}</Text></Text>
                </View>
                <View style={styles.timing_car2}>
                  <View style={styles.timing_row}>
                    <Clock />
                    <Text style={styles.timing}>{d.timing2}</Text>
                  </View>
                  <View style={styles.car_row}>
                    <Car />
                    <Text style={styles.car}>{d.vehicle}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
      </ScrollView>
    </View>
  )
}

export default Favourite;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 60,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  top_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    position: 'absolute',
    left: 10,
    top: 10,
    width: '100%',
    paddingHorizontal: 10,
},
rating_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#FFFFFF',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 8,
},
rating: {
    marginLeft: 5,
    fontSize: 12,
    lineHeight: 24,
    fontFamily: 'Roboto_400Regular',
    color: '#121212',
},
wishlist_container: {
    padding: 5,
},
card_body: {

},
parking: {
    fontSize: 10,
    lineHeight: 11,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#007BFF',
    backgroundColor: "rgba(0, 123, 255, 0.2)",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    maxWidth: 85,
    marginVertical: 8,
},
name_price: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: 6,
  borderBottomWidth: 1,
  borderBottomColor: '#BABABA',
},
name_price2: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: 6,
  width: '80%',
},
name: {
  fontSize: 14,
  lineHeight: 24,
  fontFamily: 'Montserrat_600SemiBold',
  color: '#121212',
},
price: {
  fontSize: 14,
  lineHeight: 24,
  fontFamily: 'Montserrat_600SemiBold',
  color: '#FF95AE',
},
time: {
  color: '#757575',
},
timing_car: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 8,
},
timing_car2: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 8,
  width: '80%',
},
timing_row: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
},
car_row: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
},
timing: {
  fontSize: 12,
  lineHeight: 22,
  fontFamily: 'Roboto_400Regular',
  color: '#121212',
},
car: {
  fontSize: 12,
  lineHeight: 22,
  fontFamily: 'Roboto_400Regular',
  color: '#121212',
},
stack_container: {
  gap: 10,
  paddingBottom: 50,
},
stack: {
  backgroundColor: '#F6F6F6',
  borderRadius: 10, 
  padding: 12,
  flexDirection: 'row',
},
stack_img: {
  width: 100,
  height: 100,
  borderRadius: 10,
},
stack_body: {
  paddingLeft: 10,
  gap: 5,
},
stack_body_row: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent:'space-between',
  width: '80%',
}
})