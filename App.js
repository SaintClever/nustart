import React from 'react';
import { StatusBar, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import Animal from './components/Animal';


export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor="#468189" />
      <ScrollView style={{ flex: 1 }}>
        <Animal />
      </ScrollView>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1
  }
})
