import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import Back from "../../assets/images/Back.svg";
import { router, Link } from "expo-router";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Search from "../../assets/images/search.svg";

const Manual = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>Enter Your Location</Text>
      </View>
      <View style={styles.input_container}>
        <View style={styles.search}>
          <Search  />
          </View>
        <TextInput style={[styles.input]} placeholder='Search' />
      </View>
    </View>
  )
}

export default Manual;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    input_container: {
        marginVertical: 25,
      },
      input: {
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
        paddingVertical: 16,
        paddingHorizontal: 40,
        position: 'relative',
      },
      search: {
        position: 'absolute',
        zIndex: 100,
        bottom: 18,
        left: 10,
      },
})