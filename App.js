import React from 'react';

import { Text, View, StatusBar, ScrollView, SafeAreaView, StyleSheet, Header } from 'react-native';
import Menu from './components/Menu';

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor="#468189" />
      <ScrollView
        style={{ flex: 1}}
      >
        <View>
          <Text>
            <Menu />
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})
