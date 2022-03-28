import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'
import ZipCodeFinder from './screens/ZipCodeFinder';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ZipCodeFinder />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.StatusBarHeight : 0
  },
});
