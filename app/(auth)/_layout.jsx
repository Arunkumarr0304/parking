import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Stack} from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
    <Stack.Screen name='create_account' options={{headerShown: false}} />
    <Stack.Screen name='verification' options={{headerShown: false}} />
    <Stack.Screen name='login' options={{headerShown: false}} />
    <Stack.Screen name='location' options={{headerShown: false}} />
    <Stack.Screen name='manual_location' options={{headerShown: false}} />
    <Stack.Screen name='parking_details' options={{headerShown: false}} />
    <Stack.Screen name='book_slot' options={{headerShown: false}} />
    <Stack.Screen name='vehicle' options={{headerShown: false}} />
    <Stack.Screen name='parking_slot' options={{headerShown: false}} />
    <Stack.Screen name='review' options={{headerShown: false}} />
    <Stack.Screen name='payment' options={{headerShown: false}} />
    <Stack.Screen name='add_new_card' options={{headerShown: false}} />
    <Stack.Screen name='receipt' options={{headerShown: false}} />
    <Stack.Screen name='timer' options={{headerShown: false}} />
    <Stack.Screen name='extend_parking' options={{headerShown: false}} />
    <Stack.Screen name='wallet' options={{headerShown: false}} />
    </Stack>
  )
}

export default AuthLayout;

const styles = StyleSheet.create({})