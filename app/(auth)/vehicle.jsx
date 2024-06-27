import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Back from "../../assets/images/Back.svg";
import Add from "../../assets/images/add.svg";
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { vehicle_data } from '../../components/Data/Data';
import CheckCircle from "../../components/Check_Circle/Check_Circle";
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";

const Vehicle = () => {
  const [checkedStates, setCheckedStates] = useState(Array(vehicle_data.length).fill(false));

  const handlePress1 = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };
  const slot = () => {
    router.push('parking_slot');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_left}>
          <Back />
          <Text style={styles.heading}>Select Vehicle</Text>
        </View>
        <Add />
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.stack_container}>
          {vehicle_data.map((d, index) => (
            <TouchableOpacity style={styles.stack} key={d.id} onPress={() => handlePress1(index)}>
              {d.image}
              <View style={styles.stack_content}>
                <View style={styles.stack_content_left}>
                  <Text style={styles.company}>{d.company}</Text>
                  <Text style={styles.modal}>{d.modal}<Text style={styles.modal_no}> . {d.modalno}</Text></Text>
                </View>
                <CheckCircle
                  size={24}
                  color="#007BFF"
                  checked={checkedStates[index]}
                  onPress={() => handlePress1(index)}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.button_box}>
        <Button buttonText="continue" onPress={slot} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Vehicle;

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
    justifyContent: 'space-between',
  },
  header_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
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
  stack_container: {
    marginTop: 20,
  },
  stack: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  stack_content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 1,
    borderLeftColor: '#BABABA',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    gap: 10,
  },
  stack_content_left: {
    flexDirection: 'column',
    maxWidth: 180,
    minWidth: 180,
  },
  company: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
  },
  modal: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Montserrat_400Regular',
    color: '#757575',
  },
  modal_no: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
  },
  button_box: {
    paddingBottom: 50,
  }
});
