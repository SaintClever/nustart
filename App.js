import React from 'react';
import { Text, View, StatusBar, ScrollView, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import Animal from './components/Animal';


export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor="#468189" />
      <ScrollView style={{ flex: 1 }}>
        <View>
          {/* <ImageBackground
            source={require('./json-server/public/images/backgroundImage.jpg')}
            style={style.imageBackground}> */}
            <Text>
              <Animal />
            </Text>
          {/* </ImageBackground> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    maxWidth: '100%'
  }
})
