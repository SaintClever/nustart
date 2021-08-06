import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, Modal, StyleSheet, Image, SafeAreaView } from 'react-native';
import { baseUrl } from '../shared/baseUrl';
import axios from 'axios';
import Layout from './Layout';
import { ListItem, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as Speech from 'expo-speech'; // React-tts doesn work in expo so I used expo-speech


class Animal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      showModal: false,
      animalBio: [],
      speak: true
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSpeak = this.handleSpeak.bind(this);
  }


  componentDidMount() {
    axios(baseUrl + 'animals')
      .then(res => {
        let animals = res.data;
        this.setState({ animals })
      }).catch(err => console.error(err));
  }


  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }


  passInAnimal(e) {
    console.log(e);
    this.setState({ animalBio: this.state.animals[e] });
  }

  handleSpeak(thingToSay) {
    if (this.state.speak) {
      Speech.speak(
        thingToSay, {
        language: 'en-US',
        pitch: 1,
        rate: 1
      });
    } else {
      this.setState({ speak: !this.state.speak });
    }
  }


  render() {
    const animalData = ({ item }) => {
      return (
        <Animatable.View animation='fadeInDown' duration={250} delay={500}>
          <TouchableOpacity style={{ paddingTop: 10, paddingBottom: 10 }}
            activeOpacity={.75}
            onPress={() => {
              this.toggleModal();
              this.passInAnimal(item.id);
              this.handleSpeak(item.title.slice(0, 1));
            }}>
            <ListItem
              subtitle={
                <Layout
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  vikidia={item.vikidia}
                />
              }
            />
          </TouchableOpacity>
        </Animatable.View>
      );
    };

    return (
      <View>
      <SafeAreaView style={{flex: 1, paddingTop: 10, paddingBottom: 10 }}>
        <Text>
          <FlatList
            data={this.state.animals}
            renderItem={animalData}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
          />
        </Text>
        </SafeAreaView>

        <Modal visible={this.state.showModal} onRequestClose={() => {
          this.toggleModal();
          Speech.stop(); // Built-in method from expo-speech
          }}>
          <View style={style.container}>
            <View style={style.containerBorder}>
              <View style={style.containerImage}>
                <Text style={style.modalTitle}>
                  {this.state.animalBio.title}
                </Text>
                <Image
                  source={{ uri: baseUrl + this.state.animalBio.image }}
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                />
              </View>
              <View style={{ padding: 1 }}>
                <View style={{ color: '#777', paddingBottom: 25, paddingRight: 25, paddingLeft: 25 }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSpeak(this.state.animalBio.description);
                  }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', fontStyle: 'italic', color: '#468189' }}>
                      {this.state.animalBio.title}
                      <Icon style={{ paddingLeft: 5 }}
                        type='font-awesome'
                        name='volume-up'
                        // name='play-circle'
                        color='#468189'
                        size={20}
                      />
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ lineHeight: 20 }}>
                    {this.state.animalBio.description}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    fontSize: 11
  },
  containerBorder: {
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  containerImage: {
    backgroundColor: '#eee',
    height: "50%",
    overflow: 'hidden'
  },
  modalTitle: {
    position: 'absolute',
    zIndex: 1,
    right: 25,
    top: 25,
    padding: 5,
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.50)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});



export default Animal;