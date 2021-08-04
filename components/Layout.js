import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';


function Layout({ title, image, vikidia, description }) {
  return (
    <View style={style.container}>
      <View style={style.containerBorder}>
        <View style={style.containerImage}>
          <Image
            source={{ uri: baseUrl + image }}
            style={{
              height: 140,
              width: 140
            }}
          />
        </View>
        <View style={{ padding: 1 }}>
          <Text style={{ textAlign: 'center', padding: 5 }}>
            {title}
          </Text>
          {/* <Text style={{ color: '#777' }}>
            {image}<br />
            {vikidia}<br />
            {description}
          </Text> */}
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
  }
});

export default Layout;