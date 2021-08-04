import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, Modal, StyleSheet, Image, Linking } from 'react-native';
import { baseUrl } from '../shared/baseUrl';
import axios from 'axios';
import Layout from './Layout';
import { ListItem, Card } from 'react-native-elements';


class Animal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      showModal: false,
      animalBio: []
    }
    this.toggleModal = this.toggleModal.bind(this);
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
    this.setState({ animalBio: this.state.animals[e] });
  }


  render() {
    const animalData = ({ item }) => {
      return (

        <TouchableOpacity onPress={() => {
          this.toggleModal();
          this.passInAnimal(item.id);
        }}>
          <ListItem style={{ paddingBottom: 25 }}
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
      );
    };

    return (
      <View style={{ marginLeft: 8, marginTop: 20, marginBottom: 25 }}>
        <Text>
          <FlatList
            data={this.state.animals}
            renderItem={animalData}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
          />
        </Text>

        <Modal visible={this.state.showModal} onRequestClose={() => this.toggleModal()}>
          <View style={style.container}>
            <View style={style.containerBorder}>
              <View style={style.containerImage}>
                <Image
                  source={{ uri: baseUrl + this.state.animalBio.image }}
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                />
              </View>
              <View style={{ padding: 1 }}>
                {/* <Text style={{ textAlign: 'center', padding: 5 }}>
                  {this.state.animalBio.title}
                </Text> */}
                <View style={{ color: '#777', paddingBottom: 25, paddingRight: 25, paddingLeft: 25 }}>
                  <Text style={{ color: '#468189', fontSize: 25 }}
                    onPress={() => Linking.openURL(`'${this.state.animalBio.vikidia}'`)}>
                    {this.state.animalBio.title}
                    {console.log(this.state.animalBio.vikidia)}
                  </Text>
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
  }
});



export default Animal;