import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '../theme/ThemeContext';

const Root_layout = () => {
  return (
    <ThemeProvider>
    <Stack>
    <Stack.Screen name='index' options={{ headerShown: false }} />
    <Stack.Screen name='(auth)' options={{ headerShown: false }} />
    <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
  </Stack>
  </ThemeProvider>
  )
}

export default Root_layout;

const styles = StyleSheet.create({})