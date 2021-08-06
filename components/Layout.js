import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { baseUrl } from '../shared/baseUrl';


function Layout({ title, image, vikidia, description }) {
  return (
    <View style={style.container}>
      <View style={style.containerBorder}>
        <View style={style.containerImage}>
          <Text style={style.abcStyle}>
            {title.slice(0, 1)}
          </Text>
          <Image
            source={{ uri: baseUrl + image }}
            style={{
              height: 140,
              width: 140
            }}
          />
        </View>
        <View style={{ padding: 1 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', fontStyle: 'italic', color: '#468189', textAlign: 'center', padding: 5 }}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 140,
    height: 140,
    fontSize: 11
  },
  containerBorder: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#eee',
    borderWidth: 1
  },
  containerImage: {
    backgroundColor: '#eee',
    height: 140,
    overflow: 'hidden'
  },
  abcStyle: {
    position: 'absolute',
    zIndex: 1,
    right: 2.5,
    top: 2.5,
    padding: 5,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.50)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});

export default Layout;